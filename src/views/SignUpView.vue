
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
  <div class="d-flex w-100px flex-column">
    <InputForm label="Usuario" placeholder="Usuario" v-model="form.username" @input-value="form.username = $event" />

    <InputForm label="Email" placeholder="Email" v-model="form.email" @input-value="form.email = $event" />

    <InputForm label="Password" placeholder="Password" v-model="form.password" @input-value="form.password = $event" />

    <ButtonForm label="Submit" :onClick="submit" />
  </div>
</template>

