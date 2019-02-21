export default [
  {
    title: 'Home',
    routes: [
      {
        title: 'Home',
        icon: 'home',
        exact: true,
        to: '/',
        component: () => 'Home'
      }
    ]
  },
  {
    title: 'Your Account',
    bottom: true,
    routes: [
      {
        title: 'Settings',
        icon: 'cog',
        to: '/settings',
        component: () => 'Settings'
      },
      {
        title: 'Sign out',
        icon: 'sign-out-alt',
        to: '/sign-out',
        component: () => 'Sign out'
      }
    ]
  }
]
