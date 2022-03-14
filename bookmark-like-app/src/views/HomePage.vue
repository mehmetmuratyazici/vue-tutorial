<template>
  <app-header />

  <div class="text-end m-1 fs-4">
    |<span
      class="bi bi-funnel-fill text-white my-1"
      v-if="showFilter"
      @click="getCategoryAll"
    />|
  </div>
  <SideMenu @change-category="changeCategory" />
  <BookmarkList />
</template>

<script>
import BookmarkList from "@/components/home/BookmarkList";
import SideMenu from "@/components/home/childs/SideMenu";
export default {
  data() {
    return {
      showFilter: false,
    };
  },
  components: {
    BookmarkList,
    SideMenu,
  },
  methods: {
    getCategoryAll() {
      console.log(111);
      this.getCategory();
    },
    changeCategory(val) {
      this.getCategory(val);
    },
    getCategory(categoryId) {
      var param = null;
      if (categoryId != null) {
        this.showFilter = true;
        param = `?id=${categoryId}`;
      } else {
        this.showFilter = false;
        param = "";
      }

      this.$appAxios.get(`/bookmarkList${param}`).then((res) => {
        this.$store.state.bookmarkList = res.data;
      });
    },
  },
  mounted() {
    this.getCategory();
  },
};
</script>

<style>
.bi-funnel-fill:hover{
    color: #eed60a !important;
}
</style>