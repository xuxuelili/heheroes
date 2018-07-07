<template>
  <div id="app">
    <app-header></app-header>
    <div class="container-fluid">
      <div class="row">
        <!-- 侧边栏 -->
        <app-sidebar></app-sidebar>
        <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
          <!-- 表格 -->
          <router-view></router-view>
        </div>
      </div>
    </div>
</div>
</template>

<script>
//导入组件
import AppHeader from './components/AppHeader.vue'
import AppSidebar from './components/AppSidebar'
export default {
  name: 'app',
  data () {
    return {
      msg: 'hello'
    }
  },
  components: {
    AppHeader,
    AppSidebar
  }
}
</script>

<style lang="scss">

</style>
