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
  },
  setup(props, { emit }) {
    const handleClick = () => {
      emit('click')
    }

    return {
      handleClick
    }
  }
}
</script>

<template>
  <ButtonForm @click="handleClick()" class="whiteButton">{{ label }}</ButtonForm>
</template>

<style>
.whiteButton {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px 0;
  padding: 0px;
  width: 100%;
  height: 36px;
  top: 280px;

  background: white;
  border: 1px solid white;
  color: #263238;

  font-weight: 500;
  line-height: 16px;
  letter-spacing: 1.25px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}
.whiteButton:not(.p-disabled):hover {
  background: white;
  border: 1px solid #263238;
  color: #263238;
}
</style>
