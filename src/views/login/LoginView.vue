<script >
// Styles
import InputText from 'primevue/inputtext'
import Message from 'primevue/message'

// Components
import Title from '@/components/labels/title.vue'
import Text from '@/components/labels/text.vue'
import WhiteButton from '@/components/buttons/whiteButton.vue'
import YellowButton from '@/components/buttons/yellowButton.vue'
import Logo from '@/components/logo/logo.vue'

export default {
  components: {
    Title,
    Text,
    YellowButton,
    WhiteButton,
    Logo
  }
}
</script>

<template>
  <div class="logInHigherContainer">
    <Logo />

    <div class="logInContainer">
      <Title :title="'¡Te damos la bienvenida a KECIRCULEN!'" class="logInWelcome" />

      <router-link to="/signin" class="routerContainer">
        <YellowButton label="Iniciar sesión" />
      </router-link>

      <router-link to="/signup" class="routerContainer">
        <WhiteButton class="loginButton" label="Crear Cuenta" />
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
.logInWelcome {
  text-align: center;
}
.routerContainer {
  display: flex;
  width: 100%;
  justify-content: center;

  text-decoration: none;
}
.loginButton {
  border: 1px solid #263238;
  text-transform: uppercase;
}
.loginButton:hover {
  border: 1px solid #263238;
}
</style>
