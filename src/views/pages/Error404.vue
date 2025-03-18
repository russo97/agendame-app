<template>
  <div class="d-flex justify-center align-center text-center h-100vh">
    <div>
      <img
        alt="404"
        width="500"
        src="@/assets/images/background/errorimg.svg"
      >

      <h1 class="text-h1 pt-3">
        Opps!!!
      </h1>

      <h4 class="text-h4 my-8">
        This page you are looking for could not be found.
      </h4>

      <v-btn
        flat
        to="/"
        class="mb-4"
        color="primary"
      >
        Go Back to Home
      </v-btn>
    </div>
  </div>
</template>
