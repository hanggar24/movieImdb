<template>
  <v-app>
    <v-app-bar app fixed elevate-on-scroll>
      <v-container class="d-flex align-center">
        <v-toolbar-title>Movie App</v-toolbar-title>
        <v-spacer />
        <v-btn
          v-if="!$vuetify.theme.dark"
          color="dark"
          x-small
          fab
          dark
          @click="toggleDarkMode"
        >
          <v-icon>mdi-weather-night</v-icon>
        </v-btn>
        <v-btn
          v-else
          color="white"
          x-small
          fab
          @click="toggleDarkMode"
        >
          <v-icon color="warning">
            mdi-white-balance-sunny
          </v-icon>
        </v-btn>
      </v-container>
    </v-app-bar>

    <v-main>
      <Nuxt />
    </v-main>
    <v-footer>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis, non
      corporis asperiores necessitatibus porro nulla libero consectetur error,
      unde laboriosam earum cupiditate aliquam saepe distinctio numquam pariatur
      quidem delectus tempora?
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: 'DefaultLayout',
  data: () => ({
    darkMode: false
  }),
  computed: {
    switchLabel () {
      return this.darkMode ? 'light' : 'dark'
    }
  },
  mounted () {
    const theme = localStorage.getItem('darkMode')
    if (theme) {
      if (theme === 'true') {
        this.$vuetify.theme.dark = true
        this.darkMode = true
      } else {
        this.darkMode = false
        this.$vuetify.theme.dark = false
      }
    } else if (
      window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches
    ) {
      this.$vuetify.theme.dark = true
      localStorage.setItem('darkMode', this.$vuetify.theme.dark.toString())
    }
  },
  methods: {
    toggleDarkMode () {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark
      this.darkMode = !this.darkMode
      localStorage.setItem('darkMode', this.$vuetify.theme.dark)
    }
  }
}
</script>
