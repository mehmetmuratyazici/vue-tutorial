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
      <ul class="list-group" >
          <li class="list-group-item d-felx justify-content-start"><router-link class="text-decoration-none text-dark"  :to="{}">Action</router-link></li>
          <li class="list-group-item d-felx justify-content-start"><router-link  class="text-decoration-none text-dark" :to="{}">Another action</router-link></li>
          <li class="list-group-item d-felx justify-content-start"><router-link class="text-decoration-none text-dark"  :to="{}">Something else here</router-link></li>
      </ul>
    </div>
  </div>
</template>