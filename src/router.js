import { createRouter,createWebHistory  } from "vue-router"; //Vue vite

import Home from './Views/Home.vue';
import Comment from './components/Comment.vue';
import Login from "@/Views/Login.vue";
import Message from './components/Messages.vue';
import Explorer from './components/Explorer.vue'
import ListCards from "./components/ListCards.vue";
import Register from "./Views/Register.vue";
import Recuperate from "./Views/Recuperate.vue";
import Verify from "./components/VeriryRequest.vue";
import ProfileMusician from "./components/profile-musician.vue";
import ProfileContractor from "./components/profile-contractor.vue";
import EdiProfiles from "./components/EditProfile.vue";

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
  { path: '/recuperate', component: Recuperate },
  { path: '/verify', component: Verify },
  { path: '/editprofile', component: EdiProfiles },
]

const history = createWebHistory();

const router = createRouter({ //configurar liberia vue-router
    history,
    routes
  }
)

export default router