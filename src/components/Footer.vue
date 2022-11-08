<template>
  <pv-toast />
    <pv-toolbar class="bg-black-alpha-10" >
      <template #start>
        <label class="ml-8 m-3 font-medium no-underline text-white" for="rememberme">Follow us on social networks!</label>
        <button class="ml-6 m-3 p-button-raised p-component facebook p-0 " type="button" aria-label="Facebook" data-v-c3f596d0="">
          <i class="pi pi-facebook px-1" data-v-c3f596d0=""></i><span class="px-3" data-v-c3f596d0="">Facebook</span>
          <span class="p-ink" role="presentation" style="height: 120px; width: 117px; top: -41px; left: -47.5px;"></span></button>
        <button class="ml-auto m-3 p-button-raised p-component twitter p-0" type="button" aria-label="Twitter" data-v-c3f596d0="">
          <i class="pi pi-twitter px-2" data-v-c3f596d0=""></i><span class="px-3" data-v-c3f596d0="">Twitter</span>
          <span class="p-ink" role="presentation" style="height: 448px; width: 448px; top: -204.125px; left: -79px;"></span></button>
        <button class="ml-auto m-3 p-button-raised p-component youtube p-0" type="button" aria-label="Youtube" data-v-c3f596d0="">
          <i class="pi pi-youtube px-2" data-v-c3f596d0=""></i><span class="px-3" data-v-c3f596d0="">Youtube</span>
          <span class="p-ink" role="presentation" style="height: 448px; width: 448px; top: -205.625px; left: -134px;"></span></button>
        <button class="ml-auto  m-3 p-button-raised p-component discord p-0" type="button" aria-label="Discord" data-v-c3f596d0="">
          <i class="pi pi-discord px-2" data-v-c3f596d0=""></i><span class="px-3" data-v-c3f596d0="">Discord</span>
          <span class="p-ink" role="presentation" style="height: 448px; width: 448px; top: -202.625px; left: -117px;"></span></button>
        <label class="ml-8 m-3 font-medium no-underline text-white-alpha-50" for="rememberme"> <i class="far fa-copyright fa-fw" aria-hidden="true"></i>&nbsp;&nbsp;Music4All Company 2022. Todos los derechos reservados.</label>
      </template>
    </pv-toolbar>

</template>

<script>
export default {
  name: "Footer",
  data() {
    return {
      drawer: false,
    };
  },

};
</script>

<style scoped>

</style>