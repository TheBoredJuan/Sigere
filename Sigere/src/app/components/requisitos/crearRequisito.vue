<template>
	<div>
		<b-container fluid>
			<b-row>
	    		<div class="topBar">
	      			<a class="back" @click="goBack()"><img src="../../assets/back.png" height="75" width="75"></a>
	      			<a class = "Titulo">{{ projName }}</a>
	   			 </div>
  			</b-row>
  			<b-row>
        		<b-col cols="2">
        		</b-col>
        		<b-col cols="9">
          			<div class="newReq">
          				<p style="font-size: 24px">Nuevo Requisito</p>
          				<form @submit.prevent="addRequirement">
          				<b-row>
          					<b-col>
			      				<b-form-group>
			      					Tipo
			      					<b-form-select v-model="requirement.type" :options="optionsType"></b-form-select>
			      				</b-form-group>
		      				</b-col>
		      				<b-col>
		      					<b-form-group>
		      						Número
			      					<b-input v-model="requirement.number" type="number" placeholder="Número"></b-input>
			      				</b-form-group>
		      				</b-col>
		      				<b-col>
		      					<b-form-group>
		      						Categoría
			      					<b-form-select v-model="requirement.category" :options="optionsCategory"></b-form-select>
			      				</b-form-group>
		      				</b-col>
          				</b-row>
          				<b-row>
          					<b-col>
	          					<b-form-group>
	          						Descripción
				      				<b-form-textarea v-model="requirement.description" type="text" rows="6" max-rows="10"></b-form-textarea>
				      			</b-form-group>
				      		</b-col>
          				</b-row>
          				<br>
          				<b-row>
          					<b-col cols="4"></b-col>
          					<b-col>
          						<b-button type="submit" block variant="primary">Crear</b-button>
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

<script>
	class requirement {
		constructor(type, idP , number, category, description){
			this.type = type;
			this.idP = idP;
			this.number = number;
			this.category = category;
			this.description = description;
		}
	}
	export default {
	  data() {
	    return{
	    	requirement: new requirement(),
	      projName : "",
	        optionsType: [
	          { value: null, text: 'Seleccionar tipo' },
	          { value: 'RF', text: 'Funcional' },
	          { value: 'RNF', text: 'No funcional' }
	        ],
	      	optionsCategory: [
	      		{value: null, text: 'Seleccionar categoría'},
	      		{value: '1', text: '1'}
	      	]
	    }
		},
		created(){
			this.getProjectName();
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
	  	addRequirement(){
				this.requirement.idP = this.$route.params.idP
				fetch('/api/requirements',{
					method: 'POST',
					body: JSON.stringify(this.requirement),
					headers:{
						'Accept' : 'application/json',
						'Content-type' : 'application/json'
					}
				})
				.then(res => res.json())
				.then(data => console.log(data))
				console.log(this.requirement)
				this.requirement = new requirement;
				this.$router.push('/menu/'+this.$route.params.idU+'/proyecto/'+this.$route.params.idP+'/requisitos');

		},
		getRequirements(){
			fetch('/api/requirements')
				.then(res => res.json())
				.then(data => {
          this.userList = data;
        })
		},	
		goBack(){
			this.$router.push('/menu/'+this.$route.params.idU+'/proyecto/'+this.$route.params.idP+'/requisitos');
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
.newReq{
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
a.back{
	cursor: pointer;
}
</style>