<template>
  <v-row class="d-flex mb-3">
    <v-col cols="12">
      <v-label class="font-weight-bold mb-1">
        Name
      </v-label>

      <v-text-field
        hide-details
        color="primary"
        variant="outlined"
      />
    </v-col>

    <v-col cols="12">
      <v-label class="font-weight-bold mb-1">
        Email Address
      </v-label>

      <v-text-field
        type="email"
        hide-details
        color="primary"
        variant="outlined"
      />
    </v-col>

    <v-col cols="12">
      <v-label class="font-weight-bold mb-1">
        Password
      </v-label>

      <v-text-field
        hide-details
        type="password"
        color="primary"
        variant="outlined"
      />
    </v-col>

    <v-col cols="12">
      <v-btn
        flat
        block
        to="/"
        size="large"
        color="primary"
      >
        Sign up
      </v-btn>
    </v-col>
  </v-row>
</template>

<script setup lang="ts">
import { ref } from 'vue'

defineOptions({
  name: 'RegisterForm',
})

const checkbox = ref(true)
</script>
