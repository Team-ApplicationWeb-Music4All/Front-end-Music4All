<template>
  <ra-tool-bar-vue></ra-tool-bar-vue>
  <div class="surface-card p-4 shadow-2 w-full Login">
    <form>
      <div class="ml-8 mb-5">
        <div class="text-900 text-4xl font-medium mb-1">Edit Profile</div>
      </div>
      <div class="ml-8"><div class="ml-8">
      <div class="card">
        <div class="formgrid grid">
          <div class="field col">

      <div class="ml-8 mb-5"><div class="ml-8 mb-5"><div class="ml-8 mb-5"><div class="ml-6">
              <img  alt="user-header" src="../assets/myprofile.png" class="h-18rem ml-auto mb-3 p-2">
        <br>
            <router-link style="text-decoration:slategray" to="">
             <div class="ml-6 mb-5">
                <pv-button label="Validar" class="p-button-raised p-component p-button-rounded p-button-outlined p-button-lg p-button-secondary" @click="register">Edit Photo</pv-button>
              </div>
            </router-link></div><br>

            <div class="ml-1 mb-5"><div class="field grid justify-content-start">
        <label class="text-900 mb-2 col-1 font-medium text-0xl" for="username"><i class="fa-brands fa-facebook fa-3x"></i></label>
              <div class="ml-3 col-0 p-0 ">
          <pv-input-text id="url-facebook" />
        </div></div>
              <div class="field grid ">
        <label class="text-900 mb-2 col-1 font-medium text-0xl" for="name"><i class="fa-brands fa-instagram fa-3x"></i></label>
                <div class="ml-3 col-0 p-0 ">
          <pv-input-text id="url-instagram" /></div>
              </div>
              <div class="field grid ">
        <label class="text-900 mb-2 col-1 font-medium text-0xl" for="lastname"><i class="fa-brands fa-twitter fa-3x"></i></label>
                <div class="ml-3 col-0 p-0 ">
          <pv-input-text id="url-twitter" />
        </div></div></div></div></div></div>
          </div>
          <div class="field col">
            <br><br><br><br>
            <div class="ml-1 mb-5">
              <label class="text-900 mb-2 col-1 font-medium text-0xl" for="username">{{ $t("name") }}: </label>
              <div class="ml-5 col-0 p-0 m-2">
                <pv-input-text id="username" class="p-inputtext-lg" placeholder="name" />
              </div></div>
            <div class="ml-1 mb-5">
              <label class="text-900 mb-2 col-1 font-medium text-0xl" for="Age">{{ $t("age") }}:</label>
              <div class="ml-5 col-0 p-0 m-2">
                <pv-input-text id="age" class="p-inputtext-lg" placeholder="age" />
              </div></div>
            <div class="ml-1 mb-5">
              <label class="text-900 mb-2 col-1 font-medium text-0xl" for="E-mail">{{ $t("mail") }}:</label>
              <div class="ml-5 col-0 p-0 m-2">
                <pv-input-text id="mail" class="p-inputtext-lg" placeholder="e-mail" />
              </div></div>
            <div class="ml-1 mb-5">
              <label class="text-900 mb-2 col-1 font-medium text-0xl" for="Location">{{ $t("location") }}:</label>
              <div class="ml-5 col-0 p-0 m-2">
                <pv-input-text id="location" class="p-inputtext-lg" placeholder="location" />
              </div></div><br>
            <router-link style="text-decoration:none" to="/profile-musician">
            <div class="ml-8 mb-5">
              <pv-button label="Validar" class="p-button-raised p-component p-button-rounded p-button-outlined p-button-lg p-button-secondary" @click="register">Save Changes</pv-button>
            </div></router-link>
            </div></div></div></div></div>

    </form>
  </div>
  <ra-tool-bar-vues></ra-tool-bar-vues>
</template>

<script>
import RaToolBarVues from "../components/Footer.vue";
import RaToolBarVue from "../components/Nabvar.vue";
export default {
  components: {
    RaToolBarVue,
    RaToolBarVues,
  },
  name: "EditProfile"
};
</script>

<style scoped>

</style>