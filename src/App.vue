<template>
  <div id="app">
    <div v-bind:style="{ backgroundColor: 'purple' }" class='leftbox'/>
    <div v-bind:style="{ backgroundColor: 'orange' }" class='topbox'>
      <router-link class='routerlink' to="/">Home</router-link>
      <router-link class='routerlink' to="/loginorsignup">Login/Signup</router-link>
      <router-link class='routerlink' to="/newcharacter">New</router-link>
      <router-link class='routerlink' to="/savedcharacters">Saved</router-link>
    </div>
    <router-view v-bind:style="{ backgroundColor: 'skyblue' }" class='contentbox'></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    /*grid layout top level */
    display: grid;
    grid-template-columns: 15vw 85vw;
    grid-template-rows: 10vh 90vh;
    grid-gap: 0vw;
    overflow: hidden;
    background-color: #fff;
    color: #444;
  }
  .routerlink{
    font-size: 5vh;
    margin-left: 2.5%;
    margin-right: 2.5%;
    font-weight: bold;
    text-decoration: none;
  }
  .leftbox{
    grid-column: 1 / 2;
    grid-row: 1 / 3;
    background-color: tomato;
  }
  .topbox{
    grid-column: 2 / 3;
    grid-row: 1 / 2;
    background-color: skyblue;
    /*padding-top: 0.75%;*/
  }
  .contentbox{
    grid-column: 2 / 3;
    grid-row: 2 / 3;
    background-color: grey;
  }
  .positionrelative{
    position: relative;
    height: 100%;
    width: 100%;
  }
</style>
