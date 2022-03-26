<template>
  <div class="text-end m-1 fs-4">
    |<span
      class="bi bi-funnel-fill text-white my-1"
      v-if="showFilter"
      @click="getCategoryAll"
    />|
  </div>
  <SideMenu @change-category="changeCategory" />
  <BookmarkList v-if="$store.getters._getBookmarkList.length > 0" />
  <div class="text-white" v-else>Bookmark bulunamadı !</div>
<!-- 
  <NewBookmark v-if="$store.getters._showNewBookmark"/> -->
</template>

<script>
import BookmarkList from "@/components/home/BookmarkList";
import SideMenu from "@/components/home/childs/SideMenu";
/* import NewBookmark from '@/components/home/NewBookmark';
 */
export default {
  data() {
    return {
      showFilter: false,
    };
  },
  components: {
    BookmarkList,
    SideMenu,
   /*  NewBookmark, */
  },
  methods: {
    getCategoryAll() {
      this.getFetchBookmark();
    },
    changeCategory(val) {
      this.getFetchBookmark(val);
    },
    getFetchBookmark(categoryId) {
      var param = null;
      if (categoryId != null) {
        this.showFilter = true;
        param = `&category=${categoryId}`;
      } else {
        this.showFilter = false;
        param = "";
      }

      this.$appAxios.get(`/bookmarkList?_expand=likeAndFav${param}`).then((res) => {
        this.$store.state.bookmarkList = res.data;
      });
    },
    NEW_BOOKMARK_ADD(data) {
      this.$store.commit("addBookmark", data);
    },
    UPDATE_LIKE_AND_FAV(data){
        const findObj = this.$store.getters._getBookmarkList.filter(i => i.id == data.id)[0]
        //console.log("findObj => ",findObj);
        findObj.likeAndFav = data.likeAndFav
    }
  },
  created() {
  },
  mounted() {
    this.getFetchBookmark();
    //this.$socket = io(this.$store.getters.socketAddress)
    //! sayfalar arası geçiş yapıldığında mounted çalıştığından sürekli aynı dinleyiciyi ekliyordu bunun önüne geçmek için varsa kapattık
    this.$socket.off("NEW_BOOKMARK_ADDED")
    this.$socket.on("NEW_BOOKMARK_ADDED", this.NEW_BOOKMARK_ADD);
    //console.log(this.$socket.listeners("NEW_BOOKMARK_ADDED"));
    this.$socket.off("UPDATE_LIKE_AND_FAV")
    this.$socket.on('UPDATE_LIKE_AND_FAV', this.UPDATE_LIKE_AND_FAV)
  },
};
</script>

<style>
.bi-funnel-fill:hover {
  color: #eed60a !important;
}
</style>