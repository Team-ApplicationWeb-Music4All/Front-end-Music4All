<template>

  <div class="flex" >
    <div>
      <h1>My Profile</h1>

      <pv-card >
        <template #header>
          <img alt="user header" src="https://roaminghunger.com/blog/wp-content/uploads/2022/07/Rosarito-Austin-1024x682.jpg">
        </template>
        <template #title>
          Advanced Card
        </template>
        <template #content>
          Loerendis esse, cupiditate neque quas!
        </template>
        <template #footer>
          <pv-button icon="pi pi-check" label="Save" />
          <pv-button icon="pi pi-times" label="Cancel" class="p-button-secondary" style="margin-left: .5em" />
        </template>
      </pv-card>

    </div>
    <Divider layout="vertical" />
    <div>

      <div class="team-container">
        <div class="grid3c">
          <ra-card
            v-for="postData in PostsData"
            :key="postData.id"
            :PostData="postData"
            style="max-width: 400px"
          ></ra-card>
        </div>
      </div>


    </div>

  </div>


</template>

<script>
import RaCard from "../components/cards.vue";
import { postServices } from "@/services/post-services";
export default {
  components: {

    RaCard,
  },
  name: "Profile",
  data() {
    return {
      PostsData: [],
      individualsData: [],
      apiChallenge: undefined,
    };
  },
  created() {
    this.apiChallenge = new postServices();
    this.getAllCards();
  },
  methods: {
    getAllCards() {
      this.apiChallenge.getAll().then((response) => {
        this.PostsData = response.data;
      });
    },


  },
};
</script>

<style>

.grid3c {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-items: center;
  gap: 20px;
  margin:15px;
}

h1 {
  font-family: "Roboto",serif;
  text-align: center;
  margin-bottom: 40px;
  margin-top: 30px;
}

p.info {
  font-family: "Roboto",serif;
  margin-bottom: 100px;
  font-size: 1rem;
}

h1,
p {
  text-align: center;
}

</style>
