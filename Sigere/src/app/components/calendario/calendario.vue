<template>
  <div>
  <b-container fluid>
    <b-row>
    <div class="topBar">
      <a class="back" @click="goIni()"><img src="../../assets/back.png" height="75" width="75"></a>
      <a class = "Titulo">{{ projName }}</a>
      <a class = "userName">Bienvenido, {{ currentUser }}</a> 
    </div>
  </b-row>
      <b-row>
        <b-col cols="2">
         <div class="leftmenu">
          <b-button @click="goIni()" class="proyMenu"><img src="../../assets/borrador.png" height="55" width="55"></b-button>
          <b-button @click="goRequirements()" class="proyMenu"><img src="../../assets/req.png" height=55 width="55"></b-button>
          <b-button @click="goSRS()" class="proyMenu"><img src="../../assets/srs.png" height="55" width="55"></b-button>
          <b-button @click="goImgD()" class="proyMenu"><img src="../../assets/diagrama.png" height="55" width="55"></b-button>
          <b-button class="proyMenu"><img src="../../assets/chat.png" height="55" width="55"></b-button>
          <b-button @click="goMembers()" class="proyMenu"><img src="../../assets/añadir.png" height="55" width="55"></b-button>
          <b-button @click="$router.go()" class="proyMenu"><img src="../../assets/calendario.png" height="55" width="55"></b-button>
         </div>
        </b-col>
        <b-col cols="5">
          <div class="eventos">
            <div class="mostrarEventos">
              <ul class="proyectosUsuario">
                <p class="Subtitulo">Próximos eventos</p>
                <li v-for="(data, index) in events" :key='index'>
                  {{ data.name }}<br>{{ data.description }}<br>{{ data.date }}
                </li>
              </ul>
            </div>
          </div>
        </b-col>
        <b-col>
          <p class="Subtitulo">Nuevo evento</p>
          <b-button @click= "goEvents()" class ="Agregar" type="submit"><img src="../../assets/plus.png" height="80" width="70"></b-button>
        </b-col>        
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'calendario',
  data() {
    return{
      projName: '',
      currentUser: '',
      events: []
    }
  },
  created(){
    this.getProjectName();
    this.getCurrentUser();
    this.getEvents();
  },
  methods : {
    getEvents(){
      fetch('/api/events/sp/'+this.$route.params.idP)
        .then(res => res.json())
        .then(data => {
          console.log(data);
          this.events = data;
        })
    },
    getProjectName(){
			var id = this.$route.params.idP;
			fetch('/api/projects/' + id)
				.then(res => res.json())
				.then(data =>{
          this.projName = data.name;    
        });
    },
    getCurrentUser(){
        var id = this.$route.params.idU;
        fetch('/api/users/' + id)
            .then(res => res.json())
            .then(data =>{
                this.currentUser = data.name;    
        });
    },
    goRequirements(){
      this.$router.push('/menu/'+this.$route.params.idU+'/proyecto/'+this.$route.params.idP+'/requisitos');
    },
    goBack(){
      this.$router.push('/menu/'+this.$route.params.idU+'/proyectos/');
    },
    goSRS(){
      this.$router.push('/menu/'+this.$route.params.idU+'/proyecto/'+this.$route.params.idP+'/genSRS')
    },
    goImgD(){
      this.$router.push('/menu/'+this.$route.params.idU+'/proyecto/'+this.$route.params.idP+'/imagenDiagrama')
    },
    goMembers(){
      this.$router.push('/menu/'+this.$route.params.idU+'/proyecto/'+this.$route.params.idP+'/integrantes')
    },
    goIni(){
      this.$router.push('/menu/'+this.$route.params.idU+'/proyecto/'+this.$route.params.idP+'/inicio')  
    },
    goEvents(){
      this.$router.push('/menu/'+this.$route.params.idU+'/proyecto/'+this.$route.params.idP+'/crearEvento')
    }
  }
}
</script>

<style scoped>
.userName{
    float:right;
    padding: 2rem;
    font-size: 24px;
}
.Agregar{
  margin-left: 40px;
  border-radius: 50%;
}
.elim{
  float:right;
  border-radius: 50%;
  padding: 0.5rem;
  position: absolute;
  right: 60px;
}
.Titulo{
  font-family: 'Montserrat', sans-serif;
  font-size: 24px;
  margin-left:10px;
}
p{
  font-family: 'Montserrat', sans-serif;
}
p.ing{
  font-size: 14px;
  margin: .5rem;
}
p.Subtitulo{
  font-size: 24px;
  padding: 1rem;
  margin-left: 10px;
  margin-top: 15px;
}
a.back{
  cursor: pointer;
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
.leftmenu{
  top: 50px;
  position: relative;
  width: 75px;
  height: 100%;
  left: -15px; 
  background-color: #555555;
  border-radius: 0px 15px 15px 0px;
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
button.proyMenu:hover{
  background-color:lightgray;
  width: 75px;
  height: 75px;
}
ul {
  margin: 0;
  padding: 0;
  list-style-type: none;
}

ul li {
  padding: 20px;
  font-size: 1.3em;
  background-color: #E0EDF4;
  border-left: 5px solid #3EB3F6;
  margin-bottom: 2px;
  color: #3E5252;
}
.mostrarEventos{
  background: #fff;
}
.eventos {
  margin-top:50px;
  padding : 0.5rem;
  box-shadow: 0px 0px 40px lightgray;
}
</style>