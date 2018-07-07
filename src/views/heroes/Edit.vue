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
          <button type="submit" @click.prevent="handleEdit" class="btn btn-success">Submit</button>
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
            },
            heroesId: -1                                                                    
        }
    },
    created () {
        this.heroesId = this.$route.params.id;
        this.loadData();
    },
    methods: {
        loadData () {
            this.$http
                .get(`/heroes/${this.heroesId}`)
                .then((res => {
                    // console.log(res)
                    if (res.status === 200) {
                        this.formData = res.data;
                        // console.log(this.formData)
                    } 
                }))
        },
        handleEdit () {
            this.$http
                .put(`/heroes/${this.heroesId}`, this.formData)
                .then((res) => {
                    if (res.status === 200) {
                        this.$router.push({name: 'heroes'})
                    } else {
                        alert('修改失败!')
                    }
                })    
        }
    }
}
</script>

<style>

</style>
