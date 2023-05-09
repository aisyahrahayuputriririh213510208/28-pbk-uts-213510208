<template>
    <div>
      <nav>
        <router-link to="/">home </router-link>  |
        <router-link to="/info">info</router-link>
      </nav>
      <router-view></router-view>
    </div>
  </template>
  
  <script>
  export default {
    name: 'App',
    data() {
      return {
        filterDone: false
      }
    }
  }
  </script>
