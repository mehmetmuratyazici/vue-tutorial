<template>
  <div class="container">
    <h2>Bookmark Add Item Page</h2>
    <div class="row mb-3">
      <label for="colFormName" class="col-sm-2 col-form-label col-form-label-sm"
        >Name</label
      >
      <div class="col-sm-10">
        <input v-model = "bookmark.name"
          type="text"
          class="form-control form-control-sm"
          id="colFormName"
          placeholder="Name bilgisini giriniz ..."
        />
      </div>
    </div>
    <div class="row mb-3">
      <label for="colFormUrl" class="col-sm-2 col-form-label">Url</label>
      <div class="col-sm-10">
        <input v-model = "bookmark.url"
          type="email"
          class="form-control"
          id="colFormUrl"
          placeholder="Url bilgisiniz giriniz ..."
        />
      </div>
    </div>
    <div class="d-flex justify-content-end">
      <button class="btn btn-success" @click="addItem">
        Add Bookmark
      </button>
    </div>
    <!-- <div class="row">
      <div class="form-floating">
        <textarea
          class="form-control"
          placeholder="Leave a comment here"
          id="floatingTextarea2"
          style="height: 100px"
        ></textarea>
        <label for="floatingTextarea2">Comments</label>
      </div>
    </div> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
        bookmark : {
            name : null,
            url : null,
        }
    };
  },
  methods: {
    addItem() {
        this.$axiosGeneral.post("/bookmarkList", this.bookmark).then(res => {
            console.log(res.data)
            this.$router.go(-1)
        })
    },
  },
};
</script>