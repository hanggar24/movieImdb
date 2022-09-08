<template>
  <div class="flex justify-between">
    <h1 class="font-bold text-xl lg:tex-3xl text-gray-600 font-poppins">
      {{ title }}
    </h1>

    <nuxt-link :to="path" class="primary--text">
      View All
    </nuxt-link>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ''
    },
    path: {
      type: String,
      default: ''
    }

  }

}
</script>

<style>

</style>
