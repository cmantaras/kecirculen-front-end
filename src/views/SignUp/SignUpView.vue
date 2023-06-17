<script>
// Styles
import InputText from 'primevue/inputtext';
import Message from 'primevue/message';

// Components
import InputForm from '@/components/formComponents/input.vue';
import ButtonForm from '@/components/formComponents/button.vue';
import Title from '@/components/Texts/title.vue';

// import KecirculenLogo from './images/KECIRCULENLogo.svg'

import axios from 'axios'

export default {
  data() {
    return {
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
        username: false,
        email: false,
        password: false,
        repeatPassword: false
      }
    }
  },
  components: {
    InputForm,
    Title,
    ButtonForm,
    Message
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
        this.createdSuccessfully = true;
        this.hideAlert = 'show';
      } catch (error) {
        this.hideAlert = 'show';
        this.createdSuccessfully = false;
        console.log(error)
      } finally {
        setTimeout(() => {
          this.hideAlert = 'hide';
          this.createdSuccessfully = false;
        }, 5000)
      }
    }
  },
  computed: {
    validateSubmit() {
      const emptyFields = Object.values(this.form).some((value) => value === '');
      const invalidFields = Object.values(this.valid).some((value) => value === false);

      return !emptyFields && !invalidFields;
    },
  }
}
</script>

<template>
  <div class="higherContainer">
    <img src="./images/KECIRCULENLogo.svg" alt="logo" class="logo" />

    <div class="formContainer">
      <Title :title="'Crear una cuenta nueva'" />

      <InputForm
        label="Usuario"
        placeholder="Usuario"
        :value="form.username"
        :valid-username="valid.username"
        @input-value="form.username = $event"
        @validUsername="valid.username = $event"
      />

      <InputForm
        label="Email"
        placeholder="Email"
        :value="form.email"
        :valid-email="valid.email"
        @input-value="form.email = $event"
        @validEmail="valid.email = $event"
      />

      <InputForm
        label="Password"
        placeholder="Password"
        :value="form.password"
        :valid-password="valid.password"
        @input-value="form.password = $event"
        @validPassword="valid.password = $event"
      />

      <InputForm
        label="Repeat Password"
        placeholder="Repeat Password"
        :valid-repeated-password="valid.email"
        :value="form.repeatPassword"
        @input-value="form.repeatPassword = $event"
        :repeat-value="form.password"
        @validRepeatPassword="valid.repeatPassword = $event"
      />

      <ButtonForm v-if="validateSubmit" label="Continuar" :onClick="submit" />

      <ButtonForm v-else aria-disabled="" label="Continuar" disabled />

      <div v-if="this.hideAlert === 'show'">
        <Message v-if="this.createdSuccessfully" :closable="false" severity="success">
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
