<template>
  <h1>Olá, {{ user?.name }} {{ isLoggedIn }}</h1>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useMeStore } from '@/stores/me'

const authStore = useMeStore()

const {
  user,
  isLoggedIn
} = storeToRefs(authStore)
</script>
