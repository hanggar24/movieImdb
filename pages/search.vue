<template>
  <v-container>
    <v-row justify="center" align="center">
      <v-col cols="12">
        <ListMovie v-if="movies.length" :movies="movies" :loading="$fetchState.pending" />
        <h1 v-else class="text-5xl font-poppins text-center pt-10">
          Movie Not Found
        </h1>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col cols="auto">
        <v-btn
          v-if="movies.length > 10"
          v-intersect="onIntersect"
          class="opacity-0"
          color="primary"
          :loading="$fetchState.pending"
          large
          @click="currentPage++">
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
    },
    '$route.query': '$fetch'
  },
  watchQuery: ['s'],
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
        const response = await this.$axios.$get(`search/movie?api_key=${apiKey}&language=en-US&page=${page}&query=${this.$route.query.s}`)
        const { results } = response
        this.movies.push(...results)
      } catch (error) {
        console.log(error)
      }
    }
  }
}
</script>
