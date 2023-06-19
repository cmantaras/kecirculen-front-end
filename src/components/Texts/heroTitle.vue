<script>
export default {
  props: {
    title: String
  }
}
</script>

<template>
  <h1 class="HerotitleStyle">
    {{ title }}
  </h1>
</template>

<style>
.HerotitleStyle {
  font-size: 50px;
  font-family: Poppins;
  font-weight: 700;
  line-height: 77.6px;
  color: #000000;
}
</style>
