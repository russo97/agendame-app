<template>
  <v-alert
    v-if="feedbackMessage"
    class="mb-2"
    color="error"
  >
    {{ feedbackMessage }}
  </v-alert>

  <v-form @submit="handleLogin">
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
          :rules="[mailRules.required, mailRules.email]"
          color="primary"
          variant="outlined"
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
          :rules="[passRules.required, passRules.hasMinLength, passRules.hasNumber]"
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
          :loading="loading"
        >
          Entrar
        </v-btn>
      </v-col>
    </v-row>
  </v-form>
</template>

<script setup lang="ts">
import axios from 'axios'
import type {AuthResponse, ErrorPattern} from "@/types/auth";

defineOptions({
  name: 'LoginForm',
})

axios.defaults.withXSRFToken = true
axios.defaults.withCredentials = true

const email = ref('')
const password = ref('')
const loading = ref<boolean>(false)
const feedbackMessage = ref<string | null>()

const mailRules: Record<string, (value: string) => string | boolean> = {
  required: (value: string) => !!value || 'Informe seu endereço de e-mail',
  email: (value: string) => {
    const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

    return pattern.test(value) || 'Informe um e-mail válido'
  },
}

const passRules = {
  required: (value: string) => !!value || 'Informe sua senha',
  hasNumber: (value: string) => /\d/.test(value) || 'Sua senha deve conter ao menos um número',
  hasMinLength: (value: string) => value.length > 7 || 'Sua senha deve conter ao menos 8 caracteres',
}

async function handleLogin (e: SubmitEvent) {
  e.preventDefault()

  feedbackMessage.value = null

  loading.value = true

  axios
    .get('http://localhost:8000/sanctum/csrf-cookie')
    .then(() => {
      axios
        .post('http://localhost:8000/api/login', {
          email: email.value,
          password: password.value,
        })
        .catch(() => {
          feedbackMessage.value = 'E-mail ou senha inválidos'
        })
        .finally(() => {
          loading.value = false
        })
    })
}
</script>
