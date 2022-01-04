<template>
  <v-app-bar app>
    <v-app-bar-nav-icon @click="updateDrawer"></v-app-bar-nav-icon>
    Title
  </v-app-bar>
</template>

<script>
export default {
  methods: {
    updateDrawer () {
      this.$emit('updateDrawer')
    }
  }
}
</script>
