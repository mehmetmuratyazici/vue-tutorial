<template>
  <div class="card bookmark m-1" style="width: 200px; height: 150px">
    <div class="card-body">
      <h4 class="text-dark align-self-center">{{ item.content }}</h4>
    </div>
    <div class="card-buttons my-1">
      <div
        class="bi d-inline-block mx-2"
        :accessKey="`like_icon_${item.id}`"
        :class="fillIconLike"
        @click="clickIcon"
      >
        <span
          class="
            position-absolute
            top-0
            start-0
            translate-middle
            badge
            rounded-pill
            bg-danger
          "
        >
                    {{itemData.likeAndFav?.likeCount}}
        </span>
      </div>
      <div
        class="bi d-inline-block mx-2"
        :accesskey="`save_icon_${item.id}`"
        :class="fillIconSave"
        @click="clickIcon"
      >  <span
          class="
            position-absolute
            top-0
            start-100
            translate-middle
            badge
            rounded-pill
            bg-danger
          "
        >
          {{item.likeAndFav?.favCount}}
        </span>
      </div>
      <div
        class="bi d-inline-block mx-2"
        :accesskey="`comment_icon_${item.id}`"
        :class="fillIconComment"
        @click="clickIcon"
      />
    </div>
    <div class="footer">
      <div class="d-flex justify-content-end mx-1">{{ item.username }}</div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  //props:["item"],
  props: {
    item : {
      type: Object,
      require: true,
    }
  },
  data() {
    return {
      itemData: this.item,
    };
  },
  methods: {
    clickIcon(event) {
      let likes = null,
        favs = null;
      if (event.target.accessKey.indexOf("like") > -1) {
        likes = [...this._userLikes];

        if (!this.isLiked) likes = [...likes, this.item.id];
        else likes = likes.filter((i) => i != this.item.id);
        console.log(this.isLiked, likes);

        this.$store.commit("addLike", likes);
        this.updateUserActions({ likes } , this.isLiked);
      } else if (event.target.accessKey.indexOf("save") > -1) {
        favs = [...this._userFav];

        if (!this.isFav) favs = [...favs, this.item.id];
        else favs = favs.filter((i) => i != this.item.id);

        this.$store.commit("addFav", favs);
        this.updateUserActions({ favs }, this.isFav);
      }

      /* if(event.target.accessKey.indexOf("comment") > -1)
        this.itemData.comment = !this.itemData.comment; */
    },
    updateUserActions(arrVal, isIncrease) {
      this.$appAxios
        .patch(`/users/${this._getUserInfo.id}`, arrVal)
        .then(() => {
          //console.log(res);
          this.$appAxios
          .get(`/likeAndFavs/${this.item.likeAndFav.id}`)
          .then(res_like_fav => {
            
              this.$appAxios
              .patch(`/likeAndFavs/${res_like_fav.data.id}`, {
                ...res_like_fav.data,
                likeCount : arrVal.likes != undefined ? isIncrease ? res_like_fav.data.likeCount + 1 : res_like_fav.data.likeCount - 1 : res_like_fav.data.likeCount,
                favCount : arrVal.favs != undefined ? isIncrease ? res_like_fav.data.favCount + 1 : res_like_fav.data.favCount - 1 : res_like_fav.data.favCount,
              })
              .then(response_like_inc => {
                console.log(response_like_inc);
                this.itemData.likeAndFav.likeCount = response_like_inc.data.likeCount
                this.itemData.likeAndFav.favCount = response_like_inc.data.favCount
                this.$socket.emit('LIKE_AND_FAV', this.itemData)
                console.log(this.item);
              })
          })
        })
        .catch((e) => console.log(e));
    },
  },
  computed: {
    ...mapGetters(["_userLikes", "_userFav", "_getUserInfo"]),
    fillIconSave() {
      return {
        "bi-bookmark-plus-fill border border-0 p-1 rounded-3 border-danger text-danger bg-danger bg-opacity-25":
          this.isFav,
        "bi-bookmark-plus": !this.isFav,
      };
    },
    fillIconLike() {
      return {
        "bi-hand-thumbs-up-fill border border-0 p-1 rounded-3 border-primary text-primary bg-primary bg-opacity-25":
          this.isLiked,
        "bi-hand-thumbs-up": !this.isLiked,
      };
    },
    fillIconComment() {
      return {
        //"bi-chat-right-text-fill": this.itemData.liked,
        "bi-chat-right-text": true, // !this.itemData.liked,
      };
    },
    isLiked() {
      return this._userLikes.indexOf(this.item.id) > -1;
    },
    isFav() {
      return this._userFav.indexOf(this.item.id) > -1;
    },
  },
  watch: {
    "itemData.liked": {
      handler(val, oldVal) {
        console.log(val, oldVal);
      },
      deep: true,
    },
    "itemData.fav": {
      handler(val, oldVal) {
        console.log(val, oldVal);
      },
      deep: true,
    },
  },
};
</script>

<style >
.card-buttons > .bi:hover {
  transform: scale(1.4);
  transition: transform 0.2s;
  color: red;
}
.card-buttons > .bi > .badge {
  font-size: 8px !important;
}
</style>