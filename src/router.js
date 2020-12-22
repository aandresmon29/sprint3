import vueRouter from 'vue-router'
import entrega from './components/entregas'
import tarea from './components/tareas'
import dline from './components/deadline'
import App from './App'

const router = new vueRouter({
    mode: 'history',
    base: __dirname,
    routes: [
    {
    path: '/',
    name: "root",
    component: App
    },
    {
    path: '/entregas/objetivo1',
    name: "entrega",
    component: entrega
    },
    {
        path: '/tareas/objetivo1',
        name: "tarea",
        component: tarea
    },
    {
        path: '/deadline/objetivo1',
        name: "dline",
        component: dline
    },
    {
    path: '/entregas/responsable',
    name: "responsable",
    component: entrega
    },
    ]
})
export default router   