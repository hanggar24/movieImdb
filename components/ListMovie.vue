<template>
  <v-row justify="space-between" :class="scrollX">
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
    wrap: {
      type: Boolean,
      default: false
    },
    movies: {
      type: Array,
      required: true
    }
  },
  computed: {
    scrollX () {
      if (!this.wrap) {
        return ''
      }
      return ['!flex-nowrap', 'py-8', 'overflow-auto']
    }
  }

}
</script>

<style>

</style>
