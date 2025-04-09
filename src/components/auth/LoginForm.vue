<template>
  <v-alert
    v-if="feedbackMessage"
    class="mb-2"
    color="error"
  >
    {{ feedbackMessage }}
  </v-alert>

  <v-form @submit="handleLoginSubmit">
    <v-row class="d-flex mb-3">
      <v-col
        cols="12"
        class="pb-0"
      >
        <v-label
          for="email"
          class="font-weight-bold mb-1 cursor-pointer"
        >
          E-mail
        </v-label>

        <v-text-field
          id="email"
          v-model="email"
          color="primary"
          variant="outlined"
          :error-messages="errors.email"
          placeholder="email@provider.com"
        />
      </v-col>

      <v-col
        cols="12"
        class="pt-0"
      >
        <v-label
          for="password"
          class="font-weight-bold mb-1 cursor-pointer"
        >
          Senha
        </v-label>

        <v-text-field
          id="password"
          v-model="password"
          :error-messages="errors.password"
          color="primary"
          type="password"
          variant="outlined"
          placeholder="********"
        />
      </v-col>

      <v-col
        cols="12"
        class="pt-0"
      >
        <div class="d-flex flex-wrap align-center ml-n2">
          <div class="ml-sm-auto">
            <RouterLink
              to="/"
              class="text-primary text-decoration-none text-body-1 opacity-1 font-weight-medium"
            >
              Esqueceu a senha?
            </RouterLink>
          </div>
        </div>
      </v-col>

      <v-col
        cols="12"
        class="pt-0"
      >
        <v-btn
          flat
          block
          size="large"
          type="submit"
          color="primary"
          :loading="isSubmitting"
        >
          Entrar
        </v-btn>
      </v-col>
    </v-row>
  </v-form>
</template>

<script setup lang="ts">
import type { LoginRequiredPayload } from '@/types/auth'

import axios from 'axios'
import { object, string } from 'yup'
import {
  useForm,
  useField
} from 'vee-validate'
import { useRouter } from 'vue-router'

defineOptions({
  name: 'LoginForm',
})

const { handleSubmit, errors, isSubmitting } = useForm<LoginRequiredPayload>({
  initialValues: {
    email: '',
    password: ''
  },
  validationSchema: object({
    email: string()
      .required()
      .email()
      .label('E-mail'),
    password: string()
      .required()
      .min(8)
      .label('Senha')
  })
})

const { value: email } = useField('email')
const { value: password } = useField('password')

const handleLoginSubmit = handleSubmit(async values => {
  await handleLogin(values)
})

axios.defaults.withXSRFToken = true
axios.defaults.withCredentials = true

const router = useRouter()

const feedbackMessage = ref<string | null>()

async function handleLogin ({ email, password }: LoginRequiredPayload) {
  feedbackMessage.value = null

  await axios
    .get('http://localhost:8000/sanctum/csrf-cookie')
    .then(async () => {
      await axios
        .post('http://localhost:8000/api/login', {
          email: email,
          password: password,
        })
        .then(() => {
          router.push({
            name: 'dashboard',
          })
        })
        .catch(() => {
          feedbackMessage.value = 'E-mail ou senha inválidos'
        })
    })
}
</script>
