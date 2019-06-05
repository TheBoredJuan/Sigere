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
          <b-button @click="goBack()" class="proyMenu"><img src="../../assets/borrador.png" height="55" width="55"></b-button>
          <b-button @click="$router.go()" class="proyMenu"><img src="../../assets/req.png" height=55 width="55"></b-button>
          <b-button @click="goSRS()" class="proyMenu"><img src="../../assets/srs.png" height="55" width="55"></b-button>
          <b-button  @click="goImgD()" class="proyMenu"><img src="../../assets/diagrama.png" height="55" width="55"></b-button>
          <b-button class="proyMenu"><img src="../../assets/chat.png" height="55" width="55"></b-button>
          <b-button  @click="goMembers()" class="proyMenu"><img src="../../assets/añadir.png" height="55" width="55"></b-button>
          <b-button @click="goCalendar()" class="proyMenu"><img src="../../assets/calendario.png" height="55" width="55"></b-button>
         </div>
        </b-col>
        <b-col cols="4">
          <div class="req">
            <div class="mostrarRequisitos">
              <p> Definiciones </p>
              <ul class="proyectosUsuario">
              <li v-for="(defReq,index) in defReq" v-bind:key='index'>
                {{ defReq.type }}-{{ defReq.number }}
                <b-button class="accionReq" @click="deleteRequirement(defReq._id)"><img src="../../assets/del.png" height="18"> </b-button>
                <b-button @click="infoRequirement(defReq._id)" class="accionReq"><img src="../../assets/esp.png" height="18"> </b-button>                
                <b-button @click="editRequirement(defReq._id)" class="accionReq"><img src="../../assets/edit.png" height="18"> </b-button>
              </li>
              </ul>
              <b-button @click="goNewRequirement()" class ="Agregar" type="submit"><img src="../../assets/plus.png" height="25" width="19"></b-button>
              Nueva definición
            </div>
          </div>
        </b-col>
        <b-col cols="4">
          <div class="req">
            <div class="mostrarRequisitos">
              <p> Especificaciones </p>
              <ul class="proyectosUsuario">
              <li v-for="(data, index) in espReq " :key='index'>
                {{ data.specification }}
                <b-button class="accionReq" @click="deleteEspRequirement(data._id)"><img src="../../assets/del.png" height="18"> </b-button>
                <b-button @click="editEspRequirement(data._id)" class="accionReq"><img src="../../assets/edit.png" height="18"> </b-button>
              </li>
              </ul>
              <br>
            </div>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  data() {
    return{
      projName : "",
      defReq: [],
      espReq: [],
      currentUser: ''
    }
  },
  created(){
    this.getRequirements();
    this.getEspRequirements();
    this.getProjectName();
    this.getCurrentUser();
  },
  methods: {
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
    getRequirements(){
      fetch('/api/requirements/sp/'+this.$route.params.idP)
        .then(res => res.json())
        .then(data => {
          this.defReq = data;
        })
    },
    getEspRequirements(){
      fetch('/api/espRequirements/sp/'+this.$route.params.idP)
      .then(res => res.json())
      .then(data => {
        this.espReq = data;
      })
    },
    deleteRequirement(id){
      fetch('/api/requirements/'+id,{
        method: 'DELETE',
        headers: {
          'Accept' : 'application/json',
          'Content-type' : 'application/json'
        }
      })
      .then(res => res.json())
      .then(data => {
        this.getRequirements();
      })
    },
    editRequirement(id){
      this.$router.push('/menu/'+this.$route.params.idU+'/proyecto/'+this.$route.params.idP+'/requisitos/editar/'+id);
    },
    infoRequirement(id){
      this.$router.push('/menu/'+this.$route.params.idU+'/proyecto/'+this.$route.params.idP+'/requisitos/info/'+id);
    },
    deleteEspRequirement(id){
      fetch('/api/espRequirements/'+id,{
        method: 'DELETE',
        headers: {
          'Accept' : 'application/json',
          'Content-type' : 'application/json'
        }
      })
      .then(res => res.json())
      .then(data => {
        this.getEspRequirements();
      })
    },
    editEspRequirement(id){
      this.$router.push('/menu/'+this.$route.params.idU+'/proyecto/'+this.$route.params.idP+'/requisitos/editarEsp/'+id)
    },
    goNewRequirement(){
      this.$router.push('/menu/'+this.$route.params.idU+'/proyecto/'+this.$route.params.idP+'/requisitos/nuevo')
    },
    goBack(){
      this.$router.push('/menu/'+this.$route.params.idU+'/proyecto/'+this.$route.params.idP+'/inicio');
    },
    goSRS(){
      this.$router.push('/menu/'+this.$route.params.idU+'/proyecto/'+this.$route.params.idP+'/genSRS')
    },
    goRequirements(){
      this.$router.push('/menu/'+this.$route.params.idU+'/proyecto/'+this.$route.params.idP+'/requisitos');
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
.Titulo{
  font-family: 'Montserrat', sans-serif;
  font-size: 24px;
  margin-left:10px;
}
a.back{
  cursor: pointer;
}
p {
  text-align:center;
  padding: 20px;
  color: black;
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
.mostrarRequisitos {
  background: #fff;
}
.accionReq{
  background-color: #23272d;
  padding: .2rem .3rem .3rem .3rem;
  border-radius: 50%;
  border-color: transparent;
  margin-right: 5px;
  float:right;
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

.req {
  margin-top:50px;
  box-shadow: 0px 0px 40px lightgray;
}

</style>