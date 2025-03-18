<template>
  <v-row>
    <v-col
      md="12"
      cols="12"
    >
      <UiParentCard title="Default Text">
        <Heading />
      </UiParentCard>

      <UiParentCard
        class="mt-6"
        title="Default Text"
      >
        <Default />
      </UiParentCard>
    </v-col>
  </v-row>
</template>

<script setup lang="ts">
import UiParentCard from '@/components/shared/UiParentCard.vue'
import Heading from "@/components/style-components/typography/Heading.vue"
import Default from "@/components/style-components/typography/DefaultText.vue"
</script>
