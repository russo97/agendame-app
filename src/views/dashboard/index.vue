<template>
  <h1>Olá, {{ user?.name }} {{ isLoggedIn }}</h1>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useAuthStore } from '@/stores/auth'

const authStore = useAuthStore()

const {
  user,
  isLoggedIn
} = storeToRefs(authStore)
</script>
