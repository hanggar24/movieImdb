<template>
  <div>
    {{ movie }}
  </div>
</template>

<script>
export default {
  data () {
    return {
      movie: {}
    }
  },
  created () {
    this.getDetailMovie()
  },

  methods: {
    async getDetailMovie () {
      try {
        const apiKey = process.env.API_KEY
        const movieId = this.$route.params.id
        const response = await this.$axios.$get(`movie/${movieId}?api_key=${apiKey}&language=en-US`)
        this.movie = response
      } catch (error) {
        console.log(error)
      }
    }
  }
}
</script>

<style>

</style>
