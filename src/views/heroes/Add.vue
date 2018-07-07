<template>
    <div id="app">
        <h2 class="sub-header">添加英雄</h2>
        <form>
          <div class="form-group">
            <label for="name">名字</label>
            <input type="text" class="form-control" id="name" placeholder="name" v-model="formData.name">
          </div>
          <div class="form-group">
            <label for="sex">性别</label>
            <input type="text" class="form-control" id="sex" placeholder="sex" v-model="formData.gender">
          </div>
          <button type="submit" class="btn btn-success" @click.prevent="handleAdd">Submit</button>
        </form>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    data () {
        return {
            formData: {
                name: '',
                gender: ''
            }
        }
    },
    methods: {
        handleAdd () {
            this.$http
                .post('/heroes', this.formData)
                .then((res => {
                    const { status, data } = res
                    if (status === 201) {
                        //添加成功
                        this.$router.push({name: 'heroes'})
                    } else {
                        alert('添加失败!')
                    }
                }))
        }
    }
}
</script>


<style>

</style>
