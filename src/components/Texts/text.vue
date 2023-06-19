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
  display: flex;
  font-size: 16px;
  font-family: Poppins;
  font-weight: 500;
  line-height: 24px;
  margin: 0;
}
</style>
