<template>
  <div class="filter-item">
    <h4>Fecha de Publicacion</h4>
    <li class="filter-option">
      <label class="radio">
        <input type="radio" value="1" name="date">
        <span></span>
      </label>
      <span>Hoy</span>
    </li>
    <li class="filter-option">
      <label class="radio">
        <input type="radio" value="2" name="date">
        <span></span>
      </label>
      <span>Últimos 3 días</span>
    </li>
    <li class="filter-option">
      <label class="radio">
        <input type="radio" value="3" name="date">
        <span></span>
      </label>
      <span>Última semana</span>
    </li>
    <li class="filter-option">
      <label class="radio">
        <input type="radio" value="4" name="date">
        <span></span>
      </label>
      <span>Últimos 15 días</span>
    </li>
    <li class="filter-option">
      <label class="radio">
        <input type="radio" value="5" name="date">
        <span></span>
      </label>
      <span>Último mes</span>
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