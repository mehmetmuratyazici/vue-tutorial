<script setup>
</script>

<template>
  <div
    class="container-flued w-100 bg-white bg-opacity-75 text-white d-flex h-100"
  >
    <div
      v-for="panel in 2"
      :key="`panel_${panel}`"
      class="d-flex w-50 m-3 h-100 shadow flex-wrap justify-content-center"
    >
      <div
        v-if="panel == 1"
        v-for="stone in 50"
        :key="`stone_${stone}`"
        class="
          stone
          bg-warning
          m-1
          rounded
          justify-content-center
          d-flex
          align-items-center
        "
      >
        <span>
          {{ "S" + stone }}
        </span>
      </div>
      <div
        v-if="panel == 2"
        :key="`stone_${stone}`"
        class="
          bg-warning
          m-2
          rounded
          justify-content-center
          d-flex
          align-items-center
        "
      >
        <img src="./assets/mapShut.png" alt="aaaa" class="img-fluid" />
      </div>
    </div>
  </div>
</template>

<style>
.stone {
  width: 33px !important;
  height: 45px;
}
.stone:nth-child(odd):hover {
  opacity: 1;
  background-color: #fff !important;
  border: 2px solid rgb(12, 43, 223);
  color: rgb(12, 43, 223) !important;
  transition: background-color 0.3s;
}
.stone:nth-child(even):hover {
  opacity: 1;
  background-color: #fff !important;
  border: 2px solid rgb(196, 8, 8);
  color: rgb(196, 8, 8) !important;
  transition: background-color 0.3s;
}
.stone:nth-child(odd) {
  background: rgb(196, 8, 8) !important;
}
.stone:nth-child(even) {
  background: rgb(12, 43, 223) !important;
}
</style>
