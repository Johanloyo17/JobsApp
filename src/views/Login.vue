<template>
	<div class="auth">
    <aside class="auth-aside">
      <div class="auth-caption">
        <h3>El trabajo que buscas esta en JOBS</h3>
        <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Vivamus vehicula nec nunc dignissim imperdiet. Quisque 
          congue erat ac velit placerat tempor. Cras id consequat quam,
          quis mattis lectus. Fusce varius eros eget tincidunt gravida.
          Vivamus nec nulla nisi.
        </span>
      </div>
    </aside>
    <div class="auth-form">
      <form class="auth-login" v-on:submit.prevent="login">
        <h3>Login</h3>
        <div class="input-group">
          <el-input
            type="text"
            placeholder="Correo Electronico"
            v-model="email"
            name="email"
            prefix-icon="fas fa-user">
          </el-input>
        </div>
        <div class="input-group">
          <el-input
            type="password"
            placeholder="Contrasena"
            name="password"
            v-model="password"
            prefix-icon="fas fa-unlock-alt">
          </el-input>
        </div>
        <span class="auth-remenber">¿No recuerdas tu contraseña?</span>
        <el-button type="primary" class="is-block" native-type="submit">Entrar</el-button>
        <span class="auth-ifnot">Si no estás registrado <span>Regístrate aquí</span></span>
      </form>
      <div class="auth-footer">
        <span>© 2012 - 2019 | JOBS - Todos los derechos reservados</span>
      </div>
    </div>
	</div>
</template>

<script>
import axios from 'axios'
import router from '../router'
import qs from 'qs'
import config from '../axios_config.js'

export default {
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    async login () 
    {
      try 
      {
        let data = {email : this.email, password : this.password, login_type : 'CANDIDATE'};
        data = qs.stringify(data);
        config.method = 'post';
        config.url = '/login/' +'?' + data;
        const response = await axios(config);

        switch (response.status) 
        {
          case 200:
            alert('logeado')
            console.log(response.data.access_token)
            return true;
            break;
          case 400:
            alert('El usuario no existe')
            return false;
        }
      } catch (error) 
      {
        alert('ocurrio un error inesperado')
        console.log(error)
      }


    }
  }
}
</script>