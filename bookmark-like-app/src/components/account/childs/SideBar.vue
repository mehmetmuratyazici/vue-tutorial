<template>
  <div class="container-fluid">
    <div class="row flex-nowrap">
      <div class="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark">
        <div
          class="
            d-flex
            flex-column
            align-items-center align-items-sm-start
            px-3
            pt-2
            text-white
            vh-wo-nb-100
          "
        >
          <ul
            class="
              nav nav-pills
              flex-column
              mb-sm-auto mb-0
              align-items-center align-items-sm-start
            "
            id="menu"
          >
            <li>
              <a
                href="#"
                class="nav-link px-0 align-middle"
              >
                <i class="fs-4 bi-hand-thumbs-up"></i>
                <span class="ms-1 d-none d-sm-inline"> Beğeniler</span>
              </a>
            </li>
            <li>
              <a href="#" class="nav-link px-0 align-middle">
                <i class="fs-4 bi-star"></i>
                <span class="ms-1 d-none d-sm-inline"> Favoriler</span></a
              >
            </li>
            <li>
              <a
                href="#"
                class="nav-link px-0 align-middle"
              >
                <i class="fs-4 bi-person-circle"></i>
                <span class="ms-1 d-none d-sm-inline"> Hesabım</span></a
              >
            </li>
            <!-- <li>
              <a
                href="#submenu3"
                data-bs-toggle="collapse"
                class="nav-link px-0 align-middle"
              >
                <i class="fs-4 bi-grid"></i>
                <span class="ms-1 d-none d-sm-inline">Products</span>
              </a>
              <ul
                class="collapse nav flex-column ms-1"
                id="submenu3"
                data-bs-parent="#menu"
              >
                <li class="w-100">
                  <a href="#" class="nav-link px-0">
                    <span class="d-none d-sm-inline">Product</span> 1</a
                  >
                </li>
                <li>
                  <a href="#" class="nav-link px-0">
                    <span class="d-none d-sm-inline">Product</span> 2</a
                  >
                </li>
                <li>
                  <a href="#" class="nav-link px-0">
                    <span class="d-none d-sm-inline">Product</span> 3</a
                  >
                </li>
                <li>
                  <a href="#" class="nav-link px-0">
                    <span class="d-none d-sm-inline">Product</span> 4</a
                  >
                </li>
              </ul>
            </li> -->
          </ul>
          <hr />
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.vh-wo-nb-100 {
  min-height: calc(100vh - 54px) !important;
}
</style>