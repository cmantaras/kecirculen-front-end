<script>
// Styles
import InputText from 'primevue/inputtext'
import Message from 'primevue/message'

// Components
import InputForm from '@/components/formComponents/input.vue'
import ButtonForm from '@/components/formComponents/button.vue'
import Title from '@/components/Texts/title.vue'
import Text from '@/components/Texts/text.vue'

import { isStrongPassword, isEmail } from 'validator'

import axios from 'axios'
import 'bootstrap'

export default {
  data() {
    return {
      error: '',
      createdSuccessfully: false,
      hideAlert: 'hide',
      form: {
        username: '',
        email: '',
        password: '',
        repeatPassword: '',
        roles: ['admin']
      },
      valid: {
        username: true,
        email: true,
        password: true,
        repeatPassword: true
      }
    }
  },
  components: {
    InputForm,
    Title,
    ButtonForm,
    Message,
    Text
  },
  methods: {
    async submit() {
      try {
        await axios.post('http://localhost:3000/api/signup', this.form, this.createAccount, {
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
          }
        })
        this.createdSuccessfully = true
        this.hideAlert = 'show'
      } catch (error) {
        this.hideAlert = 'show'
        this.createdSuccessfully = false
        console.log(error)
      } finally {
        setTimeout(() => {
          this.hideAlert = 'hide'
          this.createdSuccessfully = false
        }, 5000)
      }
    },
    validateUsername(val) {
      if (val.length <= 1) {
        this.error = 'Este campo es requerido'
        this.valid.username = false
      } else if (val.length > 20) {
        this.error = 'El campo no puede tener más de 20 caracteres'
        this.valid.username = false
      } else {
        this.error = ''
        this.valid.username = true
      }
    },
    validateEmail(isValid) {
      this.valid.email = isEmail(isValid)
    },
    validatePassword(isValid) {
      this.valid.password = isStrongPassword(isValid)
    },
    validateRepeatPassword(val) {
      this.valid.repeatPassword = this.form.password === val
    }
  },
  computed: {
    validateSubmit() {
      const emptyFields = Object.values(this.form).some((value) => value === '')
      const invalidFields = Object.values(this.valid).some((value) => value === false)

      return !emptyFields && !invalidFields
    }
  }
}
</script>

<template>
  <div class="higherContainer">
    <img src="../logo/KECIRCULENLogo.svg" alt="logo" class="logo" />

    <div class="formContainer">
      <Title :title="'Crear una cuenta nueva'" />

      <div>
        <InputForm
          label="Usuario"
          placeholder="Usuario"
          :value="form.username"
          @inputValue="form.username = $event"
          @handleUsername="validateUsername"
        />
        <Text class="error-message" :text="error" />
      </div>

      <div>
        <InputForm
          label="Email"
          placeholder="Email"
          :value="form.email"
          @inputValue="form.email = $event"
          @handleEmail="validateEmail"
        />
        <Text
          v-if="!valid.email"
          class="error-message"
          :text="'Por favor, ingresa un correo electrónico válido.'"
        />
      </div>

      <div>
        <InputForm
          label="Password"
          placeholder="Password"
          :value="form.password"
          @inputValue="form.password = $event"
          @handlePassword="validatePassword"
        />
        <Text
          v-if="!valid.password"
          class="error-message"
          :text="'La contraseña debe tener al menos 8 caracteres, 1 carácter especial y 1 número.'"
        />
      </div>

      <div>
        <InputForm
          label="Repeat Password"
          placeholder="Repeat Password"
          :value="form.repeatPassword"
          :repeatValue="form.password"
          @inputValue="form.repeatPassword = $event"
          @handleRepeatPassword="validateRepeatPassword"
        />
        <Text
          v-if="!valid.repeatPassword"
          class="error-message"
          :text="'Las contraseñas no coinciden'"
        />
      </div>

      <ButtonForm v-if="validateSubmit" label="Continuar" :onClick="submit" />

      <ButtonForm v-else label="Continuar" disabled />

      <div v-if="this.hideAlert === 'show'">
        <Message v-if="createdSuccessfully" :closable="false" severity="success">
          Se ha creado la cuenta correctamente
        </Message>

        <Message v-else :closable="false" severity="error">
          Ha habido un error en el proceso de creaciòn.
        </Message>
      </div>
    </div>
  </div>
</template>

<style>
.higherContainer {
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;
  font-family: Poppins;
  background: #f2ce63;
}
.formContainer {
  display: flex;
  flex-direction: column;
  background: white;
  width: 423px;
  border-radius: 40px;
  padding: 50px;
  margin-top: auto;
  margin-bottom: auto;
  align-self: center;
}
.logo {
  width: 150px;
  height: 50px;
  padding: 0;
  margin: 0 20px 0 0;
  align-self: flex-end;
  cursor: pointer;
}
</style>
