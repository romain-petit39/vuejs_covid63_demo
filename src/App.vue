<template>
  <div id="app">
    <div id="nav">
      <h1>COVID63</h1>
      <router-link to="/">Home</router-link>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
};
</script>

<style lang="scss">
#app {
  font-family: Roboto, Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 10px 14px;
  background-color: #2c3e50;
  color: #ffffff;
  display: flex;
  justify-content: space-between;
  align-items: center;

  a {
    font-weight: bold;
    color: #ffffff;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
