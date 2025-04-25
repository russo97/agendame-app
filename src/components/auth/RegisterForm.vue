<template>
  <v-form @submit.prevent="submit">
    <v-alert
      v-if="feedbackMessage"
      class="mb-2"
      color="error"
    >
      {{ feedbackMessage }}
    </v-alert>

    <v-row class="d-flex mb-3">
      <v-col cols="12">
        <v-label class="font-weight-bold mb-1">
          Nome
        </v-label>

        <v-text-field
          v-model="firstName"
          :error-messages="errors.first_name"
          color="primary"
          variant="outlined"
        />
      </v-col>

      <v-col cols="12">
        <v-label class="font-weight-bold mb-1">
          E-mail
        </v-label>

        <v-text-field
          v-model="email"
          :error-messages="errors.email"
          type="email"
          color="primary"
          variant="outlined"
        />
      </v-col>

      <v-col cols="12">
        <v-label class="font-weight-bold mb-1">
          Senha
        </v-label>

        <v-text-field
          v-model="password"
          :error-messages="errors.password"
          type="password"
          color="primary"
          variant="outlined"
        />
      </v-col>

      <v-col cols="12">
        <v-btn
          flat
          block
          size="large"
          type="submit"
          color="primary"
          :loading="isSubmitting"
        >
          Cadastrar
        </v-btn>
      </v-col>
    </v-row>
  </v-form>
</template>

<script setup lang="ts">
import {
  object,
  string,
} from 'yup'
import {
  useForm,
  useField,
} from 'vee-validate'

import { useAuthStore } from '@/stores/auth'

defineOptions({
  name: 'RegisterForm',
})

const schema = object({
  first_name: string().required().label('Nome'),
  email: string().required().email().label('E-mail'),
  password: string()
    .required()
    .min(8)
    .matches(
      /^(?=.*[a-zA-Z])(?=.*[0-9])/,
      'Inclua ao menos uma letra e um número'
    )
    .label('Senha'),
})

const {
  errors,
  handleSubmit,
  isSubmitting,
} = useForm({
  validationSchema: schema,
  initialValues: {
    first_name: 'Jon',
    email: 'jon@snow.com',
    password: 'Password1',
  }
})

const { value: firstName } = useField('first_name')
const { value: email } = useField('email')
const { value: password } = useField('password')

const feedbackMessage = ref<string | null>()

const submit = handleSubmit(async ({ first_name, password, email }) => {
  feedbackMessage.value = null

  const useAuth = useAuthStore()

  const response = await useAuth.register({
    email,
    password,
    first_name,
  })

  const hasFailed = 'error' in response

  feedbackMessage.value = hasFailed
    ? response.message
    : null

  if (hasFailed) return

  console.log('deu bom')
})
</script>
