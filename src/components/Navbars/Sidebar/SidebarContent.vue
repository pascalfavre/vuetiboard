<template>
  <div>
    <v-list-item
      v-if="!sidebarItem.childrenContent"
      router
      :to="sidebarItem.link"
    >
      <v-list-item-icon>
        <v-icon class="mb-2 ml-2 mr-2">{{ sidebarItem.icon }}</v-icon>
      </v-list-item-icon>
      <v-list-item-title>
        {{ sidebarItem.title }}
      </v-list-item-title>
    </v-list-item>
    <v-list-item v-else>
      <v-list-group :prepend-icon="sidebarItem.icon" class="mb-2 ml-2 mr-2" style="padding-left: 0px !important">
        <template v-slot:activator>
          <v-list-item-title>{{ sidebarItem.title }}</v-list-item-title>
        </template>

        <v-list-item
          v-for="sidebarChildren in sidebarItem.childrenContent"
          :key="sidebarChildren.title"
          router
          :to="sidebarChildren.link"
        >
          <v-list-item-icon>
            <v-icon class="mb-2 ml-2 mr-2">{{ sidebarChildren.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-title v-text="sidebarChildren.title"></v-list-item-title>
        </v-list-item>
      </v-list-group>
    </v-list-item>
  </div>
</template>

<script>
export default {
  props: {
    sidebarItem: { type: Object, required: true }
  }
}
</script>
