import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    jobs: [
      {
        id: 1,
        title: "Desarrollo Web",
        date: "10 horas",
        applicant: 3,
        description: "Se busca desarrollador web para constantes mini proyectos. generalmente son aplicaciones web, paginas web, landing, Se busca desarrollador web para constantes mini proyectos. generalmente son aplicaciones web, paginas web, landing...",
        price: 150,
        company: "Google",
        companyImg: "https://randomuser.me/api/portraits/women/26.jpg",
        status: "Activa",
      },
      {
        id: 2,
        title: "Auxiliar de farmacia",
        date: "2 Dias",
        applicant: 22,
        description: "Somos una Prestigiosa empresa del ramo Salud, se encuentra en la búsqueda de personal capacitado, con amplio conocimientos , pro-activo, responsable y puntual para desempeñarse como Auxiliar de Farmacia. Son funciones relevantes del cargo: - Vigilar el periodo de vigencia de los medicamentos próximos a vencer y reportándolos oportunamente al jefe inmediato. ",
        price: 20,
        company: "Victoria C.A.",
        companyImg: "https://randomuser.me/api/portraits/men/92.jpg",
        status: "Finalizada",
      },
      {
        id: 3,
        title: "Medico Ocupacional",
        date: "15 horas",
        applicant: 2,
        description: "Garzon Hipermercado C.A se encuentra en la busqueda de un Médico Ocupacional el cual se encarga de brindar asistencia médica al personal para prevenir enfermedades y dar tratamiento oportuno a afecciones o padecimientos contraídos o no en el trabajo.",
        price: 350,
        company: "Hipermercado C.A",
        companyImg: "https://randomuser.me/api/portraits/women/5.jpg",
        status: "Evaluando",
      },
      {
        id: 4,
        title: "Asistente Administrativo",
        date: "4 hora",
        applicant: 4,
        description: "Actualmente nos encontramos en la búsqueda de Asistente Administrativa, para cumplir con las siguientes funciones: apoyar en las operaciones realizadas por la directiva y la gerencia general. Hacer seguimiento a las transferencias realizadas.",
        price: 100,
        company: "Mundo Total",
        companyImg: "https://randomuser.me/api/portraits/women/55.jpg",
        status: "Evaluando",
      },
      {
        id: 5,
        title: "Gerente de administración y finanzas",
        date: "1 horas",
        applicant: 1,
        description: "Efectuar levantamientos de información dentro de todas las áreas de la organización, Análisis y diseño de procesos, Analizar e implementar cambios en la estructura de la organización y sus respectivos cargos.",
        price: 40,
        company: "ConexTEELCOM C.A",
        companyImg: "https://randomuser.me/api/portraits/men/7.jpg",
        status: "Activa",
      },
    ],
    filter: 'All'
  },

  mutations: {
    ADD_JOB(state, payload) {
      state.jobs.push(payload);
    }
  },
  actions: {
    CREATE_JOB({commit}, payload) {
      const job = {
        title: payload.title,
        date: payload.date,
        applicant: payload.applicant,
        description: payload.description,
        price: payload.price,
        company: payload.company,
        companyImg: payload.companyImg,
        status: payload.status,
      }
      commit('ADD_JOB', job)
    }
  },
  getters: {
    JOBS(state) {
      return state.jobs
    }
  },
})
