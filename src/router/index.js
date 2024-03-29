import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/layout/HomeView.vue';
import LoginView from '../views/componen login/LoginView.vue';
import AboutView from '../views/layout/AboutView.vue'; 
import RegisterView from '../views/componen login/RegisterView.vue';
import Create from '/src/components/data/create.vue';
import EditStudent from '/src/components/data/edit.vue';
import UserData from '/src/components/user/index.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: { requiresAuth: true } 
    },
    {
      path: '/user',
      name: 'user',
      component: UserData,
      meta: { requiresAuth: true } 
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView,
      meta: { requiresAuth: true } 
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterView
    },
    {
      path: '/create',
      name: 'create',
      component: Create,
      meta: { requiresAuth: true } 
    },
    {
      path: '/edit/:id',
      name: 'editStudent',
      component: EditStudent,
      meta: { requiresAuth: true }
    }
  ]
});

router.beforeEach((to, _from, next) => {
  const isAuthenticated = !!localStorage.getItem('token');
  console.log(localStorage.getItem('token'))

  if (to.meta.requiresAuth && !isAuthenticated) {
    next({ name: 'login' });
  } else {
    next();
  }
});

export default router;
