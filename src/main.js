import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import i18n from "./i18n"
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import {request , request1} from "./network/request"
//引入富文本编辑器
import VueQuillEditor from 'vue-quill-editor'
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'

Vue.config.productionTip = false

//注册全局
Vue.use(VueQuillEditor);
Vue.use(ElementUI);

Vue.prototype.$http = request;
Vue.prototype.$net = request1;

router.beforeEach((to,from,next)=>{
  console.log(to)
  if(to.path == '/login' || to.path == "/zhuce"){
    next()
  }else{
    if(to.matched.length == 2){
      store.dispatch('setTitleList',[])
    }else if(to.matched.length == 3){
      let arr = []
      arr.push(to.matched[1].meta.title)
      arr.push(to.matched[2].meta.title)
      store.dispatch('setTitleList',arr)
    }
    
    if(window.sessionStorage.getItem('token')){
      next()
    }else{
      next("/login")
    }
  }
})

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
