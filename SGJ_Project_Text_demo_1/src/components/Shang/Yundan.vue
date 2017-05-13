<template>
  <div class="yundan">
    <h1>{{ msg }}</h1>
    <router-view></router-view>
    <!--<router-link v-for="(item,index) in items" :to="{ path: item.path }" :key="item" class="yangshi">{{ item.name }}</router-link>-->
    <!--<router-link :to="{ path: '/Yundan/Porder' }" class="yangshi">在线下单</router-link>-->
    <!--<router-link :to="{ path: '/Yundan/Pentry' }" class="yangshi">手工录入</router-link>-->
    <!--<router-link :to="{ path: '/Yundan/Meorder' }" class="yangshi">我的运单</router-link>-->
    <!--<router-link :to="{ path: '/Yundan/Payment' }" class="yangshi">货款管理</router-link>-->
  </div>
</template>

<script>
export default {
  name: 'yundan',
  data () {
    return {
      msg: ' 运单中心'
      // items: [
      //   {
      //     name: '在线下单',
      //     path: 'Porder'
      //   },
      //   {
      //     name: '手工录入',
      //     path: 'Pentry'
      //   },
      //   {
      //     name: '我的运单',
      //     path: 'Meorder'
      //   },
      //   {
      //     name: '贷款管理',
      //     path: 'Payment'
      //   }
      // ]
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
