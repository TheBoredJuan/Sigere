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
        <b-col cols="8">
            <div class="infoSrs">
            <form @submit.prevent="editSRS">
            <b-row>
            <p class ="Subtitulo">Editar SRS</p>
            </b-row>
            <b-row>
            </b-row>
            <b-row>
                <b-col>
                    <b>Propósito</b><br>
                    <b-form-textarea v-model="infoSRS.proposit" type="text" rows="2" max-rows="10"></b-form-textarea>
                </b-col>
            </b-row>
            <b-row>
                <b-col>
                    <b>Alcance</b><br>
                    <b-form-textarea v-model="infoSRS.scope" type="text" rows="2" max-rows="10"></b-form-textarea>
                </b-col>
            </b-row>
            <b-row>
                <b-col>
                    <b>Definiciones, siglas y abreviaciones</b><br>
                    <b-form-textarea v-model="infoSRS.glosary" type="text" rows="2" max-rows="10"></b-form-textarea>
                </b-col>
            </b-row>
            <b-row>
                <b-col>
                    <b>Referencias</b><br>
                    <b-form-textarea v-model="infoSRS.references" type="text" rows="2" max-rows="10"></b-form-textarea>
                </b-col>
            </b-row>
            <b-row>
                <b-col>
                    <b>Perspectiva del producto</b><br>
                    <b-form-textarea v-model="infoSRS.perspective" type="text" rows="2" max-rows="10"></b-form-textarea>
                </b-col>
            </b-row>
            <b-row>
                <b-col>
                    <b>Interfaces del sistema</b><br>
                    <b-form-textarea v-model="infoSRS.sysInterfaces" type="text" rows="2" max-rows="10"></b-form-textarea>
                </b-col>
            </b-row>
            <b-row>
                <b-col>
                    <b>Interfaces con el usuario</b><br>
                    <b-form-textarea v-model="infoSRS.userInterfaces" type="text" rows="2" max-rows="10"></b-form-textarea>
                </b-col>
            </b-row>
            <b-row>
                <b-col>
                    <b>Interfaces con el hardware</b><br>
                    <b-form-textarea v-model="infoSRS.hwInterfaces" type="text" rows="2" max-rows="10"></b-form-textarea>
                </b-col>
            </b-row>
            <b-row>
                <b-col>
                    <b>Interfaces con el software</b><br>
                    <b-form-textarea v-model="infoSRS.swInterfaces" type="text" rows="2" max-rows="10"></b-form-textarea>
                </b-col>
            </b-row>
            <b-row>
                <b-col>
                    <b>Interfaces de comunicación</b><br>
                    <b-form-textarea v-model="infoSRS.comInterfaces" type="text" rows="2" max-rows="10"></b-form-textarea>
                </b-col>
            </b-row>
            <b-row>
                <b-col>
                    <b>Caracteristicas del usuario</b><br>
                    <b-form-textarea v-model="infoSRS.userChar" type="text" rows="2" max-rows="10"></b-form-textarea>
                </b-col>
            </b-row>
            <b-row>
                <b-col>
                    <b>Funciones del producto</b><br>
                    <b-form-textarea v-model="infoSRS.productFunc" type="text" rows="2" max-rows="10"></b-form-textarea>
                </b-col>
            </b-row>
            <b-row>
                <b-col>
                    <b>Restricciones</b><br>
                    <b-form-textarea v-model="infoSRS.restrictions" type="text" rows="2" max-rows="10"></b-form-textarea>
                </b-col>
            </b-row>
            <b-row>
                <b-col>
                    <b>Suposiciones y dependencias</b><br>
                    <b-form-textarea v-model="infoSRS.dependencies" type="text" rows="2" max-rows="10"></b-form-textarea>
                </b-col>
            </b-row>
            <b-row>
                <b-col>
                    <b>Interfaces externas</b><br>
                    <b-form-textarea v-model="infoSRS.externalInterfaces" type="text" rows="2" max-rows="10"></b-form-textarea>
                </b-col>
            </b-row>
            <b-row>
                <b-col>
                    <b>Requisitos de desarrollo</b><br>
                    <b-form-textarea v-model="infoSRS.devRequirements" type="text" rows="2" max-rows="10"></b-form-textarea>
                </b-col>
            </b-row>
            <b-row>
                <b-col>
                    <b>Requerimientos de la base de datos</b><br>
                    <b-form-textarea v-model="infoSRS.dbRequirements" type="text" rows="2" max-rows="10"></b-form-textarea>
                </b-col>
            </b-row>
            <b-row>
                <b-col>
                    <b>Restricciones del diseño</b><br>
                    <b-form-textarea v-model="infoSRS.designRestrictions" type="text" rows="2" max-rows="10"></b-form-textarea>
                </b-col>
            </b-row>
            <b-row>
                <b-col></b-col>
                <b-col>
                    <b-button type="submit" class="editSrs" block variant="primary">Editar</b-button>
                </b-col>
                <b-col></b-col>
            </b-row>
            </form>
            </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
//Declaration of SRS that contains aditional information required to generate the srs 
class SRS{
    constructor(idP, proposit, scope, glosary, references, perspective, sysInterfaces, userInterfaces, hwInterfaces, swInterfaces, comInterfaces, userChar, productFunc, restrictions, dependencies, externalInterfaces, devRequirements, dbRequirements, designRestrictions){
        this.idP = idP;
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

export default {
  data() {
    return{
      infoSRS : new SRS(),
      infoIp : '',
      projName : ''
    }
  },
  created(){
      this.getInfoSRS();
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
      getInfoSRS(){
        fetch('/api/srs/sp/'+this.$route.params.idP)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                this.infoIp =data[0]._id;
                var temp = data[0];
                this.infoSRS = new SRS(temp.idP, temp.proposit, temp.scope, temp.glosary, temp.references, temp.perspective, temp.sysInterfaces, temp.auserInterfaces, temp.hwInterfaces, temp.swInterfaces, temp.comInterfaces, temp.userChar, temp.productFunc, temp.restrictions, temp.dependencies, temp.externalInterfaces, temp.devRequirements, temp.dbRequirements, temp.designRestrictions);
                console.log(this.infoIp);
            });
      },
      editSRS(){
          this.infoSRS.idP = this.$route.params.idP;
          console.log("Help",this.infoIp);
          fetch('/api/srs/' + this.infoIp,{
              method: 'PUT',
              body: JSON.stringify(this.infoSRS),
              headers:{
                  'Accept' : 'application/json',
                  'Content-type' : 'application/json'
               }
            })
            .then(res => res.json())
            .then(this.$router.push('/menu/'+this.$route.params.idU+'/proyecto/'+this.$route.params.idP+'/genSRS'));   
        },
        goBack(){
            this.$router.push('/menu/'+this.$route.params.idU+'/proyecto/'+this.$route.params.idP+'/genSRS');
        }	
  }
}
</script>

<style scoped>
.editSrs{
    margin: 2rem;
    margin-bottom: 5rem;
}
.infoSrs{
}
.Titulo{
  font-family: 'Montserrat', sans-serif;
  font-size: 24px;
  margin-left:10px;
}
p{
  font-family: 'Montserrat', sans-serif;
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