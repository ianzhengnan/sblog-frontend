

const Home = { template: '<div>This is Home.</div>'}
const Foo = { template: '<div>This is Foo.</div>'}
const Bar = { template: '<div>This is Bar.</div>'}
// const login = { template: "require('/template/login.html')"}

var login = Vue.component('login', {
    template: require('/templates/login.html')
})

const router = new VueRouter({
    mode: 'history',
    routes: [
        {path: '/', name: 'home', component: Home},
        {path: '/foo', name: 'foo', component: Foo},
        {path: '/bar', name: 'bar', component: Bar},
        {path: '/login', name: 'login', component: login}
    ]
})

new Vue({
    router,
    template: `
        <div id="app">
            <h1>Named Routes</h1>
            <p>Current route name: {{ $route.name }}</p>
            <ul>
                <li><router-link :to="{ name: 'home' }">home</router-link></li>
                <li><router-link :to="{ name: 'foo' }">foo</router-link></li>
                <li><router-link :to="{ name: 'bar', params: { id: 123 }}">bar</router-link></li>
                <li><router-link :to="{ name: 'login' }">login</router-link></li>
            </ul>
            <router-view class="view"></router-view>
        </div>
    `
}).$mount('#app')
