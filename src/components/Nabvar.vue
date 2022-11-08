<template>
  <pv-toast />
  <header>
    <pv-toolbar class="bg-black-alpha-30" >
      <template #start>
        <img src="../assets/Muisc4All22.png" alt="Logo Music4All"  class="mb-1 h-3rem m-auto ml-6">
      </template>
      <template #end>
        <div class="flex-column">
          <router-link
            v-for="item in items"
            :to="item.to"
            custom
            v-slot="{ navigate, href }"
            :key="item.label"
          >
            <pv-button
              class="p-button-text text-white"
              :href="href"
              @click="navigate"
            >{{ item.label }}</pv-button
            >
          </router-link>
        </div>
      </template>
    </pv-toolbar>
  </header>
  <pv-sidebar v-model:visible="drawer" />
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
      items: [
        { label: "Explorer", to: "/explorer" },
        { label: "Messages", to: "/messages" },
        { label: "Profile", to: "/profile-musician" },
        { label: "Exit", to: "/home" }
      ],
    };
  },
};
</script>
