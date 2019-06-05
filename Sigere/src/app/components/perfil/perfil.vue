<template>
  <div class="inicio">
    <b-container fluid>
      <b-row>
        <div class="topBar">
          <a href="/"><img src="../../assets/logoff.png" height="75" width="75"></a>
          <a class = "Titulo">Perfil</a>
        </div>
      </b-row>
      <b-row>
        <b-col cols="3">
          <div class="sideBar">
            <b-button class="proyMenu" @click="$router.push('proyectos')"><img src="../../assets/project.png" height="55" width="55"></b-button>
            <b-button @click="$router.push('informacion')" class="proyMenu"><img src="../../assets/news.png" height="55" width="55"></b-button>
            <b-button class="proyMenu" @click="$router.push('perfil')"><img src="../../assets/user.png" height="55" width="55"></b-button>
          </div>
        </b-col>
        <b-col cols="6">
          <div class="perfil">
            <img src ="../../assets/profile.png" height ="125" width="125" >
            <p><font face="Montserrat" size="5" color="B7B7B7">{{user.name}}</font></p>
            <b-input class ="perf" type="text" placeholder="Nombre" v-model="user.name"></b-input>
            <b-input class ="perf" type="text" placeholder="Apellido" v-model="user.lastname"></b-input>
            <b-input class ="perf" type="text" placeholder="Usuario" v-model="user.username"></b-input>
            <b-input class ="perf" type="email" placeholder="E-Mail" v-model="user.email"></b-input>
            <b-input class ="perf" type="password" placeholder="Password" v-model="user.password"></b-input>
            <b-button @click="editUser()" class ="perf" type="submit">Guardar Cambios</b-button>
          </div> 
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
  name: 'crearProyectos',
  data() {
    return{
      user : new user()
    }
  },
  created(){
    this.getCurrentUser();
  },
  methods:{
    editUser(){
      fetch('/api/users/' + this.$route.params.idU ,{
          method: 'PUT',
          body: JSON.stringify(this.user),
          headers:{
              'Accept' : 'application/json',
              'Content-type' : 'application/json'
          }
      })
      .then(res => res.json())
      .then(this.$router.go());   
    },
    getCurrentUser(){
        var id = this.$route.params.idU;
        fetch('/api/users/' + id)
            .then(res => res.json())
            .then(data =>{
                this.user=data;  
        });
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.perf{
  margin-top: 10px;
}
.perfil{
  width: 100%;
  height: 600px;
  background-color: #555555;
  text-align: center;
  padding : 3rem;
  margin-top: 50px;
  border-radius: 10px;
  box-shadow:10px 10px 15px grey;  
  margin-bottom: 50px;
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
ul {
  margin: 0;
  padding: 0;
  list-style-type: none;
}
p {
  text-align:center;
  padding: 20px;
  color: black;
}


</style>

