<template>
  <v-form @submit.prevent="submit">
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
          @click="register"
        >
          Cadastrar
        </v-btn>
      </v-col>
    </v-row>
  </v-form>
</template>

<script setup lang="ts">
import axios from 'axios'
import {
  object,
  string,
} from 'yup'
import {
  useForm,
  useField,
} from 'vee-validate'

defineOptions({
  name: 'RegisterForm',
})

const schema = object({
  first_name: string().required().label('Nome'),
  email: string().required().email().label('E-mail'),
  password: string().required().label('Senha'),
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

const submit = handleSubmit(async (values, ctx) => {
  console.log(values)
  console.log(ctx)
})

function register () {
  const data = {
    'first_name': 'Test',
    'email': 'test2@test.com',
    'password': '12345678A',
  }

  axios.post('/api/register', data)
}
</script>
