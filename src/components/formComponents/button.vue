<script>
import ButtonForm from 'primevue/button'
import Text from '@/components/Texts/text.vue'
import 'bootstrap'

export default {
  props: {
    label: String
  },
  components: {
    ButtonForm,
    Text
  }
}
</script>

<template>
  <ButtonForm @click="$emit('click')" class="button">{{ label }}</ButtonForm>
</template>
<style>
.button {
  margin: 10px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0px;
  width: 100%;
  height: 36px;
  top: 280px;
}
</style>
