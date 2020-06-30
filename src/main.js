import Vue from 'vue'

import Cookies from 'js-cookie'

import 'normalize.css/normalize.css' // a modern alternative to CSS resets

import Element from 'element-ui'
import './styles/element-variables.scss'

import '@/styles/variables/_core.scss' // reset css
import '@/styles/index.scss' // global css

import App from './App'
import store from './store'
import router from './router'

import './icons' // icon
import './permission' // permission control
import './utils/error-log' // error log

// iconfont
import '@/styles/variables/fonts/iconfont.js'
import IconSvg from '@/components/icon-svg'
//全局注册icon-svg
Vue.component('icon-svg', IconSvg)

import * as filters from './filters' // global filters

import qs from 'qs' // qs
Vue.prototype.$qs = qs

import service from './utils/axios' // axios
Vue.prototype.$axios = service

// 富文本
import VueQuillEditor from 'vue-quill-editor-cosmo'

// require styles
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'

Vue.use(VueQuillEditor /* { default global options } */)

Vue.use(Element, {
  size: Cookies.get('size') || 'medium', // set element-ui default size
})

// register global utility filters
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
})
