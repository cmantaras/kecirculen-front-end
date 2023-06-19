<script>
import Text from '@/components/Texts/text.vue'
import Button from '@/components/buttons/disabledButton.vue'

export default {
  components: {
    Text,
    Button
  }
}
</script>

<template>
  <div class="succedContainer">
    <div class="imageContainer">
      <img src="./images/GreenCheck.png" alt="GreeCheck" class="succedImg" />
    </div>

    <div class="succedTextAndIconContainer">
      <Text :text="'Se creó tu cuenta'" />
      <img src="./images/GrinningFace.png" alt="GrinningFace" class="GrinningFace" />
    </div>

    <div class="SuccesfulSignUpwelcome">
      <Text :text="'¡Te damos la bienvenida! '" />
    </div>

    <router-link to="/login" class="buttonContainer">
      <Button label="Ir al inicio" />
    </router-link>
  </div>
</template>

<style>
.succedContainer {
  display: flex;
  flex-direction: column;
  width: 423px;
  height: 654px;
  padding: 50px;
  margin-top: auto;
  margin-bottom: auto;
  align-self: center;
  align-items: center;
  justify-content: center;

  background: white;
  border-radius: 40px;

  text-align: center;
}
.imageContainer {
  margin: 20px 0;
}
.succedImg {
  width: 100px;
  height: 100px;
  top: 84px;
  margin-bottom: 10px;
}
.GrinningFace {
  margin-left: 26px;
}
.succedTextAndIconContainer {
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  margin: 10px 0;
}
.SuccesfulSignUpwelcome {
  margin: 20px 0 5px 0;
}
.buttonContainer {
  width: 100%;
  margin: 60px 0;
  text-decoration: none;
}
</style>
