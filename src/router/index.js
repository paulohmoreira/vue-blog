import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import NewPost from '../views/NewPost.vue'
import BlogDashboard from '../views/BlogDashboard.vue'
import EditPost from '../views/EditPost.vue'
import { auth } from '@/firebase/firebaseInit'
import BlogPost from '../views/BlogPost.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/blogpost/:postId',
    name: 'blogpost',
    component: BlogPost
  },
  {
    path: '/newpost',
    name: 'newpost',
    component: NewPost,
    meta : {
      requiresAuth: true
    }
  },
  {
    path: '/editpost/:postId',
    name: 'editpost',
    component: EditPost,
    meta : {
      requiresAuth: true
    }
  },
  {
    path: '/dashboard',
    name: 'blogdashboard',
    component: BlogDashboard,
    meta : {
      requiresAuth: true
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "about" */ '../views/LoginRegister.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

// Checking if the user is logged and redirecting to the correct route
router.beforeEach((to, from, next) => {
  if (to.path === '/login' && auth.currentUser) {
    next('/')
    return
  }

  if (to.matched.some(record => record.meta.requiresAuth) && !auth.currentUser) {
    next('/login')
    return
  }

  next()
})

export default router
