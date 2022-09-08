<template>
  <v-container>
    <v-row justify="center" align="center">
      <v-col cols="12">
        <ListMovie :movies="movies" :loading="$fetchState.pending" />
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col cols="auto">
        <v-btn v-intersect="onIntersect" color="primary" :loading="$fetchState.pending" large @click="currentPage++">
          Lihat Lebih Banyak
        </v-btn>
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
      currentPage: 1,
      isIntersecting: false,
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
    onIntersect (entries, observer) {
      this.isIntersecting = entries[0].isIntersecting
      if (this.isIntersecting) {
        this.currentPage++
      }
    },
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
