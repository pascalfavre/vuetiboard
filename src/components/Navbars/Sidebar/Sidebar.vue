<template>
  <nav>
    <v-navigation-drawer v-model="show" dark app>
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
  props: {
    show: { type: Boolean, required: true }
  },
  data () {
    return {
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
