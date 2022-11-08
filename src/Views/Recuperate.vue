<template>
  <div class="surface-card p-4 shadow-2 w-full Login">
    <form>
      <br>
      <div class="text-center mb-5">
        <img src="../assets/Muisc4All2.png" alt="Logo Music4All"  class="mb-1 h-17rem">
        <div class="text-900 text-4xl font-medium mb-1">Account Solicitation</div>

        <span class="text-600 font-medium line-height-3">Do you remember your account?</span>
        <router-link style="text-decoration:none" to="/login">
          <a class="font-medium no-underline ml-2 text-blue-500 cursor-pointer">Enter with your account!</a>
        </router-link>
        <br><br>
        <span class="text-600 font-medium line-height-3">Please complete the next-steps for your solicitation.</span>
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
        <label class="text-900 mb-2 col-1 font-medium text-0xl" for="mail">{{ $t("mail") }}: </label>
        <div class="col-0 p-0">
          <pv-input-text id="mail" />
        </div>
      </div>
      <router-link style="text-decoration:none" to="/verify">
        <div class="text-center mb-7 col-12 p-6">
          <pv-button label="Validar" class="p-button-raised p-button-rounded p-button-lg" @click="Recuperate"> Complete request</pv-button>
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
  name: "Recuperate",
  data(){
    return{
      email:"",
      name:"",
      username:""
    }
  },


};
</script>

<style scoped>

</style>