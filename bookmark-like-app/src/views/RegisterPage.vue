<template>
  <div class="container">
    <div class="modal d-block" tabindex="-1">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content overflow-hidden">
          <div class="modal-header d-flex justify-content-center">
            <h2>Üye Ol</h2>
          </div>
          <div class="modal-body">
            <div
              class="input-group align-self-center d-flex align-item-center p-1"
            >
              <span class="input-group-text" id="in-name"
                >Adınız</span
              >
              <input v-model="registerInfo.name"
                aria-describedby="in-name"
                type="text"
                class="form-control"
                placeholder="Enter your name"
              />
            </div>
            <div
              class="input-group align-self-center d-flex align-item-center p-1"
            >
              <span class="input-group-text" id="in-lastname"
                >Soydınız</span
              >
              <input v-model="registerInfo.surname"
                aria-describedby="in-lastname"
                type="text"
                class="form-control"
                placeholder="Enter your lastname"
              />
            </div>
            <div
              class="input-group align-self-center d-flex align-item-center p-1"
            >
              <span class="input-group-text" id="in-username"
                >Kullanıcı Adınız</span
              >
              <input v-model="registerInfo.username"
                aria-describedby="in-username"
                type="text"
                class="form-control"
                placeholder="Enter username"
              />
            </div>
            <div
              class="input-group align-self-center d-flex align-item-center p-1"
            >
              <span class="input-group-text" id="in-password">Şifre</span>
              <input v-model="registerInfo.password"
                id="in-password"
                type="password"
                class="form-control"
                placeholder="Enter your password"
              />
            </div>
            <div
              class="input-group align-self-center d-flex align-item-center p-1"
            >
              <span class="input-group-text" id="in-repeatpassword">Şifre Tekrar</span>
              <input v-model="registerInfo.repeatpassword"
                id="in-repeatpassword"
                type="password"
                class="form-control"
                placeholder="Enter your password again"
              />
            </div>
          </div>
          <div class="modal-footer d-flex justify-content-center">
            <button class="btn btn-secondary" @click="register">Kayıt Ol</button>
          </div>
          <div class="modal-footer d-flex justify-content-center">
            <small>
              Zaten Üyeyim
              <router-link :to="{ name: 'LoginPage' }"> Giriş Yap </router-link>
            </small>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CryptoJs from 'crypto-js'
export default {
  data() {
    return {
      registerInfo : {
        
        name:null,
        surname:null,
        username: null,
        repeatpassword : null,
        password: null,

      }
    }
  },
  methods: {
    register() {
        if(this.registerInfo.repeatpassword != this.registerInfo.password){
          alert("Şifre tekrarı şifre ile aynı değil")
          return 
        }
        
        this.registerInfo.password = CryptoJs.HmacSHA1(this.registerInfo.password, this.$store.state.secretKey).toString()
        var tmpData = this.registerInfo
        delete tmpData.repeatpassword
        
        
        this
        .$appAxios
        .post("/users", tmpData)
        .then(res => {
          console.log(res.data)
          if(res.status == 201){
            this.$router.push({name:'LoginPage'})
          }
        })
    }
  },
}
</script>