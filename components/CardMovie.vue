
<template>
  <v-card
    :title="movie.title"
    :to="`/${movie.id}`"
    elevation="1"
    :loading="loading"
    class="pa-3 rounded-xl "
    height="350"
    :width="width">
    <template slot="progress">
      <v-progress-linear
        color="deep-purple"
        height="10"
        indeterminate />
    </template>
    <v-row>
      <v-col cols="auto" lg="12">
        <v-img
          height="180"
          lazy-src="https://picsum.photos/id/11/10/6"
          :width="180"
          class="rounded-xl"
          :alt="movie.title"
          :src="`https://www.themoviedb.org/t/p/w220_and_h330_face/${movie.poster_path}`">
          <template #placeholder>
            <v-row
              class="fill-height ma-0"
              align="center"
              justify="center">
              <v-progress-circular
                indeterminate
                color="grey lighten-5" />
            </v-row>
          </template>
        </v-img>
      </v-col>

      <v-col cols lg="12">
        <v-card-text>
          <v-chip
            color="yellow darken-1"
            label
            small
            text-color="white">
            <v-icon small left>
              mdi-star
            </v-icon>
            {{ movie.vote_average }}
          </v-chip>
          <small class="text-subtitle-2">{{ new Date(movie.release_date).getFullYear() }}</small>
        </v-card-text>
        <v-card-title class=" pt-0 two-lines">
          {{ movie.title }}
        </v-card-title>
      </v-col>
    </v-row>
  </v-card>
</template>
<script>
export default {
  props: {
    movie: {
      type: Object,
      required: true
    }
  },
  data: () => ({
    loading: false,
    selection: 1
  }),
  computed: {
    width () {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs': return 400
        default: return 220
      }
    }
  },

  methods: {
    reserve () {
      this.loading = true
      setTimeout(() => (this.loading = false), 2000)
    }
  }
}
</script>
<style lang="scss">
    .two-lines {
  overflow: hidden !important;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  white-space: normal;
}

</style>
