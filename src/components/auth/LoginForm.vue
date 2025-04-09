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
import axios from 'axios'
import {
  useForm,
  useField
} from 'vee-validate'
import type {
  LoginRequiredPayload
} from '@/types/auth'

defineOptions({
  name: 'LoginForm',
})

const { handleSubmit, errors, isSubmitting } = useForm<LoginRequiredPayload>({
  initialValues: {
    email: '',
    password: ''
  },
  validationSchema: {
    email (value: string): string | boolean {
      if (!/^(([\p{L}\p{N}!#$%&'*+\/=?^_`{|}~-]+(\.[\p{L}\p{N}!#$%&'*+\/=?^_`{|}~-]+)*)|("[\p{L}\p{N}\s!#$%&'*+\/=?^_`{|}~.-]+"))@(([a-zA-Z0-9]+(-[a-zA-Z0-9]+)*\.)+[a-zA-Z]{2,63}|(\[(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])\]))$/u.test(value)) return 'Informe um endereço de e-mail válido'

      return true
    },

    password (value: string): string | boolean {
      if (!/\d/.test(value)) return 'Sua senha deve conter um número'

      if (!/[a-z]/.test(value)) return 'Sua senha deve conter uma letra minuscula'

      if (!/[A-Z]/.test(value)) return 'Sua senha deve conter uma letra maiuscula'

      if (!/.{8,}/.test(value)) return 'Informe uma senha com pelo menos 8 caracteres'

      if (!/[!@#$%^&*()_+{}\[\]:;<>,.?\/~\\-]/.test(value)) return 'Sua senha deve conter um caractere especial'

      return true
    }
  }
})

const { value: email } = useField('email')
const { value: password } = useField('password')

const handleLoginSubmit = handleSubmit(async values => {
  await handleLogin(values)
})

axios.defaults.withXSRFToken = true
axios.defaults.withCredentials = true

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
        .catch(() => {
          feedbackMessage.value = 'E-mail ou senha inválidos'
        })
    })
}
</script>
