<template>

  <div class="grid grid-nogutter surface-section text-800 Home">
    <div class="col-12 md:col-6 p-6 text-center md:text-left flex align-items-center ">
      <section>
        <span class="block text-8xl font-bold mb-1 ">Welcome to </span>
        <div class="text-8xl text-primary font-bold mb-3"> Music4All</div>
        <p class="mt-0 mb-4 text-2xl line-height-3">Forget the old rules. You can have the best musician. Right now. Right here.</p>
        <div class="text-2xl mt-0 mb-3 ">Please select your option: </div>
        <br><br>

        <router-link  style="text-decoration:none" to="/login">
          <pv-button label="Login" class=" text-4xl mr-3 p-button-raised" > Log in</pv-button>
        </router-link>
        <router-link style="text-decoration:none" to="/register">
          <pv-button label="Register" class="text-4xl p-button-outlined" > Register</pv-button>
        </router-link>

      </section>
    </div>
    <div class="col-12 md:col-6 overflow-hidden">
      <img src="../assets/home.jpeg" alt="Image" class="md:ml-auto block md:h-full" style="clip-path: polygon(6% 0, 100% 0%, 100% 100%, 0 100%)">
    </div>
  </div>
</template>

<script>


export default {
  name: "Home"
};
</script>

<style scoped>
.Home{
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
}
</style>