<template>
  <div class="authentication">
    <v-container
      fluid
      class="pa-3"
    >
      <v-row class="h-100vh d-flex justify-center align-center">
        <v-col
          lg="4"
          xl="3"
          cols="12"
          class="d-flex align-center"
        >
          <v-card
            rounded="md"
            elevation="10"
            max-width="500"
            class="px-sm-1 px-0 withbg mx-auto"
          >
            <v-card-item class="pa-sm-8">
              <div class="d-flex justify-center py-4">
                <Logo />
              </div>

              <div class="text-body-1 text-muted text-center mb-3">
                Your Social Campaigns
              </div>

              <LoginForm />

              <h6 class="text-h6 text-muted font-weight-medium d-flex justify-center align-center mt-3">
                New to Modernize?

                <RouterLink
                  :to="{ name: 'register' }"
                  class="text-primary text-decoration-none text-body-1 opacity-1 font-weight-medium pl-2"
                >
                  Create an account
                </RouterLink>
              </h6>
            </v-card-item>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script setup lang="ts">
import Logo from '@/layouts/full/logo/Logo.vue'
import LoginForm from '@/components/auth/LoginForm.vue'
</script>
