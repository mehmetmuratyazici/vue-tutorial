<template>
  <div
    class="
      container
      flex-wrap
      d-flex
      justify-content-start
      align-items-center
    "
  >
    <Bookmark v-for="item in $store.getters._getBookmarkList" :key="item" :item="item" />
  </div>
  <!-- <div class="text-white">
      <pre>
          {{$store.state.bookmarkList}}
      </pre>
  </div> -->
</template>

<script>
import Bookmark from "./childs/Bookmark";
export default {
  components: {
    Bookmark,
  },
};
</script>