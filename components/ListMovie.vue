<template>
  <v-row justify="space-between">
    <v-col v-for="movie in movies" :key="movie.id" cols="auto">
      <CardMovie :movie="movie" />
    </v-col>
  </v-row>
</template>

<script>
import CardMovie from './CardMovie.vue'
export default {
  components: {
    CardMovie
  },
  props: {
    movies: {
      type: Array,
      required: true
    }
  }

}
</script>

<style>

</style>
