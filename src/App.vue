<template>
  <div id="app">
    <HeaderView></HeaderView>

    <TabBarView></TabBarView>

    <ContentView></ContentView>

    <router-view></router-view>

    <FooterView></FooterView>
  </div>
</template>

<script>
  import HeaderView from './components/HeaderView/HeaderView.vue';
  import ContentView from './components/ContentView/ContentView.vue';
  import FooterView from './components/FooterView/FooterView.vue';
  import TabBarView from './components/TabBarView/TabBarView.vue';


export default {
  name: 'app',
  components: {
    HeaderView,
    ContentView,
    FooterView,
    TabBarView
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
