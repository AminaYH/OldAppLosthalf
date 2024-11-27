import { createApp } from 'vue'
import App from './App.vue'
import * as VueRouter from 'vue-router'

import 'bootstrap/dist/css/bootstrap.css'
import bootstrap from 'bootstrap/dist/js/bootstrap.bundle.js'

import Dashboard from './pages/dashboard.vue'
import FoodDetailsPage from './pages/Consumption-detail-page.vue'
import Cart from './pages/cart.vue'
import PageNotFound from './pages/404.vue'
import consumptionPage from "@/pages/consumption-page.vue";
import wastPage from "@/pages/food-wate-page.vue";
import StatisticsPage from "@/pages/Statistics.vue";
createApp(App)
.use(bootstrap)
.use(VueRouter.createRouter({
    history: VueRouter.createWebHistory(process.env.BASE_URL),
    routes: [{
        path: '/cart',
        component: Cart,
    },{
        path: '/dashboard',
        component: Dashboard,
    },{
        path: '/consumptions',
        component: consumptionPage,
    },{
        path: '/consumptions/:id',
        component: FoodDetailsPage,
    },{
        path:'/Statistics',
        component: StatisticsPage,
    }
        ,{
        path:'/uses',
        component:wastPage,
    }
        ,{
        path: '/:pathMatch(.*)*',
        component: PageNotFound,
    }]
}))

.mount('#app')
