import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import { Location, Message, Phone } from '@element-plus/icons-vue'
import 'element-plus/dist/index.css'
import App from './App.vue'

const app = createApp(App)

app.use(ElementPlus)
app.component('location', Location)
app.component('message', Message)
app.component('phone', Phone)
app.mount('#app')
