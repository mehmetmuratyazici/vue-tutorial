import {createStore} from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import SecureLS from "secure-ls";
var ls = new SecureLS({ isCompression: false });


const store = createStore({
    state: {
        appname : "BookMark",
        userLogin : null,
        secretKey : "pargommy",
        categoriesList : [],
        bookmarkList : [],
        hideMenuSideBar: true,
        socketAddress: "http://localhost:1967",
        showNewBookmark: false,
    },
    mutations : {
        setUser(state, loginInfo){
            state.userLogin = loginInfo
        },
        logoutUser(state) {
            state.userLogin = null
        },
        setHideMenuBar(state, val){
            state.hideMenuSideBar = val
        },
        addLike(state, arrLike){
            state.userLogin.likes = arrLike
        },
        addFav(state, arrFav){
            state.userLogin.favs = arrFav
        },
        addBookmark(state, bookmark){
            state.bookmarkList.push(bookmark)
        },
        showNewBookmark(state, val){
            state.showNewBookmark = val;
        }
    },
    getters :{
        _isAuthenticated : state => state.userLogin != null,
        _getBookmarkList : state => state.bookmarkList,//.filter,
        _getCategoryList : state => state.categoriesList,
        _userLikes : state => state.userLogin?.likes || [],
        _userFav : state => state.userLogin?.favs || [],
        _getUserInfo(state) {
            const user = state.userLogin
            // console.log("_getUserInfo") // iki kere geliyor her işlemde neden olduğuna bakmak lazım
            delete user?.password
            return user
        },
        _getActiveUser : state => state.userLogin?.username,
        _getSocketAddress: state => state.socketAddress,
        _showNewBookmark: state => state.showNewBookmark,
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