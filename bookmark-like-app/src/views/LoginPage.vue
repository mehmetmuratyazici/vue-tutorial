<template>
  <div class="container">
    <div class="modal d-block" tabindex="-1">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content overflow-hidden">
          <div class="modal-header d-flex justify-content-center">
            <h3>Giriş Yap</h3>
          </div>
          <div class="modal-body">
            <div
              class="input-group align-self-center d-flex align-item-center p-1"
            >
              <span class="input-group-text" id="in-username"
                >Kullanıcı Adınız</span
              >
              <input
                v-model="userLoginData.username"
                aria-describedby="in-username"
                type="text"
                class="form-control"
                placeholder="Enter Username"
              />
            </div>
            <div
              class="input-group align-self-center d-flex align-item-center p-1"
            >
              <span class="input-group-text" id="in-password">Şifre</span>
              <input
                v-model="userLoginData.password"
                id="in-password"
                type="password"
                class="form-control"
                placeholder="Enter Password"
                @keypress.enter="login"
              />
            </div>
          </div>
          <div class="modal-footer d-flex justify-content-center">
            <button class="btn btn-secondary" @click="login">Login</button>
          </div>
          <div class="d-flex justify-content-center">
            <small>
              Üye değilim ki
              <router-link :to="{ name: 'RegisterPage' }"> Üye Ol </router-link>
            </small>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CryptoJs from "crypto-js";
export default {
  data() {
    return {
      userLoginData: {
        username: null,
        password: null,
      },
    };
  },
  methods: {
    login() {
      const password = CryptoJs.HmacSHA1(
        this.userLoginData.password,
        this.$store.state.secretKey
      ).toString(); // bunu store da bir methoda çekebiliriz

      this.$appAxios
        .get(
          `/users?username=${this.userLoginData.username}&password=${password}`
        )
        .then((res) => {
          if (
            res.status == 200 &&
            res.data[0]?.username == this.userLoginData.username
          ) {
            this.$store.commit("setUser", res.data[0]);
            this.$router.push({ name: "HomePage" });
          }
          else {
            alert("Kullanıcı bilgileri hatalı")
          }
        })
        .catch(e => console.log(e));
      //console.log("userLoginData >> ", this.userLoginData, password);
    },
  },
};
</script>