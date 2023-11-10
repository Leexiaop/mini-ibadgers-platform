export default [
    {
        path: '/',
        exact: true,
        redirect: '/ad' 
    },
    {
        path: '/ad',
        exact: true,
        component: '@/pages/ad',
        icon: 'AppstoreOutlined'
    },
    {
        exact: true,
        path: '/home',
        component: '@/pages/home'
    }
]
