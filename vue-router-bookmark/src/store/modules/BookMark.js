import { axiosGeneral } from '@/utils/axiosGeneral';
export default {
    namespaced : true,
    state : {
        bookmarkList : []
    },
    actions: {
        deleteBookmark({state}, bookmark){
            console.log("Axios general", this.$axiosGeneral)
            axiosGeneral
            .delete(`/bookmarkList/${bookmark.id}`)
            .then(del_res => {
                if(del_res.status == 200)
                    state.bookmarkList = state.bookmarkList.filter(item => item != bookmark)

            })

        }
    }
}