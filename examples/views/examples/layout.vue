<template>
  <df-row class="example-wrap">
    <df-col :span="6" style="height: 100%;">
    </df-col>
    <df-col :span="18" style="height: 100%;">
      <router-view></router-view>
    </df-col>
  </df-row>
</template>

<style lang="scss" scoped>
.example-wrap {
  width: 100%;
  height: 100%;
}
</style>
