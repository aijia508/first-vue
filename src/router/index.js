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
      redirect:{path:'/home'},
      children:[
      {
        path: '/home',
        name: 'home',
        component: resolve => require(['@/components/view/home'],resolve),
        meta:{requireAuth:true},
      },{
        path:'/study',
        name:'study',
        component: resolve => require(['@/components/view/study'],resolve),
        meta:{requireAuth:true},  
      },
    ]
  }]
});
router.beforeEach((to, from, next) => {
  // to and from are both route objects. must call `next`.
  console.log(to.meta.requireAuth);
  console.log(from.path,1111,to.path);
  // if(to.path!='/login'){
    if(to.meta.requireAuth == true){
    if(sessionStorage.getItem('loginState') == 1){
      next()
    }else{
      router.push({
        path:'/login',
        query:{redirect:to.fullPath}
      });
      next()
    }
  }
  else{
    next()
  }
})
