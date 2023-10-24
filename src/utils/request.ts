// import { Toast } from 'vant'
import axios from 'axios'
// import store from '@/store/index'
// 创建axios 实例 将来对创建出来的实例，进行自定义封装
// 好处 不会污染原始的axios实例，
const instance = axios.create({
  // 接口调用的基础地址
  baseURL: '/',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  },
  timeout: 8000 // 超时时间
})

// 自定义配置 - 请求响应拦截器
// 添加请求拦截器
instance.interceptors.request.use(
  function (config) {
    // 在发送请求之前做些什么
    // 开启loading 禁止背景点击(节流处理 防止多次点击)
    // Toast.loading({
    //   message: '加载中...',
    //   forbidClick: true, // 禁止背景点击
    //   loadingType: 'spinner', // loading图标
    //   duration: 0 // 展示时长(ms)，默认2s 值为 0 时，toast 不会自动消失 我们应该在响应回来的时候关闭
    // })

    // 只要有token 就在请求时携带 便于请求需要授权的接口
    // const token = store.getters.token
    // if (token) {
    //   config.headers['Access-Token'] = token
    //   config.headers.platform = 'H5'
    // }
    return config
  },
  function (error) {
    // 对请求错误做些什么
    return Promise.reject(error)
  }
)

// 添加响应拦截器
instance.interceptors.response.use(
  function (response) {
    // 2xx 范围内的状态码都会触发该函数。
    // 对响应数据做点什么(默认axios会多包装一层data，需要响应拦截器中修改)
    // const res = response.data
    // if (res.status !== 200) {
    //   // 给错误提示 Toast默认是单例模式，后面的toast调用了会将前一个覆盖 同时只能出现一个
    //   Toast(res.message)
    //   // 抛出一个错误的Promise 如果不抛出 awiat还会往下走
    //   return Promise.reject(res.message)
    // } else {
    //   // 正确情况
    //   Toast.clear() // 清除loading效果
    // }
    return response
  },
  function (error) {
    // 超出 2xx 范围的状态码都会触发该函数。
    // 对响应错误做点什么
    return Promise.reject(error)
  }
)

// 导出配置好的实例
export default instance
