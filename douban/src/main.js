import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import Element from 'element-ui'
import 'element-ui/lib/theme-default/index.css'

Vue.use(Element)
Vue.use(VueRouter);
Vue.use(VueResource);

const First = {
    template:'<div> <h1> 这是我第一个页面 </h1></div>'
}
import secondcomponent from './component/secondcomponent.vue';

/*
const router = new VueRouter({
    mode: 'history',
    base: __dirname,
    routes: [{
        path: '/first',
        component: First
    },{
        path: '/second',
        component: secondcomponent
        }]
})*/
const router = new VueRouter({
    mode: 'history',
    base: __dirname,
    routes: [
        { path: '/first', component: First },
        { path: '/second', component: secondcomponent}
    ]
})


new Vue({
    el: '#app',
    router: router,
    render: h => h(App)
})

