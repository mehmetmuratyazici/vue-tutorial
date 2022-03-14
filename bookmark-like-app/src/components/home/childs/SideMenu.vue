<template>
  <div
    class="offcanvas offcanvas-start"
    tabindex="-1"
    id="offcanvasExample"
    aria-labelledby="offcanvasExampleLabel"
  >
    <div class="offcanvas-header">
      <h5 class="offcanvas-title" id="offcanvasExampleLabel">Bookmark Menu</h5>
      <button
        type="button"
        class="btn-close text-reset"
        data-bs-dismiss="offcanvas"
        aria-label="Close"
      ></button>
    </div>
    <div class="offcanvas-body">
      <ul class="list-group">
        <li
          data-bs-dismiss="offcanvas"
          v-for="item in $store.getters._getCategoryList"
          :key="item.id"
          class="list-group-item d-felx justify-content-start sidebar-hover fs-6"
          @click="$emit('change-category', item.id)"
        >
          {{ item.categoryName }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  created() {},
  mounted() {},
  methods: {},
};
</script>

<style>
.sidebar-hover{
  cursor: pointer;
}
.sidebar-hover:hover{
  background-color: rgb(68, 68, 68);
  color: white;
}
</style>