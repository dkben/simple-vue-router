import HomeView from '@/components/HomeView/HomeView.vue'
import Page1View from '@/components/Page1View/Page1View.vue'
import Page2View from '@/components/Page2View/Page2View.vue'
import Page3View from '@/components/Page3View/Page3View.vue'
import Page4View from '@/components/Page4View/Page4View.vue'
import VueRouter from "vue-router";

var routers = [
    {
        path: '/',
        redirect: '/home'
    },
    {
        path: '/home',
        component: HomeView
    },
    {
        path: '/page1',
        component: Page1View
    },
    {
        path: '/page2',
        component: Page2View
    },
    {
        path: '/page3',
        component: Page3View
    },
    {
        path: '/page4',
        component: Page4View
    }
];

export const router  = new VueRouter({
    routes: routers
});