<template>
  <ra-tool-bar-vue></ra-tool-bar-vue>
  <h1>PutMessage</h1>
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
  name: "Messages"
};
</script>
