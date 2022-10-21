import { createRouter,createWebHistory  } from "vue-router"; //Vue vite

import Home from './Views/Home.vue';
import Comment from './components/Comment.vue';
import Login from "@/Views/Login.vue";
import Message from './components/Messages.vue';
import Explorer from './components/Explorer.vue'
import Profile from './components/profile-musician.vue'
import ListCards from "./components/ListCards.vue";

const routes = [ //definimos rutas|
  { path: '/', component: Home },
  { path: '/comment', component: Comment },
  { path: '/messages', component: Message },
  { path: '/profile', component: Profile },
  { path: '/login', component: Login },
  { path: '/home', component: Home },
  { path: '/explorer', component: Explorer },
  { path: '/list', component: ListCards },
]

const history = createWebHistory();

const router = createRouter({ //configurar liberia vue-router
    history,
    routes
  }
)

export default router