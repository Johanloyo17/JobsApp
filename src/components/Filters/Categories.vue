<template>
  <div class="filter-item">
    <h4>Categoria</h4>
    <el-select v-model="category" placeholder="Select" class="is-block">
      <el-option
        v-for="category in categories"
        :key="category.id"
        :label="category.label"
        :value="category.value"
      ></el-option>
    </el-select>
  </div>
</template>

<script>
export default {
  data () {
    return {
      category: 'Ventas',
      categories: [
        {
          id: 1,
          value: 'Ventas',
          label: 'Ventas',
        },
        {
          id: 2,
          value: 'Web',
          label: 'Web',
        },
        {
          id: 3,
          value: 'Arquitectura',
          label: 'Arquitectura',
        },
      ]
    }
	},
}
</script>