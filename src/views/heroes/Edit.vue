<template>
    <div id="app">
        <h2 class="sub-header">修改英雄</h2>
        <form>
          <div class="form-group">
            <label for="name">名字</label>
            <input type="text" class="form-control" id="name" placeholder="name" v-model="formData.name">
          </div>
          <div class="form-group">
            <label for="sex">性别</label>
            <input type="text" class="form-control" id="sex" placeholder="sex" v-model="formData.gender">
          </div>
          <button type="submit" class="btn btn-success">Submit</button>
        </form>
    </div>
</template>

<script>
export default {
    data () {
        return {
            formData: {
                name: '',
                gender: ''
            }
        }
    }
}
</script>

<style>

</style>
