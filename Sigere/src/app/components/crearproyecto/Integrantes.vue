<template>
  <div>
  <b-container fluid>
    <b-row>
    <div class="topBar">
      <a class="back" @click="goBack()"><img src="../../assets/back.png" height="75" width="75"></a>
      <a class = "Titulo">{{ projName }}</a>
      <a class = "userName">Bienvenido, {{ currentUser }}</a> 
    </div>
  </b-row>
      <b-row>
        <b-col cols="1">
         <div class="leftmenu">
          <b-button @click="goBack()" class="proyMenu"><img src="../../assets/borrador.png" height="55" width="55"></b-button>
          <b-button @click="goRequirements()" class="proyMenu"><img src="../../assets/req.png" height=55 width="55"></b-button>
          <b-button @click="goSRS()" class="proyMenu"><img src="../../assets/srs.png" height="55" width="55"></b-button>
          <b-button @click="goImgD()" class="proyMenu"><img src="../../assets/diagrama.png" height="55" width="55"></b-button>
          <b-button class="proyMenu"><img src="../../assets/chat.png" height="55" width="55"></b-button>
          <b-button @click="$router.go()" class="proyMenu"><img src="../../assets/añadir.png" height="55" width="55"></b-button>
          <b-button @click="goCalendar()" class="proyMenu"><img src="../../assets/calendario.png" height="55" width="55"></b-button>
         </div>
        </b-col>
        <b-col>
          <b-form @submit.prevent="addMember">
            <b-row>
              <p class="Subtitulo">Agregar integrantes</p>
            </b-row>
            <b-row>
              <b-col cols="3">
              <b-button class="Agregar" type="submit"><img src="../../assets/plus.png" height="50" width="40"></b-button>
              </b-col>
              <b-col>
                <b-input type="text" placeholder="Nombre de usuario" v-model="addUsername"></b-input>
              </b-col>
            </b-row>
          </b-form>
        </b-col>
        <b-col>
          <p class="Subtitulo">Integrantes del proyecto</p>
          <div class="mostrarIntegrantes">
            <ul class="integrantesProyecto">
              <li v-for="(data, index) in integrantesProyecto" :key='index'>
                {{ data.username }}
                <b-button @click="delMember(data._id)" class="elim"><img align="right" src="../../assets/minus.png" height="10" width="10"></b-button>
              </li>
        </ul>
      </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
class projectxuser{
  constructor(idP,idU){
    this.idP=idP;
    this.idU=idU;
  }
}
export default {
  name: 'imagenDiagrama',
  data() {
    return{
      projName: '',
      addUsername: '',
      currentUser: '',
      integrantesProyecto: [],
      usuarios: [],
      newProjectxUse: new projectxuser()
    }
  },
  created(){
    this.getProjectName();
    this.getCurrentUser();
    this.getMembers();
    this.getUsers();
  },
  methods : {
      delMember(id){
        fetch('/api/projectsxusers/du/'+id+'/dp/'+this.$route.params.idP,{
          method: 'DELETE',
          headers: {
            'Accept' : 'application/json',
            'Content-type' : 'application/json'
          }
        })
        .then(res => res.json())
        .then(data => {
          this.getMembers();
        })
      },
      validarMiembro(name){
        for (let i = 0; i < this.integrantesProyecto.length; i++) {
          const elemento = this.integrantesProyecto[i];
          const nElement = elemento.username;
          if(name==nElement){
            return true;
          }
        }
        return false;
      },
      addMember(){
        var find = false;
        if (this.validarMiembro(this.addUsername)){
          alert("El integrante ya se encuentra en el proyecto");
        }
        else{
          for (let i = 0; i < this.usuarios.length; i++) {
            const usuario = this.usuarios[i];
            if (usuario.username==this.addUsername) {
              find = true;
              this.newProjectxUse = new projectxuser(this.$route.params.idP,usuario._id);
              fetch('/api/projectsxusers',{
              method:"POST",
              body:JSON.stringify(this.newProjectxUse),
              headers:{
                'Accept' : 'application/json',
                'Content-type' : 'application/json'
                }
              })
                .then(res => res.json())
                .then(data => {
                  console.log(data);
                  this.getMembers();
                })
            }
          }
          if(!find){
            alert("El usuario no existe");
          }
        }
      },
      getUsers(){
        fetch('/api/users/')
        .then(res=>res.json())
        .then(data =>{
          this.usuarios=data;
          console.log(this.usuarios);
        })
      },
      getMembersPart2(mem){
        for (let index = 0; index < mem.length; index++) {
          const ele = mem[index];
          const element = ele.idU;
          console.log("IdP:",element);
          fetch('/api/users/'+element)
            .then(res => res.json())
            .then(data => {
              if (data!=undefined) {
                this.integrantesProyecto.push(data);
              }
          })    
      }
    },
      getMembers(){
          this.integrantesProyecto=[];
          var id = this.$route.params.idP;
          var mem = [];
          fetch('/api/projectsxusers/sp/' + id)
            .then(res => res.json())
            .then(data => {
                mem = data;
                this.getMembersPart2(mem)
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
a.back{
  cursor: pointer;
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
  margin: 25px;
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
</style>