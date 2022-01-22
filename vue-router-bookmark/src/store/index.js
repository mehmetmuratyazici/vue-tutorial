import { createStore } from 'vuex'
import Bookmark from '@/store/modules/BookMark'
const store = createStore({
    modules:{
        Bookmark,
    },
    state : {
        appName : "BookMark"
    },

})


export default store;