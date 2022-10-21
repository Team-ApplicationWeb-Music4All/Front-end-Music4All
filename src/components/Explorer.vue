<template>
    <div class="card">
      <div class="flex justify-content-center">
        <span class="p-float-label p-input-filled p-input-icon-right">
        <pv-input-text type="text" v-model="value" placeholder="Search"/>
        <i class="pi pi-search" />
      </span>
      </div>

    </div>

  <div class="grid">
    <!--<div class="col-3">
      <template #title>{{MusiciansData.title}}</template>
      <template #content>
        <p>{{MusiciansData.artist}}</p>
        <p>
          <img :src="`${MusiciansData.photoUrl}`" class="img-responsive" />
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
    </div>-->
    <div class="col-3">

    </div>
  </div>

</template>

<script>


import { musiciansServices } from "@/services/musicians-services";

export default {

  name: "Explorer",
  props: {
    MusicData: Object
  },
  data() {
    return {
      value: null,
      MusiciansData: [],
      individualsData: [],
      apiChallenge: undefined,
    };
  },
  created() {
    this.apiChallenge = new musiciansServices();
    this.getAllCards();
  },
  methods: {
    getAllCards() {
      this.apiChallenge.getAll().then((response) => {
        this.MusiciansData = response.data;
      });
    },


  },
};


</script>

<style>
.card {
  justify-content: center;
  margin-top: 50px;
}
.sizes .p-inputtext {
  display: block;
  margin-bottom: .5rem;
}

.field * {
  display: block;
}
</style>