<template>
  <div id="app">
   - A Smiple Demo -
   <div id="Input">
     <input v-focus v-model="newName" v-on:keyup.enter="sayhello" />
   </div>
  </div>
</template>

<script>
import SayHello from './components/plugin/sayhello.js'
import Focus from './components/plugin/focus.js'
import Vue from 'vue'
Vue.use(SayHello)
Vue.use(Focus)
export default {
  name: 'App',
  data () {
    return {
      newName: ''
    }
  },
  mounted () {
    this.$sayhello.show()
  },
  methods: {
    sayhello: function () {
      this.$sayhello.show(this.newName)
      this.newName = ''
    }
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
#Input {
  margin-top: 50px;
}
</style>
