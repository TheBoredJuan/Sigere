<!-- HTML section of the file -->
<template>
	<div>
		<b-container fluid>
			<b-row>
	    		<div class="topBar">
	      			<a class="back" @click="goBack()"><img src="../../assets/back.png" height="75" width="75"></a>
	      			<a class = "Title">Editar especificación</a>
	   			 </div>
  			</b-row>
  			<b-row>
        		<b-col cols="2">
        		</b-col>
        		<b-col cols="9">
          			<div class="newEsp">
          				<form @submit.prevent="editSpecification">
          				<b-row>
                            <b-col>
                                Especificación
                                <b-input type="text" v-model="specification.specification"></b-input>
                            </b-col>
          					<b-col>
                                Id
                                <b-input typw="text" v-model="specification.id"></b-input>
		      				</b-col>
                            <b-col>
                                Prioridad
                                <b-form-select v-model="specification.priority" :options="optionsPriority"></b-form-select>
		      				</b-col>	
          				</b-row>
          				<b-row>
          					<b-col>
                                Descripción
                                <b-form-textarea v-model="specification.description" type="text" rows="2" max-rows="10"></b-form-textarea>
				      		</b-col>
          				</b-row>
                        <b-row>
                            <b-col>
                                Autor
                                <b-input type="text" v-model="specification.author"></b-input>
                            </b-col>
                            <b-col>
                                Fecha creación
                                <b-input type="date" v-model="specification.creationDate"></b-input>
                            </b-col>
                        </b-row>
                        <b-row>
                            <b-col>
                                Fuente
                                <b-input type="text" v-model="specification.source"></b-input>
                            </b-col>
                        </b-row>
                        <b-row>
                            <b-col>
                                Precondiciones
                                <b-input type="text" v-model="specification.preconditions"></b-input>
                            </b-col>
                        </b-row>
                        <b-row>
                            <b-col>
                                Postcondciones
                                <b-input type="text" v-model="specification.postconditions"></b-input>
                            </b-col>
                        </b-row>
                        <b-row>
                            <b-col>
                                Flujo normal de eventos
                                <b-form-textarea v-model="specification.flow" type="text" rows="2" max-rows="10"></b-form-textarea>
                            </b-col>
                        </b-row>
                        <b-row>
                            <b-col>
                                Flujo alterno
                                <b-form-textarea v-model="specification.altFlow" type="text" rows="2" max-rows="10"></b-form-textarea>
                            </b-col>
                        </b-row>
                        <b-row>
                            <b-col>
                                Excepciones
                                <b-form-textarea v-model="specification.exceptions" type="text" rows="2" max-rows="10"></b-form-textarea>
                            </b-col>
                        </b-row>
          				<br>
          				<b-row>
          					<b-col cols="4"></b-col>
          					<b-col>
          						<b-button type="submit" block variant="primary">Editar especificación</b-button>
          					</b-col>
          					<b-col cols="4"></b-col>
           				</b-row>
           				</form>
          			</div>
        		</b-col>
      		</b-row>
		</b-container>
	</div>
</template>

<!-- Js section of the file -->
<script>
    //Declaration of the requirement class to be later stored in the DB
    class specification {
        constructor(specification, priority, id, description, author, source, creationDate, actors, preconditions, postconditions, flow, altFlow, exceptions) {
            this.specification = specification;
            this.priority = priority;
            this.id = id;
            this.description = description;
            this.author = author;
            this.source = source;
            this.creationDate = creationDate;
            this.actors = actors;
            this.preconditions = preconditions;
            this.postconditions = postconditions;
            this.flow = flow;
            this.altFlow = altFlow;
            this.exceptions = exceptions;
        }
    }
	export default {
	  data() {
	    return{
            //The specification to be edited
            specification : new specification(),
            optionsPriority : [
                {value: null, text: 'Seleccionar prioridad'},
                {value: '1', text: '1'},
                {value: '2', text: '2'},
                {value: '3', text: '3'},
                {value: '4', text: '4'},
                {value: '5', text: '5'}
                  
            ]
	    }
      },
      created(){
          this.getSpecification();
      },
	  methods: {
        editSpecification(){
            var id= this.$route.params.id;
            fetch('/api/espRequirements/' + id,{
                method: 'PUT',
                body: JSON.stringify(this.specification),
                headers:{
                    'Accept' : 'application/json',
                    'Content-type' : 'application/json'
                }
            })
            .then(res => res.json())
            .then(this.$router.push('/menu/'+this.$route.params.idU+'/proyecto/'+this.$route.params.idP+'/requisitos'));   
        },
		getSpecification(){
            var id = this.$route.params.id;
			fetch('/api/espRequirements/' + id)
				.then(res => res.json())
				.then(data =>{
                    this.specification = new specification(data.specification,data.priority,data.id,data.description,data.author,data.source,data.creationDate,data.actors,data.preconditions,data.postconditions,data.flow,data.altFlow,data.exceptions);    
                });
        },
        goBack(){
            this.$router.push('/menu/'+this.$route.params.idU+'/proyecto/'+this.$route.params.idP+'/requisitos'); 
        }
    }
    }
</script>

<!-- CSS section of the file -->
<style scoped>
.Title{
  font-family: 'Montserrat', sans-serif;
  font-size: 24px;
  margin-left:10px;
}
.newEsp{
	padding: 2rem;
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
.leftMenu{
  top: 50px;
  position: relative;
  width: 75px;
  height: 100%;
  left: -15px; 
  background-color: #555555;
  border-radius: 0px 15px 15px 0px;
}
.proyMenu{
  outline:none;
  background-color:Transparent;
  border: 0px;
  position:relative;
  margin-top:5px;
  margin-bottom:5px;
  cursor:pointer;
  padding:.5rem;
}
.proyMenu:hover{
  background-color:lightgray;
  width: 75px;
  height: 75px;
}
</style>