<template>
  <v-carousel
    class="rounded-xl"
    cycle
    height="400"
    hide-delimiter-background
    show-arrows-on-hover>
    <v-carousel-item
      v-for="(movie, i) in movies.slice(0,4)"
      :key="i"
      :src="`https://www.themoviedb.org/t/p/w220_and_h330_face/${movie.backdrop_path}`" />
  </v-carousel>
</template>
<script>
export default {
  data () {
    return {
      currentPage: 1,
      movies: []
    }
  },
  async fetch () {
    await this.getPopularMovies(this.currentPage)
  },
  watch: {
    currentPage (val) {
      this.$fetch()
    }
  },
  methods: {
    async getPopularMovies (page) {
      try {
        const apiKey = process.env.API_KEY
        const response = await this.$axios.$get(`movie/popular?api_key=${apiKey}&language=en-US&page=${page}`)
        const response2 = await this.$axios.$get(`movie/238/videos?api_key=${apiKey}&language=en-US`)
        console.log(response2)
        const { results } = response
        this.movies.push(...results)
      } catch (error) {
        console.log(error)
      }
    }
  }
}
</script>
