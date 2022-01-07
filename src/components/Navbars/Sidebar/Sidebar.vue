<template>
  <nav>
    <!-- App bar -->
    <v-app-bar app>
        <v-app-bar-nav-icon @click="show = !show"></v-app-bar-nav-icon>
        <v-app-bar-title>
          Vuetiboard
        </v-app-bar-title>

        <v-spacer></v-spacer>
        <!-- search bar -->
        <v-text-field filled dense rounded label="Search"
          prepend-inner-icon="fas fa-search" class="mt-6 mr-2"></v-text-field>

          <v-btn icon>
            <v-icon>fas fa-envelope</v-icon>
          </v-btn>
          <v-btn icon>
            <v-list-item-avatar>
              <v-img src="https://randomuser.me/api/portraits/men/85.jpg"></v-img>
            </v-list-item-avatar>
          </v-btn>
    </v-app-bar>

    <!-- Sidebar -->
    <v-navigation-drawer v-model="show" dark app>
      <v-divider></v-divider>
      <v-list flat>
        <SidebarContent :sidebarItem="item" v-for="item in menu" :key="item.title"  />
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>

<script>
import SidebarContent from './SidebarContent.vue'

export default {
  components: {
    SidebarContent
  },
  data () {
    return {
      show: true,
      selectedItem: 0,
      menu: [
        {
          title: 'Home',
          icon: 'fas fa-home',
          link: '/'
        },
        {
          title: 'Submenu',
          icon: 'far fa-keyboard',
          link: '/about',
          childrenContent: [
            {
              title: 'Submenu 1',
              icon: 'far fa-keyboard',
              link: '/about'
            }
          ]
        },
        {
          title: 'About',
          icon: 'far fa-address-card',
          link: '/about'
        }
      ]
    }
  }
}
</script>

<style>
</style>
