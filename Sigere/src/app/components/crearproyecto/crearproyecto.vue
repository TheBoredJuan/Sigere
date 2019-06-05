<template>
	<div>
		<b-container fluid>
			<b-row>
				<div class="topBar">
      				<a class="back" @click="goBack()"><img src="../../assets/back.png" height="75" width="75"></a>
      				<a class = "Titulo">Crear Proyecto</a>
    			</div>
			</b-row>
			<b-row>
				<b-col></b-col>
				<b-col cols="9">
				<form>
    				<div class="newProj">
      					<a class= "Titulo"><font size="7" color="B7B7B7">Creación de proyecto</font></a>
					    <b-input v-model="project.name" class ="log" type="text" name="nombreProyecto" placeholder="Nombre del proyecto"></b-input>
				        <b-form-textarea v-model="project.description" type="text" placeholder="Descripción" rows="2" max-rows="5"></b-form-textarea>    
				      	<b-input v-model="project.client" class = "log" placeholder="Cliente"></b-input>
				      	<b-input v-model="project.date" class = "log" type="date"></b-input>
				      	<b-button class ="log" block variant="primary" @click="createProject()">Crear Proyecto</b-button>
 					</div> 
    			</form>
    			</b-col>
    			<b-col></b-col>
			</b-row>
		</b-container>
	</div>
</template>

<script>
class SRS{
    constructor(idP, title, proposit, scope, glosary, references, perspective, sysInterfaces, userInterfaces, hwInterfaces, swInterfaces, comInterfaces, userChar, productFunc, restrictions, dependencies, externalInterfaces, devRequirements, dbRequirements, designRestrictions){
        this.idP = idP;
        this.title = title;
        this.proposit = proposit;
        this.scope = scope; 
        this.glosary = glosary; 
        this.references = references; 
        this.perspective = perspective; 
        this.sysInterfaces = sysInterfaces;
        this.userInterfaces = userInterfaces; 
        this.hwInterfaces = hwInterfaces; 
        this.swInterfaces = swInterfaces; 
        this.comInterfaces = comInterfaces; 
        this.userChar = userChar;
        this.productFunc = productFunc;
        this.restrictions = restrictions;
        this.dependencies = dependencies;
        this.externalInterfaces = externalInterfaces;
        this.devRequirements = devRequirements;
        this.dbRequirements = dbRequirements;
        this.designRestrictions = designRestrictions;
    }
}
class project{
	constructor(idMaster,name,description,client,date){
		this.idMaster = idMaster;
		this.name = name;
		this.description = description;
		this.client = client;
		this.date = date;
	}
}
class projectxuser{
	constructor(idP,idU){
		this.idP = idP;
		this.idU = idU;
	}
}
export default {
	data(){
		return{
			project :  new project(),
			id : null,
			srs : new SRS()
		}
	},
	methods:{
		createProjectxUser(){
				this.newProjectxUse = new projectxuser(this.id,this.$route.params.idU);
				this.project = new project;
				fetch('/api/projectsxusers',{
				method:"POST",
				body:JSON.stringify(this.newProjectxUse),
				headers:{
					'Accept' : 'application/json',
					'Content-type' : 'application/json'
					}
				})
					.then(res => res.json())
					.then(data => console.log(data))
				this.project = new project;
		},
		createProjectSrs(){
			this.srs.idP = this.id;
			console.log("SRS: ",this.srs);
			fetch('/api/srs',{
				method:"POST",
				body:JSON.stringify(this.srs),
				headers:{
					'Accept' : 'application/json',
					'Content-type' : 'application/json'
					}
				})
					.then(res => res.json())
					.then(data => console.log(data))
					this.srs = new SRS;
		},
		createProject(){
			this.project.idMaster = this.$route.params.idU;
			fetch('/api/projects',{
				method:"POST",
				body:JSON.stringify(this.project),
				headers:{
					'Accept' : 'application/json',
					'Content-type' : 'application/json'
					}
				})
				.then(res => res.json())
				.then(data => {
					this.id = data;
					this.createProjectxUser();
					this.createProjectSrs();
					this.$router.push('/menu/'+this.$route.params.idU+'/proyectos');
				})
		},
		goBack(){
			this.$router.push('/menu/'+this.$route.params.idU+'/proyectos');
		}
	}
		
	
	
}
</script>


<style scoped>
.log{
	margin-top: 1rem;
	margin-bottom: 1rem;
}
.Agregar{
	padding: .5rem;
    position: relative;
    border-radius:50%;
}
.Subtitulo{
    font-size: 20px;
    color: #f5F7F8;
    position: relative;
}
.newProj{
	width: 100%;
	height: auto;
	margin-bottom: 50px;
	background-color: #555555;
	background-size: cover;
	padding : 4rem;
	top: 50px;
	text-align: center;
	position: relative; 	
	border-radius: 10px;
	box-shadow: 10px 10px 15px Gray;
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
.Titulo{
  font-family: 'Montserrat', sans-serif;
  font-size: 24px;
  margin-left:10px;
}
p{
  font-family: 'Montserrat', sans-serif;
}
</style>