<script>
export default {
  props: {
    text: String
  }
}
</script>

<template>
  <p class="textStyle">
    {{ text }}
  </p>
</template>

<style>
.textStyle {
  font-size: 16px;
  font-family: Poppins;
  font-weight: 400;
  line-height: 24px;
}
</style>
