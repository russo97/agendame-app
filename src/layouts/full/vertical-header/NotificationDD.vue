<template>
  <v-btn
    icon
    variant="text"
    class="custom-hover-primary ml-0 ml-md-5 text-muted"
  >
    <v-badge
      dot
      color="primary"
      offset-x="-5"
      offset-y="-3"
    >
      <BellRingingIcon
        size="22"
        stroke-width="1.5"
      />
    </v-badge>
  </v-btn>
</template>

<script setup lang="ts">
import { BellRingingIcon } from 'vue-tabler-icons'
</script>
