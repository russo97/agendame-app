<template>
  <v-sheet
    rounded="md"
    color="lightprimary"
    class="ExtraBox hide-menu mx-3 px-6 pb-5 pt-4"
  >
    <div class="d-flex align-center">
      <div class="pr-1">
        <h6 class="text-h6 text-10 mb-2">
          Unlimited Access
        </h6>

        <v-btn
          flat
          size="small"
          color="primary"
          to="https://adminmart.com/product/modernize-vuetify-vue-admin-dashboard/?ref=5"
        >
          Upgrade
        </v-btn>
      </div>

      <div class="mt-n7 ml-2" />
    </div>
  </v-sheet>
</template>

<script setup lang="ts">
defineOptions({
  name: 'ExtraBox',
})
</script>

<style lang="scss">
.ExtraBox {
  position: relative
}

.line-height-none {
  line-height: normal
}
</style>
