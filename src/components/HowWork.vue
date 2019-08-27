<template>
    <div class="">
        <el-row class="how_cont container" :gutter="20">
            <el-col v-for="(item, index) in 4" :key="index" class="howcard" :span="5">
                <div  class="howcard_head">
                    <i class="far fa-clock"></i>
                    <h2>Ahorro de tiempo y dinero</h2>
                </div>
                <div class="howcard_text">
                    <p>Herramientas optimizadas para reducir el tiempo y costo de la selección</p>
                </div>
            </el-col>
        </el-row>
        <div class="how_actions">
            <div>
                <el-button plain type="primary">Publica tu oferta</el-button>
            </div>
            <div>
                <el-button  type="primary">Buscar empleo    </el-button>
            </div>
        </div>
        
    
    </div>
</template>
<script>
export default {
    data() {
        return {
            
        }
    },
}
</script>
