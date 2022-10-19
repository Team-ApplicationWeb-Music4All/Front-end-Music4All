<template>
  <div>
    <pv-card>
      <template #title> {{ PostData.title }} </template>
      <template #content>
        <p>{{ PostData.summary }}</p>
        <p>
          <img :src="`${PostData.photoUrl}`" class="img-responsive" />
        </p>
      </template>
      <template #footer>
        <router-link  v-for="item in items"
                      :to="item.to"
                      custom
                      v-slot="{ navigate, href }"
                      :key="item.label">
          <pv-button

            :href="href"
            @click="navigate"
          >{{ item.label }}
          </pv-button>
        </router-link>
      </template>
    </pv-card>
  </div>
</template>

<script>
export default {
  name: "Cards",
  props: {
    PostData: Object
  },

  data() {
    return {
      drawer: false,
      items: [
        { label: "See More", to: "/list" },

      ],
    };
  },

};

</script>

<style scoped>
img {
  width: 300px;
}
</style>