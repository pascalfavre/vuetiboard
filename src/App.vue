<template>
  <v-app :style="{background: $vuetify.theme.themes.light.background}">
    <Sidebar
      :show="this.sidebarShow"
    />
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import Sidebar from '@/components/Navbars/Sidebar/Sidebar'

export default {
  components: {
    Sidebar
  },
  data () {
    return {
      sidebarShow: true
    }
  },
  methods: {
    updateDrawer () {
      this.sidebarShow = !this.sidebarShow
    }
  },
  computed: {
    theme () {
      return this.$vuetify.theme.dark ? 'dark' : 'light'
    }
  }
}
</script>
