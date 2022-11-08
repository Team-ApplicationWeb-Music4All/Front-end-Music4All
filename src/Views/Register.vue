<template>
  <div class="surface-card p-4 shadow-2 w-full Login">
    <form>
     <div class="text-center mb-5">
       <img src="../assets/Muisc4All2.png" alt="Logo Music4All"  class="mb-1 h-16rem">
       <div class="text-900 text-4xl font-medium mb-1">Register Solicitation</div>
       <span class="text-600 font-medium line-height-3">Do you have an account?</span>
       <router-link style="text-decoration:none" to="/login">
       <a class="font-medium no-underline ml-2 text-blue-500 cursor-pointer">Enter with your account!</a>
       </router-link>
     </div>

      <div class="field grid justify-content-center">
        <label class="text-900 mb-2 col-1 font-medium text-0xl" for="username">{{ $t("username") }}: </label>
        <div class="col-0 p-0">
          <pv-input-text id="username" />
        </div>
      </div>
      <div class="field grid justify-content-center">
        <label class="text-900 mb-2 col-1 font-medium text-0xl" for="name">{{ $t("name") }}: </label>
        <div class="col-0 p-0">
          <pv-input-text id="name" />
        </div>
      </div>
      <div class="field grid justify-content-center">
        <label class="text-900 mb-2 col-1 font-medium text-0xl" for="lastname">{{ $t("lastname") }}: </label>
        <div class="col-0 p-0">
          <pv-input-text id="lastname" />
        </div>
      </div>
      <div class="field grid justify-content-center">
        <label class="text-900 mb-2 col-1 font-medium text-0xl" for="mail">{{ $t("mail") }}: </label>
        <div class="col-0 p-0">
          <pv-input-text id="mail" />
        </div>
      </div>
      <div class="field grid justify-content-center">
        <label class="text-900 mb-2 col-1 font-medium text-0xl" for="password">{{ $t("password") }}: </label>
        <div class="col-0 p-0">
          <pv-input-text id="password" />
        </div>
      </div>
      <div class="field grid justify-content-center">
        <label class="text-900 mb-2 col-1 font-medium text-0xl" for="password2">{{ $t("confirm") }}: </label>
        <div class="col-0 p-0">
          <pv-input-text id="password2" />
        </div>
      </div>
      <router-link style="text-decoration:none" to="/login">
        <div class="text-center mb-1 col-12 p-5">
          <pv-button label="Validar" class="p-button-raised p-button-rounded p-button-lg" @click="register"> Complete Register</pv-button>
        </div>
      </router-link>
    </form>
  </div>
  <ra-tool-bar-vues></ra-tool-bar-vues>
</template>

<script>
import RaToolBarVues from "../components/Footer.vue";


export default {
  components:{
    RaToolBarVues,
  },

  name: "Register",
  data(){
    return{
      email:"",
      password:"",
      password2:"",
      name:"",
      lastname:"",
      username:""
    }
  },


};
</script>

<style scoped>

</style>