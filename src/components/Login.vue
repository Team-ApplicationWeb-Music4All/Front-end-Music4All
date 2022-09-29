<template>
  <div class="surface-card p-4 shadow-2 border-round w-full lg:w-6 Login">
    <div class="text-center mb-5">
      <img src="../assets/Muisc4All2.png" alt="Logo Music4All" height="150" class="mb-3">
      <div class="text-900 text-3xl font-medium mb-3">Log In</div>
      <span class="text-600 font-medium line-height-3">Don't have an account?</span>
      <a class="font-medium no-underline ml-2 text-blue-500 cursor-pointer">Create New account!</a>
    </div>

    <div>
      <label for="email" class="block text-900 font-medium mb-2">Email</label>
      <InputText id="email" type="text" class="w-full mb-3" />

      <label for="password" class="block text-900 font-medium mb-2">Password</label>
      <InputText id="password" type="password" class="w-full mb-3" />

      <div class="flex align-items-center justify-content-between mb-6">
        <div class="flex align-items-center">
          <Checkbox id="rememberme" :binary="true" v-model="checked" class="mr-2"></Checkbox>
          <label for="rememberme">Remember me</label>
        </div>
        <a class="font-medium no-underline ml-2 text-blue-500 text-right cursor-pointer">Forgot password?</a>
      </div>
      <router-link style="text-decoration:none" to="/product">
        <pv-button class="col-6 col-offset-3" @click="login" > Login</pv-button>
      </router-link>
    </div>

  </div>
</template>

<script>
import { usersServices } from "@/services/user-services";


export default {
  name: "Login",
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
  padding-right: 100px;
}
</style>