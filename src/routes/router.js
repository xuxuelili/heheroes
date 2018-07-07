//导入vue
import vue from 'vue'
//导入vue-router
import VueRouter from 'vue-router'

//导入组件
import HeroesList from '../views/heroes/HeroesList.vue'
import EquipsList from '../views/equips/EquipsList.vue'
import WeaponsList from '../views/weapons/WeaponsList.vue'
import Add from '../views/heroes/Add.vue'
import Edit from '../views/heroes/Edit.vue'

//创建路由对象, 配置路由规则
const router = new VueRouter({
    linkExactActiveClass: 'active',
    routes: [
        {name: 'home', path: '/', redirect: { name: 'heroes' } },
        {name: 'heroes', path: '/heroes', component: HeroesList},
        {name: 'equips', path: '/equips', component: EquipsList},
        {name: 'weapons', path: '/weapons', component: WeaponsList},
        {name: 'add', path: '/heroes/add', component: Add},
        {name: 'edit', path: '/heroes/edit/:id', component: Edit}
    ]
})

//导出模块
export default router