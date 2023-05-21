
<script setup>

  import InputText from 'primevue/inputtext';
  import Button from 'primevue/button';

  import 'bootstrap'

  import { ref } from 'vue';

  let form = {
    username : '',
    email : '',
    password : '',
    roles : ['admin']
  }

  function submit(event) {
    console.log(form)

    fetch('...')
  .then((res) => res.json())
  .then((json) => (data.value = json))
  .catch((err) => (error.value = err))


    fetch('http://localhost:3000/api/signup', {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({...form})
        })
        .then((res) => res.json())
        .then((json) => ( console.log(json)))


  }

</script>
      

<template>
  <div class="d-flex w-100px flex-column">
    <label>Usuario</label>
    <InputText type="text" v-model="form.username" />

    <label>Email</label>
    <InputText type="text" v-model="form.email" />

    <label>Password</label>
    <InputText type="text" v-model="form.password" />

    <div class="card flex justify-content-center m-2">
        <Button  @click="submit" label="Submit" />
    </div>
  </div>
</template>

