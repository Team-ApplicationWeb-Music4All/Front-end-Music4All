<link rel="stylesheet" href="path/to/font-awesome/css/font-awesome.min.css">
<template>
  <div class="surface-card p-4 shadow-2 w-full Login">
    <div class="text-center mb-5">
      <img src="../assets/Muisc4All2.png" alt="Logo Music4All"  class="mb-1 h-16rem">
      <div class="text-900 text-3xl font-medium mb-1">Log In Requirement</div>
      <span class="text-600 font-medium line-height-3">Don't have an account?</span>
      <router-link style="text-decoration:none" to="/register">
      <a class="font-medium no-underline ml-2 text-blue-500 cursor-pointer">Create New account!</a>
      </router-link>
    </div>

    <div class="text-center mb-5">
      <label for="email" class="block text-900 font-medium mb-2">{{ $t("mail") }}:</label>
      <pv-input-text id="email" type="text" class="w-25rem  mb-5" />

      <label for="password" class="block text-900 font-medium mb-2">{{ $t("password") }}:</label>
      <pv-input-text id="password" type="password" class="w-25rem mb-4" />

      <div class="col-12 p-1  mb-3">
        <router-link style="text-decoration:none" to="/recuperate">
        <a class="font-medium no-underline ml-2 text-blue-500 text-center cursor-pointer">Forgot password?</a>
        </router-link>
      </div>
      <div class="col-12 p-1 mb-3">
        <pv-Checkbox style="color:black" id="rememberme" :binary="true" v-model="checked" class=" mr-2"></pv-Checkbox>
        <label class="font-medium no-underline text-bluegray-900" for="rememberme">Remember me</label>
      </div>
      <router-link style="text-decoration:none" to="/profile-musician">
        <div class="col-12 p-5">
          <pv-button label="Validar" class="p-button-raised p-button-rounded p-button-lg" @click="login"> Login</pv-button>
        </div>
      </router-link>
      <br>
    </div>
  </div>

  <ra-tool-bar-vues></ra-tool-bar-vues>
</template>

<script >
import RaToolBarVues from "../components/Footer.vue";
import { usersServices } from "@/services/user-services";

export default {
  components:{
    RaToolBarVues,
  },
  "name": "Login",
  "data"(){
    return{
      "email":"",
      "password":""
    }
  },
  "methods":{
    "register"(){
      new usersServices().register(this.email,this.password).then(response => console.log("usuario creado"));
    },
    "login"(){
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