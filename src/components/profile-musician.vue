
<template>
  <ra-tool-bar-vue></ra-tool-bar-vue>
  <div class="gridBlack" >

    <div class="col-6">

      <div class="profile md:left-50">


        <pv-card >
          <template #title>
          <h1 class="col-fixed p-autocomplete">My Profile</h1>
            <img  alt="user-header" src="../assets/myprofile.png" class="h-18rem ml-auto mb-3 p-2">
            <br>
            Alejandro Winget
          </template>
          <template #content>
            976259721
            <br>
            Alejo@gmail.com
            <br><br>
            <h2>Social Media:</h2>
            <br>
            <img  alt="user-header" src="../assets/facebu.png" class="ml-2 h-3rem ">
            <img  alt="user-header" src="../assets/insta.png" class="ml-5 h-3rem ">
            <img  alt="user-header" src="../assets/twitt.png" class="ml-5 h-3rem ">
            <!--<img  alt="user-header" src="../assets/Yutu.png" class="ml-1 h-3rem ">
            <img  alt="user-header" src="../assets/mailg.png" class="ml-1 h-3rem ">-->
            <router-link style="text-decoration:none" to="/editprofile">
            <div class="ml-6 m-3">
            <pv-button label="Accionar" class="p-button-raised p-button-rounded p-button-lg p-button-secondary" @click="edit"> Edit Profile</pv-button>
            </div>
            </router-link>
          </template>
        </pv-card>

      </div>
    </div>


    <div class="col-6" >

      <div class="container">

        <div class="team-container">
          <div class="grid1c">
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

  </div>

  <ra-tool-bar-vues></ra-tool-bar-vues>

</template>

<script>
import RaToolBarVues from "../components/Footer.vue";
import RaToolBarVue from "../components/Nabvar.vue";
import RaCard from "../components/cards.vue";
import { postServices } from "@/services/post-services";

export default {
  components: {
    RaToolBarVue,
    RaToolBarVues,
    RaCard
  },
  name: "ProfileMusician",
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
.gridBlack {
  display: grid;
  background-color: #212529;
  grid-template-columns: repeat(3, 1fr);
  justify-items: center;
  gap: 40px;
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
.container{
  display:flex;
  align-content: center;
  margin-left: 50px;
  padding:70px;
}
.p-card-body{
  margin:50px;
  width: auto;
}
.profile{

  margin: 50px;
  width: 400px;
}
</style>
