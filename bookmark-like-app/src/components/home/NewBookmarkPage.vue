<template >
  <div class="h-100 d-inline">
    <div class="row justify-content-center">
      <div class="col-4">
        <select v-model="bookmarkData.category" class="form-select my-1">
          <option value="" disabled selected>Select one</option>
          <option
            v-for="item in $store.state.categoriesList"
            :key="item.id"
            :value="item.id"
          >
            {{ item.categoryName }}
          </option>
        </select>
      </div>
    </div>
    <div class="row justify-content-center">
      <div class="col-4">
        <input
          type="text"
          class="form-control"
          v-model="bookmarkData.content"
          placeholder="Açıklama Giriniz"
        />
      </div>
    </div>
    <div class="row justify-content-center my-1">
      <div class="col-4">
        <input
          type="text"
          class="form-control"
          v-model="bookmarkData.url"
          placeholder="Link Giriniz"
        />
      </div>
    </div>
    <button class="btn btn-primary m-2" @click="addBookmark">Add</button>
  </div>
</template>

<script>
//import ToastMsg from "@/components/common/ToastMsg";
export default {
  //components: [ToastMsg],
  data() {
    return {
      bookmarkData: {
        content: null,
        username: this.$store.getters._getActiveUser,
        url: null,
        category: null,
      },
    };
  },
  methods: {
    addBookmark() {
      console.log(this.bookmarkData);

      if (["", null].indexOf(this.bookmarkData.category) > -1) {
        this.$toast.open("Kategori Seçimi yapınız");
        return;
      }

      this.$appAxios
        .post("/likeAndFavs", {
          likeCount: 0,
          favCount: 0,
        })
        .then((res_like_fav) => {
          this.$appAxios
            .post("/bookmarkList", {
              ...this.bookmarkData,
              likeAndFavId: res_like_fav.data.id,
            })
            .then((res) => {
              console.log(res);
              /*           this.$toast.success(
            res.status == 201 ? "Ekleme işlemi başarılı" : "Bi sorun oluştu"
          ); */
              this.$socket.emit("NEW_BOOKMARK_MESSAGE", this.bookmarkData);
              this.$router.go(-1);
            })
            .catch((e) => {
              console.log(e);
              this.$toast.open({
                message: e,
                type: "error",
                duration: 5000,
                dismissible: true,
              });
            });
        });
    },
  },
};
</script>