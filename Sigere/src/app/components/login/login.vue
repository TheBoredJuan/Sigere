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
          <b-form autocomplete="off" @submit.prevent="validarLogin">
            <div class="loginbox">
              <p style="font-size:24px;color:#b7b7b7;margin-top:-20px">Iniciar Sesión</p>
              <b-form-input class="log" type="email" placeholder="E-Mail" v-model="user.email"></b-form-input>
              <b-form-input class ="log" type="password" placeholder="Contraseña" v-model="user.password"></b-form-input>
              <b-button  class ="log" type="submit">Ingresar</b-button>
              <p class="olvidar"><router-link to="/recuperar">¿Olvidaste tu contraseña?</router-link></p>
            </div> 
          </b-form>
        </b-col>
        <b-col></b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
  class user{
    constructor(name,lastname,username,email,password){
      this.name=name,
      this.lastname=lastname,
      this.username=username,
      this.email=email,
      this.password=password
    }
  }
export default {
  data(){
    return{
      user : new user(),
      userList : [],
      validar : false
    }
  },
  created(){
    this.getUsers()
  },
  methods:{
    getUsers(){
      fetch('/api/users')
        .then(res => res.json())
				.then(data => {
          this.userList = data;
        })
    },
    validarLogin(){
        for (let index = 0; index < this.userList.length; index++) {
          const usern = this.userList[index];
          const email = usern.email;
          const password = usern.password;
          console.log(this.user._id);
          console.log("Email:",email,"Password:",password);
          console.log("User Email:",this.user.email,"User Password:",this.user.password);
          if (email == this.user.email) {
            if (password == this.user.password){
              this.user=usern;     
              this.$router.push('/menu/'+this.user._id+'/proyectos');
              return;
            }
          }
        }
        console.log("Usuario incorrecto");
        this.$router.push('/');
    }
  }
  
}
</script>


<style scoped>
p.olvidar{
  color: #B7B7B7;
  font-size: 12px;
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
    height: 290px;
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