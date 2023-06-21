<script>
import Navbar from '@/components/navbar/navbar.vue'
import Text from '@/components/labels/text.vue'
import Title from '@/components/labels/heroTitle.vue'
import SubTitle from '@/components/labels/heroSubtitle.vue'
import Button from '@/components/buttons/yellowButton.vue'

export default {
  components: {
    Navbar,
    Title,
    SubTitle,
    Text,
    Button
  }
}
</script>

<template>
  <Navbar />
  <div class="HomeHigherContainer">
    <img src="./images/Hero.svg" class="HomeHeroImg" />

    <div class="HomeContainer">
      <div class="HomeTextHeroContainer">
        <SubTitle :title="'Tienda digital de libros usados'" />

        <div>
          <Title :title="'Lectura'" />

          <Title :title="'sustentable'" />
        </div>

        <Text
          :text="'¡Cambia el mundo, libro por libro! Compra, vende o dona libros usados y ayúdanos a cuidar el medio ambiente.'"
        />

        <router-link to="/login" class="buttonContainer">
          <Button label="Comenzar" class="HeroButton" />
        </router-link>
      </div>
    </div>
  </div>
</template>

<style>
.HomeHigherContainer {
  position: relative;
  width: 100%;
  height: 94.7vh;
}
.HomeHeroImg {
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: -1;

  object-fit: cover;
  background-repeat: no-repeat;
}
.HomeContainer {
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  padding-left: 100px;
}
.HomeTextHeroContainer {
  width: 527px;
  height: 345px;
}
.buttonContainer {
  text-decoration: none;
}
.HeroButton {
  border-radius: 40px;
  width: 195px;
  height: 53px;
  margin: 100px 0;
}
</style>
