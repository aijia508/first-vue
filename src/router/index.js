import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export var router = new Router({
  routes: [
    {
      path:'/login',
      name:'login',
      component:resolve =>require(['@/components/login'], resolve),
      meta:{requireAuth:false}//判断是否需要登录
    },{
      path:'/register',
      name:'register',
      component:resolve => require(['@/components/register'],resolve),
      meta:{requireAuth:false}
    },{
      path:'/',
      name:'head',
      component:resolve => require(['@/components/common/head'],resolve),
      // redirect:{path:'/home'},
      children:[
        {
          path:'/student',
          name:'student',
          component: resolve => require(['@/components/view/student'],resolve),
          meta:{requireAuth:true},  
        },{
        path: '/teacher',
        name: 'teacher',
        component: resolve => require(['@/components/view/teacher'],resolve),
        meta:{requireAuth:true},
        },{
          path:'/personal',
          name:'personal',
          component: resolve => require(['@/components/view/personal'],resolve),
          meta:{requireAuth:true},
        }
    ]
  }]
});
// router.beforeEach((to, from, next) => {

//     if(to.meta.requireAuth == true){
//     if(sessionStorage.getItem('loginState') == 1){
//       next()
//     }else{
//       router.push({
//         path:'/login',
//         query:{redirect:to.fullPath}
//       });
//       // next()
//     }
//   }
//   else{
//     next()
//   }
// })
