<template>
  <div>
  <b-container fluid>
    <b-row>
    <div class="topBar">
      <a class="back" @click="$router.push('/menu/proyectos')"><img src="../../assets/back.png" height="75" width="75"></a>
      <a class = "Titulo">{{ projName }}</a>
    </div>
  </b-row>
      <b-row>
        <b-col cols="2">
        </b-col>
        <b-col cols="8">
          <div style="padding:2rem">
            <p class="Titulo" style="font-size:22px">Crear evento</p>
              <form @submit.prevent="addEvent">
                  Nombre
                  <b-input v-model="event.name" type="text"></b-input>
                  Descripción
                  <b-form-textarea v-model="event.description" type="text" rows="2" max-rows="5"></b-form-textarea>
                  Fecha
                  <b-input v-model="event.date" type="date"></b-input>
                  <br><br>
                  <b-row>
                      <b-col></b-col>
                      <b-col>
                        <b-button block variant="primary" type="submit">Crear evento</b-button>
                      </b-col>
                      <b-col></b-col>
                  </b-row>
              </form>
          </div>
        </b-col>
        <b-col>
          
        </b-col>        
      </b-row>
    </b-container>
  </div>
</template>

<script>
class event{
  constructor(idP,name,description,date){
    this.idP = idP;
    this.name = name;
    this.description = description;
    this.date = date;
  }
}
export default {
  data() {
    return{
      projName: '',
      event : new event()
    }
  },
  created(){
      this.getProjectName();
  },
  methods:{
    getProjectName(){
			var id = this.$route.params.idP;
			fetch('/api/projects/' + id)
				.then(res => res.json())
				.then(data =>{
          this.projName = data.name;    
        });
    },
    addEvent(){
      this.event.idP = this.$route.params.idP;
      fetch('/api/events',{
				method:"POST",
				body:JSON.stringify(this.event),
				headers:{
					'Accept' : 'application/json',
					'Content-type' : 'application/json'
					}
				})
					.then(res => res.json())
					.then(data => console.log(data))
        this.event = new event;
        this.$router.push('/menu/'+this.$route.params.idU+'/proyecto/'+this.$route.params.idP+'/calendario');
    }
  }
}
</script>

<style scoped>
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
</style>