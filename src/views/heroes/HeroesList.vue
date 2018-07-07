<template>
    <div id="app">
        <h2 class="sub-header">英雄列表</h2>
          <router-link class="btn btn-success" :to="{ name: 'add' }">Add</router-link>
          <div class="table-responsive">
            <table class="table table-striped">
              <thead>
                <tr>
                  <th>#</th>
                  <th>名称</th>
                  <th>性别</th>
                  <th>操作</th>
                </tr>
              </thead>
              <tbody>
                <tr :key="item.id" v-for="(item,index) in list">
                  <td> {{ index + 1 }} </td>
                  <td> {{ item.name }} </td>
                  <td> {{ item.gender }} </td>
                  <td>
                    <!-- <a href="edit.html">edit</a> -->
                    <router-link :to="{ name: 'edit', params: { id: item.id} }">编辑</router-link>
                    &nbsp;&nbsp;
                    <!-- <a href="javascript:window.confirm('Are you sure?')">delete</a> -->
                    <a href="#" @click.prevent="handleDelete(item.id)">delete</a>
                  </td>
                </tr>
                
              </tbody>
            </table>
          </div>
    </div>
</template>



<script>
    import axios from 'axios'

    export default {
        data() {
            return {
                list: []
            }
        },
        created () {
            this.loadData();
        },
        methods: {
            loadData () {
                this.$http
                    .get('/heroes')
                    .then((res) => {
                        // console.log(res)
                        const { status, data } = res
                        if (status === 200) {
                            //查询成功
                            this.list = data;
                        }
                    })
            },
            handleDelete (id) {
                //删除提示
                if (!confirm('你确定删除吗?')) {
                    return;
                }
                this.$http
                    .delete(`/heroes/${id}`)
                    .then((res) => {
                        const { status, data } = res

                        if (status === 200) {
                            //删除成功
                            this.loadData();
                        } else {
                            alert('删除失败!')
                        }
                    })
            }
        }
    }
</script>

<style>

</style>
