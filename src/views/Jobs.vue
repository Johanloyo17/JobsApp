<template>
  <div>
    <Navbar/>
    <div class="container">
      <div class="jobs">
        <el-button type="success" @click="dialogFormVisible = true" class="fixed">Agregar Propuestas</el-button>
        <JobsFilter/>
        <transition-group name="list" tag="div">
          <Job  v-for="(job, index) in JOBS" :key="index + 1" :job="job"></Job>
        </transition-group>
      </div>

      <el-dialog title="Crear Propuesta" :visible.sync="dialogFormVisible">
        <form class="auth-login" v-on:submit.prevent="onCreateJob">
          <h3>Agregar Propuestas</h3>
          <div class="input-group">
            <el-input
              type="text"
              placeholder="Titulo"
              v-model="title"
              name="title">
            </el-input>
          </div>
          <div class="input-group">
            <el-input
              type="text"
              placeholder="Fecha"
              v-model="date"
              name="date">
            </el-input>
          </div>
          <div class="input-group">
            <el-input
              type="text"
              placeholder="Postulantes"
              v-model="applicant"
              name="applicant">
            </el-input>
          </div>
          <div class="input-group">
            <el-input
              type="text"
              placeholder="Descripcion"
              v-model="description"
              name="description">
            </el-input>
          </div>
          <div class="input-group">
            <el-input
              type="text"
              placeholder="Precio"
              v-model="price"
              name="price">
            </el-input>
          </div>
          <div class="input-group">
            <el-input
              type="text"
              placeholder="Empresa"
              v-model="company"
              name="company">
            </el-input>
          </div>
          <div class="input-group">
            <el-input
              type="text"
              placeholder="Empresa Image"
              v-model="companyImg"
              name="companyImg">
            </el-input>
          </div>
          <div class="input-group">
            <el-input
              type="text"
              placeholder="Estatus"
              v-model="status"
              name="status">
            </el-input>
          </div>
        <el-button type="primary" class="is-block" native-type="submit">Agregar</el-button>
      </form>
        <span slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisible = false">Cancel</el-button>
          <el-button type="primary" @click="dialogFormVisible = false">Confirm</el-button>
        </span>
      </el-dialog>

    </div>
	</div>
</template>

<script>
import Job from '../components/Job.vue'
import JobsFilter from '../components/JobsFilter.vue'
import Navbar from '../components/Navbar.vue'
import {mapGetters} from 'vuex'
import { mapActions } from 'vuex'
export default {
  components:{
    Job,
    JobsFilter,
    Navbar
  },
  data () {
    return {
      dialogFormVisible: false,
      title: '',
      date: '',
      applicant: '',
      description: '',
      price: '',
      company: '',
      companyImg: '',
      status: ''
    }
  },
  computed: {
    ...mapGetters(['JOBS']),
  },
  methods: {
    onCreateJob() {
      const jobData = {
        title: this.title,
        date: this.date,
        applicant: this.applicant,
        description: this.description,
        price: this.price,
        company: this.company,
        companyImg: this.companyImg,
        status: this.status,
      }
      this.$store.dispatch('CREATE_JOB', jobData)
    }
  },
}
</script>
<style lang="css">
  .list-enter-active, .list-leave-active {
    transition: all .5s;
  }
  .list-enter, .list-leave-to  {
    opacity: 0;
    transform: translateY(30px);
  }
  .fixed {
    position: fixed;
    bottom: 20px;
    right: 20px;
    z-index: 20;
  }
</style>