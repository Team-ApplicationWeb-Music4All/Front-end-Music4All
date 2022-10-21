import { createRouter,createWebHistory  } from "vue-router"; //Vue vite

import Home from './Views/Home.vue';
import Comment from './components/Comment.vue';
import Login from "@/Views/Login.vue";
import Message from './components/Messages.vue';
import Explorer from './components/Explorer.vue'
import ListCards from "./components/ListCards.vue";
import Register from "./Views/Register.vue";
import LoginMusician from "./components/login-musician.vue";
import LoginContractor from "./components/login-contractor.vue";
import ProfileMusician from "./components/profile-musician.vue";
import ProfileContractor from "./components/profile-contractor.vue";

const routes = [ //definimos rutas|
  { path: '/', component: Home },
  { path: '/comment', component: Comment },
  { path: '/messages', component: Message },
  { path: '/profile-musician', component: ProfileMusician },
  { path: '/profile-contractor', component: ProfileContractor },
  { path: '/login', component: Login },
  { path: '/home', component: Home },
  { path: '/explorer', component: Explorer },
  { path: '/list', component: ListCards },
  { path: '/register', component: Register },
  { path: '/loginMusician', component: LoginMusician },
  { path: '/loginContractor', component: LoginContractor },
]

const history = createWebHistory();

const router = createRouter({ //configurar liberia vue-router
    history,
    routes
  }
)

export default router