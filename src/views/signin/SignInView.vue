<script>
// Styles
import Message from 'primevue/message'

// Components
import Title from '@/components/labels/title.vue'
import Button from '@/components/buttons/disabledButton.vue'
import LoginInput from '@/components/form/input.vue'
import Logo from '@/components/logo/logo.vue'

export default {
  components: {
    Title,
    Text,
    Button,
    LoginInput,
    Logo
  }
}
</script>

<template>
  <div class="SignInHigherContainer">
    <Logo />

    <div class="SignIncontainer">
      <Title :title="'Iniciar sesión'" class="SignInWelcome" />
      <LoginInput label="Email" placeholder="Email" />
      <LoginInput label="Password" placeholder="Password" />
      <Button class="button" label="Crear Cuenta" />
    </div>
  </div>
</template>

<style>
.SignInHigherContainer {
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;
  font-family: Poppins;
  background: #f2ce63;
}
.SignIncontainer {
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
.SignInWelcome {
  text-align: center;
}
.loginImage {
  width: 100%;
  height: 91px;
  object-fit: contain;
  align-items: center;
  justify-content: center;
}
</style>
