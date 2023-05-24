
<script setup>
import { ref } from 'vue';
import axios from 'axios';
import InputText from 'primevue/inputtext';
import InputForm from '@/components/formComponents/input.vue'
import ButtonForm from '@/components/formComponents/button.vue'

const form = ref({
  username: '',
  email: '',
  password: '',
  roles: ['admin']
});
const createAccount = ref({
  repeatPassword:'',
  cellphone:'',
  documentType:'',
  documentNumber:'',
});

function submit(event) {
  console.log(form.value)
  axios.post('http://localhost:3000/api/signup', form.value, {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  })
    .then(response => {
      console.log(response.data);
    })
    .catch(error => {
      console.error(error);
    });
}
</script>
      

<template>
  <div class=" p-inputgroup flex-1 d-flex w-100% flex-column">
    <InputForm label="Usuario" placeholder="Usuario" :value="form.username" @input-value="form.username = $event" />

    <InputForm label="Email" placeholder="Email" :value="form.email" @input-value="form.email = $event" />

    <InputForm label="Password" placeholder="Password" :value="form.password" @input-value="form.password = $event" />
    
    <InputForm label="Repeat Password" placeholder="Repeat Password" :value="createAccount.repeatPassword" @input-value="createAccount.repeatPassword = $event" />
    
    <InputForm label="Celular" placeholder="Numero de celular" :value="createAccount.cellphone" @input-value="createAccount.cellphone = $event" />
    
    <InputForm label="Tipo de documento" placeholder="Tipo de documento" :value="createAccount.documentType" @input-value="createAccount.documentType = $event" />
    
    <InputForm label="Numero de documento" placeholder="Numero de documento" :value="createAccount.documentNumber" @input-value="createAccount.documentNumber = $event" />

    <ButtonForm label="Submit" :onClick="submit" />
  </div>
</template>

