<template>
	<header class="header" :class="{ 'is-home' : home}">
		<el-container class="container">
			<div class="navbar">
				<router-link to="/" class="navbar-brand">JOBS</router-link>
				<nav class="navbar-nav">
					<div class="navbar-list">
						<a class="navbar-link">Candidatos</a>
						<a class="navbar-link">Reclutadores</a>
					</div>
					<div class="navbar-list">
						<router-link 
							to="/jobs" 
							class="navbar-link"
							:class="{ 'text-white' : home}">
							Jobs
						</router-link>

						<router-link 
							to="/register" 
							v-if="auth==''" 
							class="navbar-link" 
							:class="{ 'text-white' : home}">
							Registrate
						</router-link>

						<router-link 
							to="/login" 
							v-if="auth==''" 
							class="navbar-link"
							:class="{ 'text-white' : home}">
							Login
						</router-link>
						
						<template>
							<a 
								v-if="home"
								class="el-button el-button--white is-plain">
								Publica Tu Oferta
							</a>
							<a 
								v-else
								class="el-button el-button--primary is-plain">
								Subir tu CV
							</a>
						</template>

					</div>
				</nav>
			</div>
		</el-container>
	</header>
</template>

<script>
export default {
  data () {
    return {
      auth: '',
			user: '',
    }
	},
	props: {
		home: Boolean
	},
  methods: {
    logout () {
      localStorage.removeItem('usertoken')
    }
  },
}
</script>