<template>
  <div class="container">
    <h2>Bookmark Page</h2>
    <div class="d-flex justify-content-end align-items-center">
        <button class="btn btn-success btn-sm" @click="$router.push({ name : 'BookmarkAddPage'})">+ Add New Bookmark</button>
    </div>
    <table class="table table-striped">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Name</th>
          <th scope="col">Url</th>
          <th scope="col">X</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in $store.state.Bookmark.bookmarkList" :key="`key_${item.id}`">
          <th scope="row">{{ index +1 }}</th>
          <td>{{item.name}}</td>
          <td>
              <a :href="item.url" target="_blank">{{item.url}}</a>
          </td>
          <td>
              <!-- <button class="btn btn-danger btn-sm" @click="deleteBookmark(item)">Sil</button> -->
              <button class="btn btn-danger btn-sm" @click="$store.dispatch('Bookmark/deleteBookmark',item)">Sil</button>
          </td>
        </tr>
      </tbody>
    </table>
    <pre>
        {{item}}
    </pre>
  </div>
</template>

<script>
export default {
    data() {
        return {
        }
    },
    methods: {
        /* deleteBookmark(bookmark){
            this.$axiosGeneral
            .delete(`/bookmarkList/${bookmark.id}`)
            .then(del_res => {
                // console.log(del_res)
                if(del_res.status == 200)
                    this.$store.state.Bookmark.bookmarkList = this.$store.state.Bookmark.bookmarkList.filter(item => item != bookmark)
            })
        } */
    },
    mounted() {
        // console.log("Bookmark List",this.$store.state.Bookmark.bookmarkList)
        this.$axiosGeneral.get("/bookmarkList").then(res => {
            this.$store.state.Bookmark.bookmarkList = res.data || []
        })
        //this.bookmarkL = this.$store.state.Bookmark.bookmarkList
    },
}
</script>