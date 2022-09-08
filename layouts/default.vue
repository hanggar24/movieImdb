<template>
  <v-app>
    <v-app-bar app fixed elevate-on-scroll color="white">
      <v-container class="d-flex align-center">
        <v-icon x-large color="primary">
          mdi-movie-roll
        </v-icon>
        <v-spacer />
        <v-toolbar-title>
          <nuxt-link to="/">
            <img src="../assets/img/logo.png" class="w-20 h-14 object-contain" alt="Movie App">
          </nuxt-link>
        </v-toolbar-title>
        <v-spacer />
        <v-btn
          v-if="!$vuetify.theme.dark"
          color="dark"
          x-small
          fab
          dark
          @click="toggleDarkMode">
          <v-icon>mdi-weather-night</v-icon>
        </v-btn>
        <v-btn
          v-else
          color="white"
          x-small
          fab
          @click="toggleDarkMode">
          <v-icon color="warning">
            mdi-white-balance-sunny
          </v-icon>
        </v-btn>
      </v-container>
    </v-app-bar>

    <v-main>
      <v-container>
        <v-row justify="center">
          <v-col cols="11" lg="10">
            <v-text-field
              v-model="searchText"
              clearable
              label="Cari Film"
              rounded
              single-line
              solo
              x-large
              append-icon="mdi-magnify"
              @click:clear="removeQuerySearch"
              @keyup.enter="searchMovie" />
          </v-col>
        </v-row>
      </v-container>
      <Nuxt />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'DefaultLayout',
  data: () => ({
    darkMode: false,
    searchText: ''
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
  created () {
    const { s } = this.$route.query
    if (s) { this.searchText = s }
  },
  methods: {
    searchMovie (e) {
      this.$router.push({
        path: '/search',
        query: {
          s:
        this.searchText
        }
      })
      console.log(e, 'tes')
    },
    toggleDarkMode () {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark
      this.darkMode = !this.darkMode
      localStorage.setItem('darkMode', this.$vuetify.theme.dark)
    },
    removeQuerySearch () {
      const query = Object.assign({}, this.$route.query)
      delete query.s
      this.$router.push({ query })
    }
  }
}
</script>
