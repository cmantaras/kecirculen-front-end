<script>
import Text from '../Texts/text.vue'
import Logo from '../logo/logo.vue'
import Button from '../buttons/whiteButton.vue'

export default {
  components: {
    Text,
    Logo,
    Button
  }
}
</script>

<template>
  <div class="navbarContainer">
    <Logo />
    <div>
      <ul class="navbarUl">
        <li>
          <Text :text="'Inicio'" />
        </li>
        <li>
          <Text :text="'Sobre nosotros'" />
        </li>
        <li>
          <Text :text="'Servicios'" />
        </li>
        <li>
          <Text :text="'Novedades'" />
        </li>
        <li>
          <Button label="Contáctanos" class="navbarButton" />
        </li>
      </ul>
    </div>
  </div>
</template>

<style>
.navbarContainer {
  display: flex;
  background: #f2ce63;
  width: 100%;
  height: 50px;
  color: #263238;
  justify-content: space-between;
  align-items: center;
}
.navbarUl {
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  padding: 0;
  margin: 0;
}
.navbarUl li {
  display: flex;
  margin: 0 40px;
  cursor: pointer;
  align-items: center;
}
.navbarUl img {
  margin-right: 10px;
}
.navbarUl li:hover > img {
  display: block;
}
.navbarUl li:nth-child(5) {
  margin: 0 70px 0 0;
}
.navbarButton {
  border: 1px solid white;
  width: 132px;
}
</style>
