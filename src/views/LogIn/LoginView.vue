<script>
// Styles
import InputText from 'primevue/inputtext'
import Message from 'primevue/message'

// Components
import Title from '@/components/Texts/title.vue'
import Text from '@/components/Texts/text.vue'
import Button from '@/components/formComponents/button.vue'

export default {
  components: {
    Title,
    Text,
    Button
  }
}
</script>

<template>
  <div class="logInHigherContainer">
    <img src="../logo/KECIRCULENLogo.svg" alt="logo" class="logo" />

    <div class="logInContainer">
      <Title :title="'¡Te damos la bienvenida a KECIRCULEN!'" class="logInWelcome" />

      <div>
        <img src="./images/books.png" alt="books" class="loginImage" />
      </div>

      <router-link to="/signin" class="routerContainer">
        <Button class="button" label="Iniciar sesión" />
      </router-link>

      <router-link to="/signup" class="routerContainer">
        <Button class="button" label="Crear Cuenta" />
      </router-link>
    </div>
  </div>
</template>

<style>
.logInHigherContainer {
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;
  font-family: Poppins;
  background: #f2ce63;
}
.logInContainer {
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
.logInWelcome{
  text-align: center;
}
.routerContainer {
  display: flex;
  width: 100%;
  justify-content: center;

  text-decoration: none;
}
</style>
