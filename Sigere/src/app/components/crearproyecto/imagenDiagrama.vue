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
        <b-col cols="3">
         <div class="leftmenu">
          <b-button @click="goBack()" class="proyMenu"><img src="../../assets/borrador.png" height="55" width="55"></b-button>
          <b-button @click="goRequirements()" class="proyMenu"><img src="../../assets/req.png" height=55 width="55"></b-button>
          <b-button @click="goSRS()" class="proyMenu"><img src="../../assets/srs.png" height="55" width="55"></b-button>
          <b-button @click="$router.go()" class="proyMenu"><img src="../../assets/diagrama.png" height="55" width="55"></b-button>
          <b-button class="proyMenu"><img src="../../assets/chat.png" height="55" width="55"></b-button>
          <b-button @click="goMembers()" class="proyMenu"><img src="../../assets/añadir.png" height="55" width="55"></b-button>
          <b-button @click="goCalendar()" class="proyMenu"><img src="../../assets/calendario.png" height="55" width="55"></b-button>
         </div>
        </b-col>
        <b-col cols="6">
          <b-form>
            <p class ="Subtitulo">Ajuntar diagrama</p>
            <br><p class = "ing"> Imágen:</p>
            <b-form-file placeholder="" browse-text="Examinar..."></b-form-file>
             <b-form-select style="margin-top:20px" v-model="selected" :options="options"></b-form-select>
            <b-button disabled class="subm" block variant="primary" type="submit">Cargar</b-button>
          </b-form>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  data() {
    return{
      projName : '',
      currentUser: '',
      selected: null,
        options: [
          { value: null, text: 'Seleccionar tipo' },
          { value: 'a', text: 'Diagrama de contexto' },
          { value: 'b', text: 'Diagrama de secuencia' },
          { value: 'c', text: 'Casos de uso' },
          { value: 'd', text: 'Diagrama de actividades'}
        ]
    }
  },
  created(){
    this.getProjectName();
    this.getCurrentUser();
  },
  methods : {
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
</style>