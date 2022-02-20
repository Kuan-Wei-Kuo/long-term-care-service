<template>
  <v-app>
    <v-app-bar color="primary" app clipped-left dark dense flat>
      <v-app-bar-nav-icon 
        variant="text" 
        @click.stop="drawer = !drawer"
      ></v-app-bar-nav-icon>

      <v-toolbar-title>{{ title }}</v-toolbar-title>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" app clipped>
      <v-list>
        <v-list-item-group>
          <v-list-item
          v-for="(drawerItem, index) in drawerItems"
          :key="index"
          :to="drawerItem.path"
          @click.stop="drawer = !drawer"
          >{{ drawerItem.name }}</v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <router-view></router-view>
    </v-main>

    <v-footer app>此應用僅為測試使用，請勿用於生產環境。</v-footer>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    drawer: false,
    drawerItems: [
      { name: '首頁', path: '/' },
      { name: '照護服務計畫', path: '/plan' },
    ],

    title: '長期照護服務',
  }),
};
</script>
