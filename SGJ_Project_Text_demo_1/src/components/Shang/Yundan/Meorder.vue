<template>
<!--我的运单-->
  <div class="meorder">
    <h4>{{ msg }}</h4>
  </div>
</template>

<script>
export default {
  name: 'meorder',
  data () {
    return {
      msg: '我的运单'
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
</style>
