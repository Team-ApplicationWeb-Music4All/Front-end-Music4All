<template>
  <div class="surface-card p-4 shadow-2 w-full Login">
    <form>
      <div class="text-center mb-5">
        <img src="../assets/Muisc4All2.png" alt="Logo Music4All"  class="mb-1 h-16rem">
        <span class=" text-900 block text-4xl font-bold mb-1 ">Please put the code verification send to your email </span>
      </div>
      <br>
      <div class="field grid justify-content-center">
        <label class="text-600 mb-2 col-fixed font-medium text-2xl" for="code">{{ $t("code") }}: </label>
        <div class="col-0 p-0">
          <pv-input-text id="code" />
        </div>
      </div>
      <div class="text-center mb-5">
        <a class="font-medium no-underline ml-2 text-blue-500 cursor-pointer col-4">-> I don't get the code</a>
        <a class="font-medium no-underline ml-2 text-blue-500 cursor-pointer">-> I put a wrong email</a>
      </div>
      <router-link style="text-decoration:none" to="/login">
        <div class="text-center mb-5 col-12 p-0">
          <pv-button label="Validar" class="p-button-raised p-button-rounded p-button-lg" @click="verify"> Verify Code</pv-button>
        </div>
      </router-link>
      <div class="text-center mb-5">
      <span class=" text-900 block text-4xl font-bold mb-1 ">If you remember an old password put it </span>
        <br>
        <div class="field grid justify-content-center mb-4">
          <label class="text-600 mb-2 col-fixed font-medium text-2xl" for="password">{{ $t("password") }}: </label>
          <div class="col-0 p-0">
            <pv-input-text id="password" />
          </div>
        </div>
        <router-link style="text-decoration:none" to="/login">
          <div class="text-center mb-5 col-12 p-0">
            <pv-button label="Validar" class="p-button-raised p-button-rounded p-button-lg" @click="verify"> Verify Password</pv-button>
          </div>
        </router-link>
      </div>
      <br>
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
  name: "VeriryRequest"
};
</script>

<style scoped>

</style>