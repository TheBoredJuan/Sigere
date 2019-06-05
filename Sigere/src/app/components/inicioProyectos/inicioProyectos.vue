<template>
  <div class="inicio">
    <b-container fluid>
      <b-row>
        <div class="topBar">
          <a href="/"><img src="../../assets/logoff.png" height="75" width="75"></a>
          <a class = "Titulo">Proyectos</a>
          <b-button @click="goRegistrar()" style="float:right" v-show="currentUsername == 'a'">Registrar usuarios</b-button>
          <a class = "userName">Bienvenido, {{ currentUser }}</a> 
        </div>
      </b-row>
      <b-row>
        <b-col cols="2">
          <div class="sideBar">
            <b-button @click="$router.push('proyectos')" class="proyMenu"><img src="../../assets/project.png" height="55" width="55"></b-button>
            <b-button @click="$router.push('informacion')" class="proyMenu"><img src="../../assets/news.png" height="55" width="55"></b-button>
            <b-button @click="$router.push('perfil')" class="proyMenu"><img src="../../assets/user.png" height="55" width="55"></b-button>
          </div>
        </b-col>
        <b-col>
          <div class="proy">
            <div class="mostrarProyectos">
              <p> Mis proyectos </p>
              <ul class="proyectosUsuario">
              <li v-for="(data, index) in projects" :key='index'>
                {{ data.name }}
                <b-button @click="deleteProject(data._id)" class="accionProyecto"><img src="../../assets/del.png" height="18"> </b-button>
                <b-button @click="showProject(data._id)" class="accionProyecto"><img src="../../assets/edit.png" height="18"> </b-button>
              </li>
              </ul>
              <b-button @click="createProject()" class ="Agregar"><img src="../../assets/plus.png" height="25" width="19"></b-button>
              Nuevo proyecto
            </div>
          </div>
        </b-col>
        <b-col cols="1"></b-col>
      </b-row>
      <!--<b-row>
        <b-col cols="2"></b-col>
        <b-col>
          <br><hr>
          <b-button @click="$router.push('proyectos/papelera')" class="papelera"><img src="../../assets/del.png" width="50"></b-button>
          <a class="Titulo" style="font-size: 20px">Papelera de proyectos</a>
        </b-col>
        <b-col cols="1"></b-col>
      </b-row>-->
    </b-container>
  </div>
</template>

<script>
export default {
  data() {
    return{
      projects : [],
      currentUser: '',
      currentUsername: '',
    }
  },
  created(){
    this.getProjects();
    this.getCurrentUser();
  },
  methods: {
      getProjectsPart2(pro){
      for (let index = 0; index < pro.length; index++) {
        const ele = pro[index];
        const element = ele.idP;
        fetch('/api/projects/'+element)
          .then(res => res.json())
          .then(data => {
            if (data!=undefined) {
              this.projects.push(data);
            }
          })    
      }
    },
    getCurrentUser(){
        var id = this.$route.params.idU;
        fetch('/api/users/' + id)
            .then(res => res.json())
            .then(data =>{
                this.currentUser = data.name;
                this.currentUsername = data.username;    
        });
    },
    getProjects	(){
      this.projects = [];
      var pro=[];
      fetch('/api/projectsxusers/su/'+this.$route.params.idU)
        .then(res => res.json())
        .then(data => {
          pro = data;
          this.getProjectsPart2(pro);
        })   
    },
    createProject(){
      this.$router.push('/menu/'+this.$route.params.idU+'/proyectos/crearProyecto');
      this.getProjects();
    },
    showProject(idP){
      this.$router.push('/menu/'+this.$route.params.idU+'/proyecto/'+idP+'/inicio');
    },
    deleteProject(id){
      fetch('/api/projects/'+id,{
        method: 'DELETE',
        headers: {
          'Accept' : 'application/json',
          'Content-type' : 'application/json'
        }
      })
      .then(res => res.json())
      .then(data => console.log(1))
      fetch('/api/projectsxusers/dp/'+id,{
        method: 'DELETE',
        headers: {
          'Accept' : 'application/json',
          'Content-type' : 'application/json'
        }
      })
      .then(res => res.json())
      .then(data => console.log(2))
      fetch('/api/requirements/dp/'+id,{
        method: 'DELETE',
        headers: {
          'Accept' : 'application/json',
          'Content-type' : 'application/json'
        }
      })
      .then(res => res.json())
      .then(data => console.log(data))
      this.getProjects();
    },
    goRegistrar(){
      this.$router.push('/menu/'+this.$route.params.idU+'/registrar');
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.userName{
    float:right;
    padding: 2rem;
    font-size: 24px;
}
.papelera{
  margin-top: 5px;
  border-radius: 50%;
  padding: 1rem;
}
.Agregar{
  margin-left: 10px;
  border-radius: 50%;
  margin-top: 10px;
  margin-bottom: 10px;
  background-color: #FFFFFF;
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
.mostrarProyectos {
  background: #fff;
}
.accionProyecto{
  background-color: #23272d;
  padding: .2rem .3rem .3rem .3rem;
  border-radius: 50%;
  border-color: transparent;
  margin-right: 5px;
  float:right;
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

ul li {
  padding: 20px;
  font-size: 1.3em;
  background-color: #E0EDF4;
  border-left: 5px solid #3EB3F6;
  margin-bottom: 2px;
  color: #3E5252;
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

