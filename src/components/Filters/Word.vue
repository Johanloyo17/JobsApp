<template>
  <div class="filter-item">
    <h4>Palabra Clave</h4>
    <el-input
      type="text"
      placeholder="Ej Operador"
      name="word"
      class="mb-20"
      v-model="word">
    </el-input>
    <el-button type="primary" class="is-block">Filtrar</el-button>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        word: ''
      }
    },
  }
</script>
