<template>
  <div id="app">
    <div class="header-wrap">
      <header></header>
    </div>
    <div class="main-wrap">
      <div class="main-content">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  components: {
  },
  data () {
    return {
      value: ''
    }
  },
  created () {

  },
  mounted () {
  }
}
</script>

<style lang="scss">
* {
  box-sizing: border-box;
}

html,
body {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  width: 100%;
  height: 100%;
}

.header-wrap {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 80px;
  header {
    width: 100%;
    height: 100%;
    max-width: 1140px;
    margin: auto;
    border-bottom: 1px solid #ddd;
  }
}

.main-wrap {
  width: 100%;
  height: 100%;
  overflow: hidden;
  .main-content {
    width: 100%;
    height: calc(100% - 80px);
    margin: auto;
    margin-top: 80px;
    max-width: 1140px;
    .page-title {
      font-size: 32px;
      line-height: 60px;
    }
  }
}
</style>
