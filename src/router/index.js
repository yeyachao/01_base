import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path:"/",
    redirect:"/login"
  },
  {
    path:"/login",
    name:"login",
    component:()=>import('../views/Login')
  },
  {
    path:"/zhuce",
    name:"zhuce",
    component:()=>import("../views/ZhuCe")
  },
  {
    path:"/layout",
    name:"layout",
    component:() => import("../views/Layout"),
    redirect:"/home",
    children:[
      {
        path:"/home",
        name:"home",
        meta:{
          title:"首页"
        },
        component:()=>import("../views/Home")
      },
      {
        path:"/pms",
        name:"pms",
        meta:{
          title:"商品"
        },
        component:()=>import("../views/pms/Pms"),
        children:[
          {
            path:"product",
            name:"product",
            meta:{
              title:"商品列表"
            },
            component:()=>import("../views/pms/Product")
          },
          {
            path:"addProduct",
            name:"addProduct",
            meta:{
              title:"添加商品"
            },
            component:()=>import("../views/pms/AddProduct")
          },
          {
            path:"changeProduct/:id",
            name:"changeProduct",
            meta:{
              title:"修改商品"
            },
            component:()=>import("../views/pms/ChangeProduct")
          }
        ]
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
