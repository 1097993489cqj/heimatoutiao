import Vue from 'vue'
import App from './App.vue'

import ELEMENT from 'element-ui'

import 'element-ui/lib/theme-chalk/index.css'

// 1.默认索引 文件夹下 存在index.js index.vue index.json 默认加载这些文件
// 2.在使用vue-cli 的时候@符号在路经中作为前缀使用的时候代表src目录
import router from './router'

Vue.use(ELEMENT)

Vue.config.productionTip = false

// 职责1.导入项目目录需要依赖的资源(包 css..)
// 职责2.初始化根实例 new vue（）选项 renter 作用是把某一个APP组件渲染在你指定的容器（.$mount('#app))内
new Vue({
  render: h => h(App)
}).$mount('#app')
export default router
