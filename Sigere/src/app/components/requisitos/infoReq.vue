<!-- HTML section of the file -->
<template>
	<div>
		<b-container fluid>
			<b-row>
	    		<div class="topBar">
	      			<a class="back" @click="goBack()"><img src="../../assets/back.png" height="75" width="75"></a>
      				<a class = "Title">{{ projName }}</a>
	   			 </div>
  			</b-row>
  			<b-row>
        		<b-col cols="2">
        		</b-col>
        		<b-col cols="9">
          			<div class="showReq">
          				<p style="font-size: 24px">Definición de Requisito</p>
          				<b-row>
          					<b-col>
                                <b>Tipo</b><br>
                                {{ requirement.type }}
		      				</b-col>
		      				<b-col>
                                <b>Número</b><br>
                                {{ requirement.number }}
		      				</b-col>
		      				<b-col>
                                <b>Categoría</b><br>
                                {{ requirement.category }}
		      				</b-col>
          				</b-row>
          				<b-row>
          					<b-col>
	          					<b-form-group>
	          						<b>Descripción</b><br>
                                    {{ requirement.description }}
				      			</b-form-group>
				      		</b-col>
          				</b-row>
          				<br>
          				<b-row>
          					<b-col cols="4"></b-col>
          					<b-col>
          						<b-button @click="specifyRequirement()" type="submit" block variant="primary">Especificar</b-button>
          					</b-col>
          					<b-col cols="4"></b-col>
           				</b-row>
          			</div>
        		</b-col>
      		</b-row>
		</b-container>
	</div>
</template>

<!-- Js section of the file -->
<script>
	//Declaration of the requirement class which contains a type, number, category and a description 
	class requirement {
		constructor(type, number, category, description){
			this.type = type;
			this.number = number;
			this.category = category;
			this.description = description;
		}
	}
	export default {
	  data() {
	    return{
            projName: '',
						requirement: new requirement(),
						idReq:null
	    }
		},
		created(){
					this.getRequirement()
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
		getRequirement(){
						var id = this.$route.params.id;
						this.idReq = id;
            fetch('/api/requirements/' + id)
                .then(res => res.json())
                .then(data => {
                    this.requirement = new requirement(data.type,data.number,data.category,data.description);
                });
        },
    		specifyRequirement(){
						if (this.requirement.type !="RNF"){
            this.$router.push('/menu/'+this.$route.params.idU+'/proyecto/'+this.$route.params.idP+'/requisitos/crearEsp/'+this.idReq)
						}
						else{
							alert("Los requisitos no funcionales no se especifican")
						}
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
.showReq{
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
a.back{
	cursor:pointer;
}
</style>