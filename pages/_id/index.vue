<template>
  <v-container class="py-10">
    <div v-if="$fetchState.pending">
      <v-skeleton-loader
        v-bind="attrs"
        type="list-item-avatar, divider, list-item-three-line, card-heading, image, actions" />

      <v-skeleton-loader
        v-bind="attrs"
        type="list-item-avatar-three-line, image, article" />
    </div>
    <v-row v-else justify="center">
      <v-col cols="12" lg="4">
        <v-img :src="`https://www.themoviedb.org/t/p/w220_and_h330_face/${movie.poster_path}`" class="rounded-xl" />
      </v-col>
      <v-col cols="10" lg="8">
        <div class="flex flex-col">
          <div class="title flex gap-2 items-center">
            <h1 class="font-poppins text-xl lg:text-4xl">
              {{ movie.title }}
            </h1>
            <span clas="text-sm">({{ new Date(movie.release_date).getFullYear() }})</span>
          </div>
          <small> <i>{{ movie.tagline }}</i></small>

          <div class="genre flex gap-2 mb-8 mt-4">
            <v-chip v-for="genre in movie.genres" :key="genre.id" x-small>
              {{ genre.name }}
            </v-chip>
          </div>

          <article>
            {{ movie.overview }}
          </article>

          <div class="sub mt-10 flex flex-col lg:flex-row gap-4">
            <v-list-item>
              <v-list-item-avatar>
                <v-icon
                  class="yellow darken-1"
                  dark>
                  mdi-star
                </v-icon>
              </v-list-item-avatar>

              <v-list-item-content>
                <v-list-item-title v-text="'Popularity'" />

                <v-list-item-subtitle v-text="movie.popularity" />
              </v-list-item-content>
            </v-list-item>

            <v-list-item>
              <v-list-item-avatar>
                <v-icon
                  class="purple darken-1"
                  dark>
                  mdi-clock
                </v-icon>
              </v-list-item-avatar>

              <v-list-item-content>
                <v-list-item-title v-text="'   Release Date'" />

                <v-list-item-subtitle v-text="movie.release_date" />
              </v-list-item-content>
            </v-list-item>

            <v-list-item>
              <v-list-item-avatar>
                <v-icon
                  class="blue"
                  dark>
                  mdi-vote
                </v-icon>
              </v-list-item-avatar>

              <v-list-item-content>
                <v-list-item-title v-text="'Vote'" />

                <v-list-item-subtitle v-text="`${movie.vote_count} / ${movie.vote_average}`" />
              </v-list-item-content>
            </v-list-item>
          </div>
          <div class="vote mt-4 rounded-lg gap-4 border-2 border-dashed p-2 flex  flex-col items-center justify-center">
            <span class="font-semibold">Rate This Movie</span>

            <v-rating
              v-model="rating"
              empty-icon="mdi-star-outline"
              full-icon="mdi-star"
              half-icon="mdi-star-half-full"
              hover
              half-increments
              length="10"
              size="24"
              @input="postRating" />
            ({{ rating }})
          </div>
        </div>
      </v-col>
    </v-row>
    <v-snackbar
      v-model="snackbarSuccess"
      top
      color="success">
      {{ responseSuccess }}
      <template #action="{ attrs }">
        <v-btn
          color="white"
          text
          v-bind="attrs"
          @click="snackbarSuccess = false">
          Close
        </v-btn>
      </template>
    </v-snackbar>
    <v-snackbar
      v-model="snackbarError"
      top
      color="red">
      {{ responseError }}
      <template #action="{ attrs }">
        <v-btn
          color="white"
          text
          v-bind="attrs"
          @click="snackbarError = false">
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      movie: {},
      rating: 0,
      snackbarSuccess: false,
      responseSuccess: '',
      snackbarError: false,
      responseError: ''
    }
  },

  async fetch () {
    await this.getDetailMovie()
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
    },
    async postRating () {
      try {
        const apiKey = process.env.API_KEY
        const movieId = this.$route.params.id
        const response = await this.$axios.$post(`movie/${movieId}/rating?api_key=${apiKey}`, { value: this.rating })
        this.responseSuccess = response.data.status_message
        this.snackbarSuccess = true
      } catch (error) {
        this.snackbarError = true
        this.responseError = error.response.data.status_message
        console.log(error)
        console.log(error.response)
      }
    }
  }
}
</script>

<style>

</style>
