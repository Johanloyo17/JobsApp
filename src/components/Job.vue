<template>
  <div class="job">
    <div class="job-info">
      <span 
        :class="{
          'job-status--active' : job.status === 'Activa', 
          'job-status--evaluating' :job.status === 'Evaluando',
          'job-status--finalized' : job.status === 'Finalizada'  
        }"
        class="job-status">
        {{job.status}}
      </span>
      <div class="job-title">
        <span>{{job.title}}</span>
      </div>
      <div class="job-date">
        <span><b>Publicado:</b>Hace {{job.date}}</span>
        <span><b>Propuestas:</b> {{job.applicant}}</span>
      </div>
      <div class="job-description">
        <p>{{job.description}}</p>
      </div>
      <div class="job-details">
        <span>Ver Detalles</span>
      </div>
    </div>
    <div class="job-action">
      <div class="job-price">
        <span>USD {{job.price}}</span>
      </div>
      <el-button type="primary" class="is-block">Postularse</el-button>
      <div class="job-company">
        <img :src="job.companyImg" alt="company">
        <span>{{job.company}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    job: {
      type: Object,
      required: true,
    },
  },
};
</script>
