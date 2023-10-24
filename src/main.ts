// 引入模板的全局样式
import '@/styles/index.scss'
// svg 插件配置
import 'virtual:svg-icons-register'
import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
//@ts-expect-error忽略当前文件ts类型的检测
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'

import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'

const app = createApp(App)
app.use(ElementPlus, {
  locale: zhCn
})
app.use(createPinia())
app.use(router)
import gloablComponent from './components/index.ts'
app.use(gloablComponent)

import Vant from 'vant'
import 'vant/lib/index.css'
app.use(Vant) // 把vant中所有组件都导入了
// 通过import.meta.env 可获取当前环境下的变量
// console.log(import.meta.env)

app.mount('#app')
