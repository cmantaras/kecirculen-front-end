<script>
// Styles
import Message from 'primevue/message'

// Components
import Title from '@/components/Texts/title.vue'
import Button from '@/components/formComponents/button.vue'
import LoginInput from '@/components/formComponents/input.vue'

export default {
  components: {
    Title,
    Text,
    Button,
    LoginInput
  }
}
</script>

<template>
  <div class="higherContainer">
    <img src="../logo/KECIRCULENLogo.svg" alt="logo" class="logo" />

    <div class="container">
      <Title :title="'Iniciar sesión'" />
      <LoginInput label="Email" placeholder="Email" />
      <LoginInput label="Password" placeholder="Password" />
      <Button class="button" label="Crear Cuenta" />
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
.container {
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
.loginImage {
  width: 100%;
  height: 91px;
  object-fit: contain;
  align-items: center;
  justify-content: center;
}
</style>
