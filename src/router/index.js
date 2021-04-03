import { createRouter, createWebHashHistory } from 'vue-router'


const routes = [
 {
   path:'/one',
   name:"one",
   component:()=>import('../components/one.vue')
 },
 {
  path:'/two',
  name:"two",
  component:()=>import('../components/two.vue')
}
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
