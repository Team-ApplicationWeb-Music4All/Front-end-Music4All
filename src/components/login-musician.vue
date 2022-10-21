<template>
  <div class="surface-card p-4 shadow-2 w-full Login">
    <div class="text-center mb-5">
      <img src="../assets/Muisc4All2.png" alt="Logo Music4All" height="200" class="mb-3">
      <div class="text-900 text-3xl font-medium mb-3">Log In Musician</div>
      <span class="text-600 font-medium line-height-3">Don't have an account?</span>
      <a class="font-medium no-underline ml-2 text-blue-500 cursor-pointer">Create New account!</a>
    </div>

    <div class="text-center mb-5">
      <label for="email" class="block text-900 font-medium mb-2">Email</label>
      <pv-input-text id="email" type="text" class="w-25rem  mb-6" />

      <label for="password" class="block text-900 font-medium mb-2">Password</label>
      <pv-input-text id="password" type="password" class="w-25rem mb-6" />

      <div class="flex align-items-center justify-content-between mb-6">
        <div class="flex align-items-center">
          <pv-Checkbox style="color:black" id="rememberme" :binary="true" v-model="checked" class="mr-2"></pv-Checkbox>
          <label for="rememberme">Remember me</label>
        </div>
        <a class="font-medium no-underline ml-2 text-blue-500 text-right cursor-pointer">Forgot password?</a>
      </div>
      <router-link style="text-decoration:none" to="/profile-musician">
        <pv-button class="col-4 text-center" @click="login" > Login</pv-button>

      </router-link>
    </div>

  </div>
</template>

<script>
import { usersServices } from "@/services/user-services";


export default {
  name: "Login-Musician",
  data(){
    return{
      email:"",
      password:""
    }
  },
  methods:{
    register(){
      new usersServices().register(this.email,this.password).then(response => console.log("usuario creado"));
    },
    login(){
      new usersServices().login(this.email,this.password).then(response =>
        sessionStorage.setItem("jwt",response.data.accessToken)
      );
    }
  }

};
</script>

<style scoped>
.Login{

}
</style>