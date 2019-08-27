<template>
  <div class="filter-item">
    <h4>Salario</h4>
    <li class="filter-option">
      <label class="radio">
        <input type="radio" value="1" name="salary">
        <span></span>
      </label>
      <span>Menos de $500</span>
    </li>
    <li class="filter-option">
      <label class="radio">
        <input type="radio" value="2" name="salary">
        <span></span>
      </label>
      <span>Más de $ 2.000</span>
    </li>
  </div>
</template>

<script>
export default {
  data () {
    return {
      
    }
	},
}
</script>