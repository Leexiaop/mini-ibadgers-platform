import route from './route'
export default [
    {
        path: '/login',
        component: '@/pages/login'
    },
    {
        path: '/',
        component: '@/layouts/index',
        exact: false,
        routes: route
    }
]