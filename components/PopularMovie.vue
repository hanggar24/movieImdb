<template>
  <div class="flex flex-col gap-6">
    <TitleSection title="Popular Movies" path="/popular-movies" />
    <ListMovie wrap :movies="movies.slice(0,5)" />
  </div>
</template>

<script>
import TitleSection from './TitleSection.vue'
import ListMovie from './ListMovie.vue'
export default {
  components: {
    TitleSection,
    ListMovie
  },
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
        const { results } = response
        this.movies.push(...results)
      } catch (error) {
        console.log(error)
      }
    }
  }

}
</script>

<style>

</style>
