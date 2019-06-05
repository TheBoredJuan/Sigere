<template>
  <div>
  <b-container fluid>
    <b-row>
    <div class="topBar">
      <a class="back" @click="goBack()"><img src="../../assets/back.png" height="75" width="75"></a>
      <a class = "Titulo">{{projName}}</a>
      <a class = "userName">Bienvenido, {{ currentUser }}</a>
    </div>
  </b-row>
      <b-row>
        <b-col cols="2">
         <div class="leftmenu">
          <b-button @click="$router.go()" class="proyMenu"><img src="../../assets/borrador.png" height="55" width="55"></b-button>
          <b-button @click="goRequirements()" class="proyMenu"><img src="../../assets/req.png" height="55" width="55"></b-button>
          <b-button @click="goSRS()" class="proyMenu"><img src="../../assets/srs.png" height="55" width="55"></b-button>
          <b-button  @click="goImgD()" class="proyMenu"><img src="../../assets/diagrama.png" height="55" width="55"></b-button>
          <b-button class="proyMenu"><img src="../../assets/chat.png" height="55" width="55"></b-button>
          <b-button  @click="goMembers()" class="proyMenu"><img src="../../assets/añadir.png" height="55" width="55"></b-button>
          <b-button @click="goCalendar()" class="proyMenu"><img src="../../assets/calendario.png" height="55" width="55"></b-button>
         </div>
        </b-col>
        <b-col>
          <p class="Subtitulo ">Bienvenido a tu proyecto</p>
          <form @submit.prevent="editProject">
            Nombre
            <b-input type="text" v-model="project.name"></b-input>
            Descripción
            <b-textarea type="text" v-model="project.description"></b-textarea>
            Cliente
            <b-input type="text" v-model="project.client"></b-input>
            Fecha
            <b-input type="date" v-model="project.date" disabled=disabled></b-input>
            <br><br>
            <b-col cols="5"></b-col>
            <b-col><b-button block variant="primary" type="submit">Editar proyecto</b-button></b-col>
            <b-col cols="5"></b-col>
          </form>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>

class project{
	constructor(idMaster,name,description,client,date){
		this.idMaster = idMaster;
		this.name = name;
		this.description = description;
		this.client = client;
		this.date = date;
	}
}

export default {
  data() {
    return{
      projName : '',
      project : new project(),
      currentUser: ''
    }
  },
  created(){
    this.getProject();
    this.getCurrentUser();
  },
  methods:{
    editProject(){
      var id = this.$route.params.idP;
      fetch('/api/projects/' + id,{
          method: 'PUT',
          body: JSON.stringify(this.project),
          headers:{
              'Accept' : 'application/json',
              'Content-type' : 'application/json'
          }
      })
      .then(res => res.json())
      .then(this.getProject());   
      },
		getProject(){
      var id = this.$route.params.idP;
			fetch('/api/projects/' + id)
				.then(res => res.json())
				.then(data =>{
          this.project = new project(data.idMaster,data.name,data.description,data.client,data.date);
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
    goCalendar(){
      this.$router.push('/menu/'+this.$route.params.idU+'/proyecto/'+this.$route.params.idP+'/calendario')
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
.subm{
  margin-top:30px;
}
a.back{
  cursor: pointer;
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
</style>