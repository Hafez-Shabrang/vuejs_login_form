import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from "../views/AboutView.vue"
import ProfileView from "../views/ProfileView.vue"
import LoginView from "../views/LoginView.vue"
import LogoutView from "../views/LogoutView.vue"
import store from "../store/index"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    },
    {
      path: '/profile',
      name: 'profile',
      component: ProfileView,
      meta: {loginRequired: true}
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView,
      meta: {loginRedirect: true}
    }
    ,
    {
      path: '/logout',
      name: 'logout',
      component: LogoutView,
      meta: {loginRequired: true}
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.loginRequired)) {
    if (store.state.isAuthenticated) {
      next()
    } else {
      next("/login")
    }
  } else if (to.matched.some(record => record.meta.loginRedirect)) {
    if (!store.state.isAuthenticated) {
      next()
    } else {
      next("/profile")
    }
  } else {
    next()
  }
})


export default router
