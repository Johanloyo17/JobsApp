<template>
	<section>
		<el-row class="footer-cont">
			<div class="container">
				<div class="footer">
					<div class="footer_head">
						<div class="footer_head_text">
							<span class="title">Jobs</span>
							<span>© 2012 - 2019 | Jobs LLC - Todos los derechos reservados </span>
						</div>
						<div class="footer_head_actions">
							<el-select v-model="value" placeholder="Select">
								<el-option
									v-for="item in len"
									:key="item.value"
									:label="item.label"
									:value="item.value"
								>
								</el-option>
							</el-select>
							<div class="icons-cont">
								<i class="fab fa-facebook-f"></i>
								<i class="fab fa-instagram"></i>
							</div>
						</div>
					</div>
					<div class="borderline"></div>
					<div class="sitemap">
						<div v-for="(item, index) in 3" :key="index" class="sitemap_col">
							<a href="" class="sitemap_col_link">Sobre nosotros</a>
							<a href="" class="sitemap_col_link">Política de privacidad</a>
							<a href="" class="sitemap_col_link">Términos de servicio</a>
							<a href="" class="sitemap_col_link">Hecho en América Latina</a>
						</div>
					</div>
				</div>
			</div>
		</el-row>
	</section>
</template>

<script>
export default {
	data() {
		return {
			value:'',
			len:[
				{
					value: 'Es',
					label: 'Espanol'
				},
				{
					value: 'En',
					label: 'Inglish'
				}
			]
		}
	},
}
</script>