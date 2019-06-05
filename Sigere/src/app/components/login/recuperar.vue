<template>
  <div>
    <b-container fluid>
      <b-row>
        <div class="topBar">
          <a class="imagen" ><img src="../../assets/ingenieriaReq.png" height="75" width="75"></a>
          <a class = "Titulo">SIGERE</a><br>
          <a class="Titulo">Sistema Gestor de Requisitos</a>
        </div>
      </b-row>
      <b-row>
        <b-col></b-col>
        <b-col>
          <b-form @submit.prevent="getPassword">
            <div class="loginbox">
              <p class="recuperar">Recuperar Contraseña</p>
              <b-form-input class="log" type="email" placeholder="E-Mail" v-model="email"></b-form-input>              
              <b-button class ="log" type="submit">Enviar</b-button>
              <p style="font-size:12px"><router-link to="/">Volver</router-link></p>
            </div> 
          </b-form>
        </b-col>
        <b-col></b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  data() {
    return{
      sendPassword : '',
      email : ''
    }
  },
  created() {
    let ckeditor = document.createElement('script');    ckeditor.setAttribute('src',"https://smtpjs.com/v3/smtp.js");
    document.head.appendChild(ckeditor);
  },
  methods: {
    sendEmail(){
      Email.send({
      Host : "smtp.gmail.com",
      Username : "sigereingesoft@gmail.com",
      Password : "ingesoft123",
      To : this.email,
      From : "sigereingesoft@gmail.com",
      Subject : "Contraseña olvidada",
      Body : this.sendPassword
      }).then(
          alert("Enviado")
      );
      this.$router.push('/')
    },
    getPassword(){
      fetch('/api/users/fp/' + this.email)
            .then(res => res.json())
            .then(data =>{
              console.log(data);
              if(data[0].password != undefined){
                this.sendPassword = data[0].password;
                this.sendEmail();
              }
              else{
                alert("El correo no se encuentra registrado");
              }    
            });
    }
  }
}
</script>

<style scoped>
p.recuperar{
  color: #B7B7B7;
  font-size: 24px;
  margin-top: -20px;
}
.log{
  justify-content: center;
  position: relative;
  margin: auto;
  border-radius: 5px;
  align-self: center;
  margin-bottom: 15px; 
}
.imagen{
  position: absolute;
  left:5px;
}
.Titulo{
  font-family: 'Montserrat', sans-serif;
  font-size: 24px;
  margin-left: 0px;
}
p{
  font-family: 'Montserrat', sans-serif;
}
p.Subtitulo{
  font-size: 24px;
  padding: 1rem;
}
.topBar{
  width: 100%;
  height: 90px;
  background-color: #90caf9;
  background-size: cover; 
  top: 0px;
  left: 0px;
  position: relative;
  padding: 0.5rem;
  text-align: center;
}
.loginbox{
    width: 350px;
    height: 270px;
    text-align: center;
    background-color: #555555;
    padding : 50px 50px;
    position: relative;
    border-radius: 10px;
    box-shadow:10px 10px 15px grey;
    top:8rem;
    left: 30px;
}
</style>