<template>
  <div>
    <div class="reg">
      <aside class="reg-aside">
        <div class="reg-caption">
          <h3>El trabajo que buscas esta en JOBS</h3>
          <span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Vivamus vehicula nec nunc dignissim imperdiet. Quisque
            congue erat ac velit placerat tempor. Cras id consequat quam,
            quis mattis lectus. Fusce varius eros eget tincidunt gravida.
            Vivamus nec nulla nisi.
          </span>
        </div>
      </aside>
      <div class="reg-form">
        <div class="reg-register">
          <h3>Register</h3>
          <div class="input-group">
            <el-input
              placeholder="Nombre"
              v-model="first_name"
              name="first_name"
              prefix-icon="fas fa-user"
            ></el-input>
          </div>
          <div class="input-group">
            <el-input
              type="text"
              placeholder="Apellido"
              v-model="last_name"
              name="last_name"
              prefix-icon="fas fa-user"
            ></el-input>
          </div>

          <el-row gutter="25" class="input-group-par input-group">
            <el-col :span="12">
              <el-input
                type="text"
                placeholder="Correo Electronico"
                v-model="email"
                name="email"
                prefix-icon="fas fa-user"
              ></el-input>
            </el-col>
            <el-col :span="12">
              <el-input
                type="password"
                placeholder="Contrasena"
                name="password"
                v-model="password"
                prefix-icon="fas fa-unlock-alt"
              ></el-input>
            </el-col>
          </el-row>

          <el-row gutter="25" class="input-group-par input-group">
            <el-col :span="12">
              <el-select
                      v-model="jobValue"
                      multiple
                      collapse-tags
                      placeholder="Puesto de trabajo">
                <el-option
                        v-for="item in job"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                </el-option>
              </el-select>
            </el-col>
            <el-col :span="12">
              <el-select v-model="stadeValue" clearable placeholder="Estado">
                <el-option
                        v-for="item in stades"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                </el-option>
              </el-select>
            </el-col>
          </el-row>
          <el-button type="primary" class="is-block" @click="register">Registrar</el-button>
          <span class="reg-ifnot">
            Si ya estas registrado
            <span>Ingresa aquí</span>
          </span>
        </div>
        <div class="reg-footer">
          <span>© 2012 - 2019 | JOBS - Todos los derechos reservados</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import router from "../router";
export default {

  data() {
    return {
      first_name: "",
      last_name: "",
      email: "",
      password: "",


      //stades selections
      stades: [{
        value: 'Option1',
        label: 'Option1'
      }, {
        value: 'Option2',
        label: 'Option2'
      }, {
        value: 'Option3',
        label: 'Option3'
      }, {
        value: 'Option4',
        label: 'Option4'
      }, {
        value: 'Option5',
        label: 'Option5'
      }],
      stadeValue: '',


      //job selections
      job: [{
        value: 'Option1',
        label: 'Option1'
      }, {
        value: 'Option2',
        label: 'Option2'
      }, {
        value: 'Option3',
        label: 'Option3'
      }, {
        value: 'Option4',
        label: 'Option4'
      }, {
        value: 'Option5',
        label: 'Option5'
      }],
      jobValue: ''

    };
  },
  methods: {
    register() {
      axios
        .post("http://localhost:5000/signup", {
          first_name: this.first_name,
          last_name: this.last_name,
          email: this.email,
          password: this.password
        })
        .then(res => {
          console.log(res);
          router.push({ name: "Login" });
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>