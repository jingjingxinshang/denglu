<template>
  <div class="shanghu">
    <h1>{{ msg }}</h1>
    <router-view></router-view>
    <!--<router-link :to="{ path: 'Mydate' }" class="yangshi">我的信息</router-link>
    <router-link :to="{ path: 'textb' }" class="yangshi">测试b</router-link>-->
  </div>
</template>

<script>
export default {
  name: 'shanghu',
  data () {
    return {
      msg: '商户中心'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
.yangshi {
  color: black;
  display: block;
  width: 200px;
}
</style>
