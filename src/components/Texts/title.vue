<script>
export default {
  props: {
    title: String
  }
}
</script>

<template>
  <h1 class="titleStyle">
    {{ title }}
  </h1>
</template>

<style>
.titleStyle {
  font-size: 26px;
  font-family: Poppins;
  font-weight: 400;
  line-height: 39px;
  color: #716e6e;
}
</style>
