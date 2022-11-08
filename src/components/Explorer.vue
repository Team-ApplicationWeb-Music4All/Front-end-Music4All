<template xmlns="">
  <ra-tool-bar-vue></ra-tool-bar-vue>
  <div class="gridBlack" >

    <div class="container">

      <div class="team-container">
        <div class="grid3c">
          <ra-card
            v-for="postData in PostsData"
            :key="postData.id"
            :PostData="postData"
            style="max-width: 350px"
          ></ra-card>
        </div>
      </div>


    </div>

  </div>



  <ra-tool-bar-vues></ra-tool-bar-vues>

</template>
<script>
import RaToolBarVue from "../components/Nabvar.vue";
import RaCard from "../components/cards.vue";
import { postServices } from "@/services/post-services";
export default {
  components: {
    RaToolBarVue,
    RaCard,
  },
  name: "Explorer",
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

}

.container{
  display:flex;
  align-content: center;

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
