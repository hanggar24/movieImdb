<template>
  <v-row justify="space-between">
    <!-- <template v-if="loading">
      <v-col v-for="loader in 20" :key="loader" cols="auto">
        <SkeletonCardMovie />
      </v-col>
    </template> -->
    <v-col v-for="movie in movies" :key="movie.id" cols="auto">
      <CardMovie :movie="movie" />
    </v-col>
  </v-row>
</template>

<script>
import SkeletonCardMovie from './SkeletonCardMovie.vue'
import CardMovie from './CardMovie.vue'
export default {
  components: {
    CardMovie,
    // eslint-disable-next-line vue/no-unused-components
    SkeletonCardMovie
  },
  props: {
    loading: {
      type: Boolean,
      default: false
    },
    movies: {
      type: Array,
      required: true
    }
  }

}
</script>

<style>

</style>
