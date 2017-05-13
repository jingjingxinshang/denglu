<template>
<!--商管家平台-->
  <div class="ShangIndex">
    
    <!--<router-link :to="{path:'/ShangIndex/Yundan'}">运单中心</router-link>-->
    <!--<router-link :to="{path:'/ShangIndex/Shanghu'}">商户中心</router-link>-->
    <el-row class="tac lista">
      <el-col :span="4">
        <el-menu mode="vertical" class="el-menu-vertical-demo" router>
          <el-menu-item-group title="运单中心">
            <!--<router-link :to="{path:'/ShangIndex/Yundan'}">运单中心</router-link>-->
            <!--<el-menu-item index="1"><i class="el-icon-message"></i><router-link :to="{ path: '/ShangIndex/Yundan/Porder' }">在线下单</router-link></el-menu-item>-->
            <el-menu-item index="/ShangIndex/Yundan/Porder"><i class="el-icon-message"></i>在线下单</el-menu-item>
            <!--<el-menu-item index="2"><i class="el-icon-message"></i><router-link :to="{ path: '/ShangIndex/Yundan/Pentry' }">手工录入</router-link></el-menu-item>-->
            <el-menu-item index="/ShangIndex/Yundan/Pentry"><i class="el-icon-message"></i>手工录入</el-menu-item>
            <!--<el-menu-item index="3"><i class="el-icon-message"></i><router-link :to="{ path: '/ShangIndex/Yundan/Meorder' }">我的运单</router-link></el-menu-item>-->
            <el-menu-item index="/ShangIndex/Yundan/Meorder"><i class="el-icon-message"></i>我的运单</el-menu-item>
            <!--<el-menu-item index="4"><i class="el-icon-message"></i><router-link :to="{ path: '/ShangIndex/Yundan/Payment' }">货款管理</router-link></el-menu-item>-->
            <el-menu-item index="/ShangIndex/Yundan/Payment"><i class="el-icon-message"></i>货款管理</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="商户中心">
            <!--<router-link :to="{path:'/ShangIndex/Shanghu'}">商户中心</router-link>-->
            <!--<el-menu-item index="5"><i class="el-icon-message"></i><router-link :to="{ path: '/ShangIndex/Shanghu/Mydate' }" class="yangshi">我的信息</router-link></el-menu-item>-->
            <el-menu-item index="/ShangIndex/Shanghu/Mydate"><i class="el-icon-message"></i>我的信息</el-menu-item>
            <!--<el-menu-item index="6"><i class="el-icon-message"></i><router-link :to="{ path: '/ShangIndex/Shanghu/textb' }" class="yangshi">测试b</router-link></el-menu-item>-->
            <el-menu-item index="/ShangIndex/Shanghu/textb"><i class="el-icon-message"></i>我的信息</el-menu-item>
          </el-menu-item-group>
        </el-menu>
      </el-col>
    </el-row>
    <h1>{{ msg }}</h1>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'ShangIndex',
  data () {
    return {
      msg: '商管家平台'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
el-menu-item{
  font-family: '微软雅黑'
}
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
  text-decoraction: none;
}
.lista{
  text-align: center;
}
</style>

