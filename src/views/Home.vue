<template>
	<main>
		<Navbar :home="home"/>
		<div class="home">
			<div class="intro">
				<div class="container">
						<div class="intro-caption">
							<h1 class="intro-title">Encuentra un experto en JOBS</h1>
							<span>Miles de empresas como la tuya ya han tenido éxito contratando los<br/> mejores profesionales</span>
							<div class="search">
								<el-input
									v-model="input"
									placeholder="Escribe Cargo o Area Profesional">
								</el-input>
								<el-input
									placeholder="Lugar"
									prefix-icon="fas fa-map-marker-alt">
								</el-input>
								<el-button type="primary">Buscar</el-button>
							</div>
						</div>
					</div>
			</div>
		</div>
		<el-container>
			<el-row class="container">
				<HowWork/>
			</el-row>
		</el-container>
		<Footer></Footer>
	</main>
</template>


<script>
import HowWork from'../components/HowWork'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar.vue'

export default {
	components:{
		HowWork,
		Footer,
		Navbar,
	},
	data() {
		return {
			input: "",
			home: true
		}
	},
}
</script>