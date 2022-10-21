<template>

  <div class="grid" >
    <div class="col-6">

      <div class="profile">
        <h1>My Profile</h1>

        <pv-card >
          <template #header>
            <img  alt="user-header" src="src/assets/myprofile.png">
          </template>
          <template #title>
            Alejandro Winget
          </template>
          <template #content>
            976259721 Alejo@gmail.com
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
img{
  height: 80px;
}

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

.container{
  display:flex;
  align-content: center;
  margin-left: 50px;
  padding:70px;
}

.p-card-body{
  margin:50px;

}

.profile{
  margin: 50px;
}

</style>
