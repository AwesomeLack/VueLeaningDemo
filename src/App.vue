<template>
  <div id="app">
    <img src="./assets/logo.png">
    <header>
      <div>
        <router-link to="/Hello">HelloWorld</router-link>
        <router-link to="/List">List</router-link>
      </div>
      <div>
        <router-link :to="{name: 'User', params: {userId: 123}}">User123</router-link>
        <router-link :to="{name: 'User', params: {userId: 456}}">User456</router-link>
      </div>
    </header>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
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
