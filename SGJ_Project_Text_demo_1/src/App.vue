<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->
    <!--<el-input v-model="input" placeholder="请输入内容" size="lagre" class="size1"></el-input>-->
    <router-view></router-view>
    <!--<router-link :to="{path:'/'}">登录</router-link>-->
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      input: ''
    }
  }
}
</script>

<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
