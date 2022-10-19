<template>
  <div>
    <div class="card">
      <pv-toolbar class="mb-4">
        <template #start>
          <pv-button
            label="New"
            icon="pi pi-plus"
            class="p-button-success mr-2"
            @click="openNew"
          />
        </template>
      </pv-toolbar>
      <pv-data-table
        ref="dt"
        :value="posts"
        v-model:selection="selectedposts"
        dataKey="id"
        :paginator="true"
        :rows="5"
        :filters="filters"
        paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
        :rowsPerPageOptions="[5, 10, 15]"
        currentPageReportTemplate="Showing {first} to {last} of {totalRecords} tutorials"
        responsiveLayout="scroll"
      >
        <template #header>
          <div
            class="table-header flex flex-column md:flex-row md:justify-content-between"
          >
            <h5 class="mb-2 md:m-0 p-as-md-center text-xl"></h5>
            <span class="p-input-icon-left">
              <pv-input-text
                v-model="filters['global'].value"
                placeholder="Search..."
              />
            </span>
          </div>

          <div
            class="table-header flex flex-column md:flex-row md:justify-content-between"
          >
            <h5 class="mb-2 md:m-0 p-as-md-center text-xl">
              Posts
            </h5>
          </div>
        </template>
        <pv-column
          field="id"
          header="Id"
          :sortable="true"
          style="min-width: 12rem"
        ></pv-column>
        <pv-column
          field="title"
          header="Title"
          :sortable="true"
          style="min-width: 16rem"
        ></pv-column>
        <pv-column
          field="summary"
          header="summary"
          :sortable="true"
          style="min-width: 16rem"
        ></pv-column>
        <pv-column

          field="photoUrl"
          header="pho to Url"
          :sortable="true"
          style="min-width: 12rem"
        >
        </pv-column>
        <pv-column :exportable="false"
                   style="min-width: 8rem">
          <template #body="slotProps">
            <pv-button
              icon="pi pi-pencil"
              class="p-button-text p-button-rounded"
              @click="editTutorial(slotProps.data)"/>
            <pv-button
              icon="pi pi-trash"
              class="p-button-text p-button-rounded"
              @click="confirmDeleteTutorial(slotProps.data)"/>
          </template>
        </pv-column>

      </pv-data-table>
    </div>
    <pv-dialog
      v-model:visible="postDialog"
      :style="{ width: '450px' }"
      header="post Information"
      :modal="true"
      class="p-fluid"
    >
      <br />
      <div class="field">
        <span class="p-float-label">
          <pv-input-text
            type="text"
            id="title"
            v-model.trim="post.title"
            required="true"
            autofocus
            :class="{ 'p-invalid': submitted && !post.title }"
          />
          <label for="title">Title</label>
          <small class="p-error" v-if="submitted && !post.title"
          >Title is required.</small
          >
        </span>
      </div>
      <div class="field">
        <span class="p-float-label">
          <pv-input-number
            id="summary"
            v-model="post.summary"
            required="false"
            rows="2"
            cols="2"
          />
          <label for="description">summary</label>
        </span>
      </div>
      <div class="field">
        <span class="p-float-label">
          <pv-input-text
            id="photoUrl"
            v-model="post.photoUrl"
            required="false"
            rows="2"
            cols="2"
          />
          <label for="photoUrl">URL To Image</label>
        </span>
      </div>

      <template #footer>
        <pv-button
          label="Cancel"
          icon="pi pi-times"
          class="p-button-text"
          @click="hideDialog"
        />
        <pv-button
          label="Save"
          icon="pi pi-check"
          class="p-button-text"
          @click="saveChallenge"
        />
      </template>
    </pv-dialog>
    <pv-dialog
      v-model:visible="deletePostDialog"
      :style="{ width: '450px' }"
      header="Confirm"
      :modal="true"
    >
      <div class="confirmation-content">
        <i class="pi pi-exclamation-triangle mr-3" style="font-size: 2rem" />
        <span v-if="post"
        >Are you sure you want to delete <b>{{ post.title }}</b></span
        >
      </div>
      <template #footer>
        <pv-button
          label="No"
          icon="pi pi-times"
          class="p-button-text"
          @click="deletePostDialog = false"
        />
        <pv-button
          label="Yes"
          icon="pi pi-check"
          class="p-button-text"

        />
      </template>
    </pv-dialog>
  </div>
</template>

<script>
import { postServices } from "@/services/post-services.js";
import { FilterMatchMode } from "primevue/api";
export default {
  name: "ListCards",
  data() {
    return {
      posts: [],
      postDialog: false,
      deletePostDialog: false,
      post: {},
      selectedposts: null,
      filters: {},
      submitted: false,
      postServices: null,
    };
  },
  created() {
    this.postsServices = new postServices();
    this.postsServices.getAll().then((response) => {
      this.posts = response.data;
      this.posts.forEach((challenge) =>
        this.getDisplayableChallenge(challenge)
      );
      console.log(this.posts);
    });
    this.initFilters();
  },
  methods: {
    getDisplayableChallenge(post) {
      return post;
    },
    getStorableChallenge(displayablePost) {
      return {
        id: displayablePost.id,
        title: displayablePost.title,
        photoUrl: displayablePost.photoUrl,
        summary: displayablePost.summary,
      };
    },
    initFilters() {
      this.filters = {
        global: { value: null, matchMode: FilterMatchMode.CONTAINS },
      };
    },
    findIndexById(id) {
      return this.posts.findIndex((post) => post.id === id);
    },
    openNew() {
      this.post = {};
      this.submitted = false;
      this.postDialog = true;
    },
    hideDialog() {
      this.postDialog = false;
      this.submitted = false;
    },
    saveChallenge() {
      this.submitted = true;
      if (this.post.title.trim()) {
        if (this.post.id) {
          this.post = this.getStorableChallenge(this.post);
          this.postsServices
            .update(this.post.id, this.post)
            .then((response) => {
              this.posts[this.findIndexById(response.data.id)] =
                this.getDisplayableChallenge(response.data);
              this.$toast.add({
                severity: "success",
                summary: "Successful",
                detail: "challenge Updated",
                life: 3000,
              });
              console.log(response);
            });
        } else {
          this.post.id = 0;
          this.post = this.getStorableChallenge(this.post);
          this.postsServices.create(this.post).then((response) => {
            this.post = this.getDisplayableChallenge(response.data);
            this.posts.push(this.challenge);
            this.$toast.add({
              severity: "success",
              summary: "Successful",
              detail: "challenge Created",
              life: 3000,
            });
            console.log(response);
          });
        }
      }
      this.postDialog = false;
      this.post = {};
    },
    editpost(post) {
      this.post = { ...post };
      this.postDialog = true;
    },
    confirmDeletepost(post) {
      this.post = post;
      this.deletePostDialog = true;
    },
    deletepost() {
      this.postsServices.delete(this.post.id).then((response) => {
        this.posts = this.posts.filter(
          (t) => t.id !== this.post.id
        );
        this.deletePostDialog = false;
        this.post = {};
        this.$toast.add({
          severity: "success",
          summary: "Successful",
          detail: "challenge Deleted",
          life: 3000,
        });
        console.log(response);
      });
    },
  },
};
</script>
<style scoped></style>
