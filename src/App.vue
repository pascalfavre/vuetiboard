<template>
  <v-app :style="{background: $vuetify.theme.themes.light.background}">
    <Sidebar
      :show="this.sidebarShow"
    />
    <Appbar
      @updateDrawer="updateDrawer"
    />
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import Sidebar from '@/components/Navbars/Sidebar/Sidebar'
import Appbar from '@/components/Navbars/AppBar'

export default {
  components: {
    Sidebar,
    Appbar
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
