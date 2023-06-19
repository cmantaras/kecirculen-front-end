<script>
export default {
  props: {
    title: String
  }
}
</script>

<template>
  <h1 class="HeroSubtitleStyle">
    {{ title }}
  </h1>
</template>

<style>
.HeroSubtitleStyle {
  font-size: 20px;
  font-family: Poppins;
  font-weight: 700;
  line-height: 77.6px;
  color: #e87d0e;
}
</style>
