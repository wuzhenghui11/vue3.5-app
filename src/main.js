import './assets/main.css'

import { createApp, ref } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

const pinia = createPinia()

function AddStoreProps(context) {
  console.dir(context)
  console.log(context.options.pluginProp)

  // 你可以直接通过在一个插件中返回包含特定属性的对象来为每个 store 都添加上特定属性
  context.store.hello = ref('hello')

  context.store.$subscribe(() => {
    console.log('store 发生了变化')
  })
  context.store.$onAction(() => {
    console.log('响应 store actions')
  })
  return {
    haha: 'haha',
  }
}

pinia.use(AddStoreProps)

app.use(pinia)
app.use(router)

app.mount('#app')
