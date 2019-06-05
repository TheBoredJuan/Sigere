import Vue from 'vue';
import Router from 'vue-router';
import Login from '../components/login/login'
import Registro from '../components/registro/register'
import Perfil from '../components/perfil/perfil'
import CrearProyecto from '../components/crearproyecto/crearproyecto'
import inicioProyectos from '../components/inicioProyectos/inicioProyectos.vue'
import imagenDiagrama from '../components/crearproyecto/imagenDiagrama.vue'
import Integrantes from '../components/crearproyecto/Integrantes.vue'
import bienvProyecto from '../components/crearproyecto/welcomeproy.vue'
import inicioRequisitos from '../components/requisitos/inicioRequisitos.vue'
import recuperar from '../components/login/recuperar.vue'
import registrar from '../components/registro/registrar.vue'
import papelera from '../components/crearproyecto/papeleraProyectos.vue'
import createRequirement from '../components/requisitos/crearRequisito.vue'
import editRequirement from '../components/requisitos/editarRequisito.vue'
import infoReq from '../components/requisitos/infoReq.vue'
import createEsp from '../components/requisitos/crearEsp.vue'
import editSpec from '../components/requisitos/editarEsp.vue'
import genSRS from '../components/genSRS/genSRS.vue'
import editSRS from '../components/genSRS/editSRS.vue'
import calendar from '../components/calendario/calendario.vue'
import createEvent from '../components/calendario/createEvent.vue'
import information from '../components/inicioProyectos/informacion.vue'

Vue.use(Router)

export default new Router({
	routes: [
		{ 
			path: '/',
			name: 'home',
			component: Login
		},
		{
			path: '/home/registro',
			name: 'registro',
			component: Registro
		},
		{
			path: '/menu/:idU/perfil',
			name: 'perfil',
			component: Perfil
		},
		{
			path: '/menu/:idU/informacion',
			name: 'informacion',
			component: information
		},
		{
			path: '/menu/:idU/proyectos/crearProyecto',
			name: 'crearProyecto',
			component: CrearProyecto
		},
		{
			path: '/menu/:idU/proyectos/',
			name: 'inicioProyectos',
			component: inicioProyectos
		},
		{
			path: '/menu/:idU/proyecto/:idP/imagenDiagrama',
			name: 'imagenDiagrama',
			component: imagenDiagrama
		},
		{
			path: '/menu/:idU/proyecto/:idP/integrantes',
			name: 'Integrantes',
			component: Integrantes
		},
		{
			path: '/menu/:idU/proyecto/:idP/inicio',
			name: 'Bienvenida',
			component: bienvProyecto
		},
		{
			path: '/menu/:idU/proyecto/:idP/requisitos',
			name: 'Requisitos',
			component: inicioRequisitos
		},
		{
			path: '/recuperar',
			name: 'Recuperar',
			component: recuperar
		},
		{
			path: '/menu/:idU/registrar',
			name: 'Registrar',
			component: registrar
		},
		{
			path: '/menu/:idU/proyectos/papelera',
			name: 'Papelera',
			component: papelera
		},
		{
			path: '/menu/:idU/proyecto/:idP/requisitos/nuevo',
			name: 'NuevoReq',
			component: createRequirement
		},
		{
			path: '/menu/:idU/proyecto/:idP/requisitos/editar/:id',
			name: 'EditarReq',
			component: editRequirement,
		},
		{
			path: '/menu/:idU/proyecto/:idP/requisitos/info/:id',
			name: 'InfoReq',
			component: infoReq
		},
		{
			path: '/menu/:idU/proyecto/:idP/requisitos/crearEsp/:id',
			name: 'CrearEspReq',
			component: createEsp
		},
		{
			path: '/menu/:idU/proyecto/:idP/requisitos/editarEsp/:id',
			name: 'EditEspReq',
			component: editSpec
		},
		{
			path: '/menu/:idU/proyecto/:idP/genSRS',
			name: 'GenSRS',
			component: genSRS
		},
		{
			path: '/menu/:idU/proyecto/:idP/editSRS',
			name: 'EditSRS',
			component: editSRS
		},
		{
			path: '/menu/:idU/proyecto/:idP/calendario',
			name: 'Calendar',
			component: calendar
		},
		{
			path: '/menu/:idU/proyecto/:idP/crearEvento',
			name: 'CreateEvent',
			component: createEvent
		}

	]
})