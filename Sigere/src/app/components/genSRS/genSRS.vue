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
        <b-col cols="2">
         <div class="leftmenu">
          <b-button @click="goBack()" class="proyMenu"><img src="../../assets/borrador.png" height="55" width="55"></b-button>
          <b-button @click="goReq()" class="proyMenu"><img src="../../assets/req.png" height=55 width="55"></b-button>
          <b-button @click="$router.go()" class="proyMenu"><img src="../../assets/srs.png" height="55" width="55"></b-button>
          <b-button  @click="goImgD()" class="proyMenu"><img src="../../assets/diagrama.png" height="55" width="55"></b-button>
          <b-button class="proyMenu"><img src="../../assets/chat.png" height="55" width="55"></b-button>
          <b-button  @click="goMembers()" class="proyMenu"><img src="../../assets/añadir.png" height="55" width="55"></b-button>
          <b-button @click="goCalendar()" class="proyMenu"><img src="../../assets/calendario.png" height="55" width="55"></b-button>
         </div>
        </b-col>
        <b-col cols="6">
            <b-row>
            <p class ="Subtitulo">Generar SRS</p>
            </b-row>
            <div ref="content"> 
            <b-row>
                <b-col>
                    <b>Titulo</b><br>
                    {{projName}}<br>
                </b-col>
            </b-row>
            <b-row>
                <b-col>
                    <b>Miembros</b>
                    <ul>
                        <li v-for="(data, index) in members " :key='index'>
                            {{ data.name }} {{ data.lastname }}
                        </li>
                    </ul>
                </b-col>
            </b-row>
            <b-row>
                <b-col>
                    <b>Tabla de contenido</b>
                </b-col>
            </b-row>
            <b-row>
                <b-col>
                    <b>1. Introducción</b>
                </b-col>
            </b-row>
            <b-row>
                <b-col cols="1"></b-col>
                <b-col>1.1 Propósito</b-col>
            </b-row>
            <b-row>
                <b-col cols="1"></b-col>
                <b-col>1.2 Alcance</b-col>
            </b-row>
            <b-row>
                <b-col cols="1"></b-col>
                <b-col>1.3 Definiciones, siglas y abreviaturas</b-col>
            </b-row>
            <b-row>
                <b-col cols="1"></b-col>
                <b-col>1.4 Referencias</b-col>
            </b-row>
            <b-row>
                <b-col><b>2. Descripción global</b></b-col>
            </b-row>
            <b-row>
                <b-col cols="1"></b-col>
                <b-col>2.1 Perspectiva del producto</b-col>
            </b-row>
            <b-row>
                <b-col cols="2"></b-col>
                <b-col>2.1.1 Interfaces del sistema</b-col>
            </b-row>
            <b-row>
                <b-col cols="2"></b-col>
                <b-col>2.1.2 Interfaces con el usuario</b-col>
            </b-row>
            <b-row>
                <b-col cols="2"></b-col>
                <b-col>2.1.3 Interfaces con el hardware</b-col>
            </b-row>
            <b-row>
                <b-col cols="2"></b-col>
                <b-col>2.1.4 Interfaces del sistema</b-col>
            </b-row>
            <b-row>
                <b-col cols="2"></b-col>
                <b-col>2.1.5 Interfaces de comunicación</b-col>
            </b-row>
            <b-row>
                <b-col cols="1"></b-col>
                <b-col>2.2 Caracteristicas del usuario</b-col>
            </b-row>
            <b-row>
                <b-col cols="1"></b-col>
                <b-col>2.3 Funciones del producto</b-col>
            </b-row>
            <b-row>
                <b-col cols="1"></b-col>
                <b-col>2.4 Restricciones</b-col>
            </b-row>
            <b-row>
                <b-col cols="1"></b-col>
                <b-col>2.5 Supociciones y dependencias</b-col>
            </b-row>
            <b-row>
                <b-col><b>3. Requisitos específicos</b></b-col>
            </b-row>
            <b-row>
                <b-col cols="1"></b-col>
                <b-col>3.1 Interfaces externas</b-col>
            </b-row>
            <b-row>
                <b-col cols="1"></b-col>
                <b-col>3.2 Requisitos funcionales</b-col>
            </b-row>
            <b-row>
                <b-col cols="1"></b-col>
                <b-col>3.3 Requerimientos de desarrollo</b-col>
            </b-row>
            <b-row>
                <b-col cols="1"></b-col>
                <b-col>3.4 Requerimientos de la base de datos</b-col>
            </b-row>
            <b-row>
                <b-col cols="1"></b-col>
                <b-col>3.5 Restricciones del diseño</b-col>
            </b-row>
            <b-row>
                <b-col cols="1"></b-col>
                <b-col>3.6 Requisitos no funcionales</b-col>
            </b-row>
            <b-row>
                <b-col>
                    <b>1.1 Propósito</b><br>
                    {{ infoSRS.proposit }}
                </b-col>
            </b-row>
            <b-row>
                <b-col>
                    <b>1.2 Alcance</b><br>
                    {{ infoSRS.scope }}
                </b-col>
            </b-row>
            <b-row>
                <b-col>
                    <b>1.3 Definciones, siglas y abreviaciones</b><br>
                    {{ infoSRS.glosary }}
                </b-col>
            </b-row>
            <b-row>
                <b-col>
                    <b>1.4 Referencias</b><br>
                    {{ infoSRS.references }}
                </b-col>
            </b-row>
            <b-row>
                <b-col>
                    <b>2. Descripción global</b><br>
                </b-col>
            </b-row>
            <b-row>
                <b-col>
                    <b>2.1 Perspectiva del producto</b><br>
                    {{ infoSRS.perspective }}
                </b-col>
            </b-row>
            <b-row>
                <b-col>
                    <b>2.1.1 Interfaces del sistema</b><br>
                    {{ infoSRS.sysInterfaces }}
                </b-col>
            </b-row>
            <b-row>
                <b-col>
                    <b>2.1.2 Interfaces con el usuario</b><br>
                    {{ infoSRS.userInterfaces }}
                </b-col>
            </b-row>
            <b-row>
                <b-col>
                    <b>2.1.3 Interfaces con el hardware</b><br>
                    {{ infoSRS.hwInterfaces }}
                </b-col>
            </b-row>
            <b-row>
                <b-col>
                    <b>2.1.4 Interfaces con el software</b><br>
                    {{ infoSRS.swInterfaces }}
                </b-col>
            </b-row>
            <b-row>
                <b-col>
                    <b>2.1.5 Interfaces de comunicación</b><br>
                    {{ infoSRS.comInterfaces }}
                </b-col>
            </b-row>
            <b-row>
                <b-col>
                    <b>2.2 Caracteristicas del usuario</b><br>
                    {{ infoSRS.userChar }}
                </b-col>
            </b-row>
            <b-row>
                <b-col>
                    <b>2.3 Funciones del producto</b><br>
                    {{ infoSRS.productFunc }}
                </b-col>
            </b-row>
            <b-row>
                <b-col>
                    <b>2.4 Restricciones</b><br>
                    {{ infoSRS.restrictions }}
                </b-col>
            </b-row>
            <b-row>
                <b-col>
                    <b>2.5 Suposiciones y dependencias</b><br>
                    {{ infoSRS.dependencies }}
                </b-col>
            </b-row>
            <b-row>
                <b-col>
                    <b>3. Requisitos específicos</b><br>
                </b-col>
            </b-row>
            <b-row>
                <b-col>
                    <b>3.1 Interfaces externas</b><br>
                    {{ infoSRS.externalInterfaces }}
                </b-col>
            </b-row>
            <b-row>
                <b-col>
                    <b>3.2 Requisitos funcionales</b><br>
                    
                        <ul v-for="(data, index) in espReq " :key='index'>
                            {{ data.specification }}<br>Prioridad:{{data.priority}}<br>Id:{{data.id}}<br>Descripción:{{data.description}}<br>Autor:{{data.author}}<br>Fuente:{{data.source}}<br>Fecha de creación: {{data.creationDate}}<br>Precondiciones:{{data.preconditions}}<br>Postcondiciones:{{data.postconditions}}<br>Flujo de eventos:{{data.flow}}<br>Flujo alterno:{{data.altFlow}}<br>Excepciones:{{data.exceptions}}
                        </ul>
                    
                </b-col>
            </b-row>
            <b-row>
                <b-col>
                    <b>3.3 Requerimientos de desarrollo</b><br>
                    {{ infoSRS.devRequirements }}
                </b-col>
            </b-row>
            <b-row>
                <b-col>
                    <b>3.4 Requerimientos de la base de datos</b><br>
                    {{ infoSRS.dbRequirements }}
                </b-col>
            </b-row>
            <b-row>
                <b-col>
                    <b>3.5 Restricciones del diseño</b><br>
                    {{ infoSRS.designRestrictions }}
                </b-col>
            </b-row>
            <b-row>
                <b-col>
                    <b>3.6 Requisitos no funcionales</b><br>
                    <ul>
                        <ul v-for="(data, index) in nfReq " :key='index'>
                            <br>{{data.type}}-{{ data.number }}<br>Categoría: {{data.category}}<br>Descripción: {{data.description}}<br>
                        </ul>
                    </ul>
                </b-col>
            </b-row>
            <b-row>
                <br><br>
                <b-col cols="4"></b-col>
                <b-col>
                    <b-button style="margin-bottom:5rem" @click="generateSRS" block variant="primary">Generar</b-button>
                </b-col>
                <b-col cols="4"></b-col>
            </b-row>
            </div>
        </b-col>
        <b-col cols="2">
            <p class="Subtitulo">Editar información</p>
            <b-button @click="goEditSRS()" variant="primary" style="margin-left:40px">Editar</b-button>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import jsPDF from 'jspdf';
//Declaration of SRS class that contains aditional information required to generate the srs 
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
        projName: '',
        currentUser: '',
        infoSRS : new SRS(),
        espReq : [],
        nfReq : [],
        members : []
    }
  },
  created(){
      this.getProjectName();
      this.getCurrentUser();
      this.getInfoSRS();
      this.getEspReq();
      this.getNfReq();
      this.getMembers();
  },
  methods: {
      getInfoSRS(){
          var id = this.$route.params.idP;
          fetch('/api/srs/sp/' + id)
            .then(res => res.json())
            .then(data => {
                var temp = data[0];
                this.infoSRS = new SRS(temp.idP, temp.proposit, temp.scope, temp.glosary, temp.references, temp.perspective, temp.sysInterfaces, temp.auserInterfaces, temp.hwInterfaces, temp.swInterfaces, temp.comInterfaces, temp.userChar, temp.productFunc, temp.restrictions, temp.dependencies, temp.externalInterfaces, temp.devRequirements, temp.dbRequirements, temp.designRestrictions);
            });
      },
      getEspReq(){
          var id = this.$route.params.idP;
          fetch('/api/EspRequirements/sp/' + id)
            .then(res => res.json())
			.then(data =>{
                this.espReq = data;
            });
      },
      getNfReq(){
          var id = this.$route.params.idP;
          fetch('/api/requirements/sp/rnf/' + id)
            .then(res => res.json())
            .then(data => {
                this.nfReq = data;
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
              this.members.push(data);
            }
          })    
      }
    },
      getMembers(){
          this.members=[];
          var id = this.$route.params.idP;
          var mem = [];
          fetch('/api/projectsxusers/sp/' + id)
            .then(res => res.json())
            .then(data => {
                mem = data;
                this.getMembersPart2(mem)
            })
      },
      generateSRS(){
          const doc = new jsPDF();
          const contentHtml = this.$refs.content.innerHTML;
          doc.fromHTML(contentHtml, 15, 15, {
            width: 170
            });
          doc.save("srs.pdf");
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
    goReq(){
        this.$router.push('/menu/'+this.$route.params.idU+'/proyecto/'+this.$route.params.idP+'/requisitos');
    },
    goEditSRS(){
        this.$router.push('/menu/'+this.$route.params.idU+'/proyecto/'+this.$route.params.idP+'/editSRS');
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
  height: 570px;
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