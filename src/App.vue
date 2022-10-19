<template>
  <ra-tool-bar-vue></ra-tool-bar-vue>
  <router-view></router-view>
</template>

<script>
import RaToolBarVue from "./components/Nabvar.vue";
export default {
  components: {
    RaToolBarVue,
  },
  data() {
    return {};
  },
};
</script>
<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
