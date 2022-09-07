<template>
  <v-container>
    <v-row justify="center" align="center">
      <v-col cols="12">
        <ListMovie :movies="movies" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import ListMovie from '~/components/ListMovie'
export default {
  components: {
    ListMovie
  },
  data () {
    return {
      movies: []
    }
  },
  created () {
    this.getPopularMovies()
  },

  methods: {
    async getPopularMovies () {
      try {
        const apiKey = process.env.API_KEY
        const response = await this.$axios.$get(`movie/popular?api_key=${apiKey}&language=en-US&page=1`)
        const { results } = response
        this.movies = [...results]
      } catch (error) {
        console.log(error)
      }
    }
  }
}
</script>
