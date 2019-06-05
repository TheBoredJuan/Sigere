<template>
  <div class="inicio">
    <b-container fluid>
      <b-row>
        <div class="topBar">
          <a href="/"><img src="../../assets/logoff.png" height="75" width="75"></a>
          <a class = "Titulo">Registrar</a>
        </div>
      </b-row>
      <b-row>
        <b-col cols="3">
          <div class="sideBar">
            <b-button @click="$router.push('proyectos')" class="proyMenu"><img src="../../assets/project.png" height="55" width="55"></b-button>
            <b-button  class="proyMenu"><img src="../../assets/news.png" height="55" width="55"></b-button>
            <b-button @click="$router.push('perfil')" class="proyMenu"><img src="../../assets/user.png" height="55" width="55"></b-button>
          </div>
        </b-col>
        <b-col cols="6">
          <form>
            <div class="registerbox">
              <p style="margin-bottom:5px;font-size: 42px"><font color= "B7B7B7">Nuevo usuario </font></p>
              <b-input class ="log" type="text" placeholder="Nombre" v-model="user.name"></b-input>
              <b-input class ="log" type="text" placeholder="Apellido" v-model="user.lastname"></b-input>
              <b-input class ="log" type="text" placeholder="Usuario" v-model="user.username"></b-input>
              <b-input class ="log" type="email" placeholder="E-Mail" v-model="user.email"></b-input>
              <b-input class ="log" type="password" placeholder="Contraseña" v-model="user.password"></b-input>
              <b-button @click="addUser()" type="submit">Registrar</b-button>
           </div> 
          </form>          
        </b-col>
        <b-col cols="1"></b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
class user{
  constructor(name,lastname,username,email,password){
    this.name = name;
    this.lastname = lastname;
    this.username = username;
    this.email = email;
    this.password = password;
  }
}
export default {
  data() {
    return{
      user : new user()
    }
  },
  methods:{
    addUser(){
      fetch('/api/users',{
				method:"POST",
				body:JSON.stringify(this.user),
				headers:{
					'Accept' : 'application/json',
					'Content-type' : 'application/json'
					}
				})
					.then(res => res.json())
					.then(data => console.log(data))
        this.user = new user;
        this.$router.push('/menu/'+this.$route.params.idU+'/proyectos/');
    }
  }
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.log{
  margin-bottom: 20px;
}
.registerbox{
    width: 100%;
    height: 540px;
    text-align: center;
    background-color: #555555;
    padding : 20px 50px;
    position: relative;
    border-radius: 10px;
    box-shadow:10px 10px 15px grey;
    top: 2rem;
}
.sideBar{
  top: 50px;
  position: relative;
  width: 75px;
  height: 240px;
  left: -15px; 
  background-color: #555555;
  border-radius: 0px 15px 15px 0px;
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
}
button.proyMenu{
  outline:none;
  background-color:Transparent;
  border: 0px;
  position:relative;
  margin-top:5px;
  margin-bottom:5px;
  cursor:pointer;
  padding:.5rem;
  }
.Titulo{
  font-family: 'Montserrat', sans-serif;
  font-size: 24px;
  margin-left:10px;
}
button:focus{
  border-color:transparent;
  outline: none;
}
button:hover{
  background-color: lightslategray;

}

p {
  text-align:center;
  padding: 20px;
  color: black;
}

.proy {
  margin-top:50px;
  box-shadow: 0px 0px 40px lightgray;
}

</style>

