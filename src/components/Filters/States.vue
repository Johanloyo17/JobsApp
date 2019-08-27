<template>
  <div class="filter-item">
    <h4>Estados</h4>
    <el-select v-model="state" placeholder="Select" class="is-block">
      <el-option v-for="state in states" :key="state.id" :label="state.label" :value="state.value"></el-option>
    </el-select>
  </div>
</template>

<script>
export default {
  data() {
    return {
      state: 'Carabobo',
      states: [
        {
          id: 1,
          value: 'Carabobo',
          label: 'Carabobo',
        },
        {
          id: 2,
          value: 'Caracas',
          label: 'Caracas',
        },
        {
          id: 3,
          value: 'Aragua',
          label: 'Aragua',
        }
      ]
    }
  }
};
</script>