<template>
  <div class="filter">
    <div class="filter-header">
      Filtros
    </div>
    <div class="filter-body">
      <Word/>
      <Status/>
      <Date/>
      <Salary/>
      <WorkingDay/>
      <Categories/>
      <States/>
    </div>
  </div>
</template>

<script>
import Word from './Filters/Word'
import Categories from './Filters/Categories'
import States from './Filters/States'
import Date from './Filters/Date'
import Salary from './Filters/Salary'
import WorkingDay from './Filters/WorkingDay'
import Status from './Filters/Status'
export default {
  data () {
    return {
     
    }
  },
  components: {
    Word,
    Categories,
    States,
    Date,
    Salary,
    WorkingDay,
    Status
  }
}
</script>