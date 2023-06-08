<script>
import { ref } from 'vue'
import axios from 'axios'
import InputText from 'primevue/inputtext'
import InputForm from '@/components/formComponents/input.vue'
import ButtonForm from '@/components/formComponents/button.vue'

export default {
  data() {
    return {
      err: '',
      form: {
        username: '',
        email: '',
        password: '',
        roles: ['admin']
      },
      createAccount: {
        repeatPassword: '',
        cellphone: '',
        documentType: '',
        documentNumber: ''
      },
      test: ""
    }
  },
  components: {
    InputForm,
    ButtonForm
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
      } catch (error) {
        this.err = 'There was an error: ' + error
      }
    }
  },
}
</script>

<template>
  <div class="p-inputgroup flex-1 d-flex w-100% flex-column">
    <InputForm
      label="Usuario"
      placeholder="Usuario"
      :value="form.username"
      @input-value="form.username = $event"
    />

    <InputForm
      label="Email"
      placeholder="Email"
      :value="form.email"
      @input-value="form.email = $event"
    />

    <InputForm
      label="Password"
      placeholder="Password"
      :value="form.password"
      @input-value="form.password = $event"
    />

    <InputForm
      label="Repeat Password"
      placeholder="Repeat Password"
      :value="createAccount.repeatPassword"
      @input-value="createAccount.repeatPassword = $event"
    />

    <InputForm
      label="Celular"
      placeholder="Numero de celular"
      :value="createAccount.cellphone"
      @input-value="createAccount.cellphone = $event"
    />

    <InputForm
      label="Tipo de documento"
      placeholder="Tipo de documento"
      :value="createAccount.documentType"
      @input-value="createAccount.documentType = $event"
    />

    <InputForm
      label="Numero de documento"
      placeholder="Numero de documento"
      :value="createAccount.documentNumber"
      @input-value="createAccount.documentNumber = $event"
    />

    <ButtonForm label="Submit" :onClick="submit" />
  </div>
</template>
