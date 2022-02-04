<template>
  <div class="card bookmark m-1" style="max-width: 200px; min-width: 200px">
    <div class="card-body">
      <h4 class="text-dark align-self-center">{{ item.content }}</h4>
      <div
        class="bi d-inline-block me-2"
        :accessKey="`like_icon_${item.id}`"
        :class="fillIconLike"
        @click="clickIcon"
      />
      <div class="bi d-inline-block me-2" :accesskey="`save_icon_${item.id}`" :class="fillIconSave" @click="clickIcon"/>
      <div class="bi d-inline-block" :accesskey="`comment_icon_${item.id}`" :class="fillIconComment" @click="clickIcon"/>
    </div>
  </div>
</template>
<script>
export default {
  props: ["item"],
  data() {
    return {
      itemData: this.item,
    };
  },
  methods: {
    clickIcon(event) {
      if(event.target.accessKey.indexOf("like") > -1)
        this.itemData.liked = !this.itemData.liked;
      else if(event.target.accessKey.indexOf("save") > -1)
        this.itemData.fav = !this.itemData.fav;
      /* if(event.target.accessKey.indexOf("comment") > -1)
        this.itemData.comment = !this.itemData.comment; */
    },
  },
  computed: {
    fillIconLike() {
      return {
        "bi-star-fill": this.itemData.liked,
        "bi-star": !this.itemData.liked,
      };
    },
    fillIconSave() {
      return {
        "bi-bookmark-plus-fill": this.itemData.fav,
        "bi-bookmark-plus": !this.itemData.fav,
      };
    },
    fillIconComment() {
      return {
        "bi-chat-right-text-fill": this.itemData.liked,
        "bi-chat-right-text": !this.itemData.liked,
      };
    },
  },
  watch: {
    'itemData.liked': {
      handler(val, oldVal) {
        console.log(val, oldVal);
      },
      deep: true,
    },
  },
};
</script>

<style >
.card-body > .bi:hover {
  transform: scale(1.4);
  transition: transform 0.2s;
  color : red;
}
</style>