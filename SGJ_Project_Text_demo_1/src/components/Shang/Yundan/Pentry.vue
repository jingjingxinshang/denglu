<template>
<!--手工录入-->
  <div class="pentry">
    <h4>{{ msg }}</h4>
  </div>
</template>

<script>
export default {
  name: 'pentry',
  data () {
    return {
      msg: '手工录入'
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
