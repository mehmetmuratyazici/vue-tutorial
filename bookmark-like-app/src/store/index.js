import {createStore} from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import SecureLS from "secure-ls";
var ls = new SecureLS({ isCompression: false });


const store = createStore({
    state: {
        appName : "Social BookMark",
        userLogin : null,
        secretKey : "pargommy",
        bookmarkList : [
            {
                id : 1,
                content : "Bookmark 1",
                username : "mmy",
                liked : false,
                fav : false,
            },
            {
                id : 2,
                content : "Bookmark 2",
                username : "mmy",
                liked : false,
                fav : false,
            },
            {
                id : 3,
                content : "Bookmark 3",
                username : "mmy",
                liked : false,
                fav : false,
            },
            {
                id : 4,
                content : "Bookmark 4",
                username : "mmy",
                liked : false,
                fav : false,
            },
            {
                id : 5,
                content : "Bookmark 5",
                username : "mmy",
                liked : true,
                fav : false,
            }
        ]
    },
    mutations : {
        setUser(state, loginInfo){
            state.userLogin = loginInfo
        },
        logoutUser(state) {
            state.userLogin = null
        }
    },
    getters :{
        _isAuthenticated : state => state.userLogin != null,
        _getBookmarkList : state => state.bookmarkList,//.filter,
        _getUserInfo(state) {
            const user = state.userLogin
            // console.log("_getUserInfo") // iki kere geliyor her işlemde neden olduğuna bakmak lazım
            delete user?.password
            return user
        },
        _getActiveUser : state => state.userLogin?.username,
    },
    plugins: [
        createPersistedState({
          storage: {
            getItem: (key) => ls.get(key),
            setItem: (key, value) => ls.set(key, value),
            removeItem: (key) => ls.remove(key),
          },
        }),
      ],
})


export default store