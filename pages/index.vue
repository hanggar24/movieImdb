<template>
  <v-container class="flex flex-col gap-10">
    <section name="Carousel Movie">
      <CarouselMovie />
    </section>
    <section name="popular movies">
      <PopularMovieVue />
    </section>
    <section name="top rated movies">
      <TopRatedMovie />
    </section>
  </v-container>
</template>

<script>
import PopularMovieVue from '~/components/PopularMovie.vue'
import CarouselMovie from '~/components/CarouselMovie.vue'
import TopRatedMovie from '~/components/TopRatedMovie.vue'
export default {
  components: {
    PopularMovieVue,
    CarouselMovie,
    TopRatedMovie
  }
}
</script>
