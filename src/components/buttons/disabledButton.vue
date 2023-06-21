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
  <ButtonForm @click="handleClick()" class="formButton">{{ label }}</ButtonForm>
</template>

<style>
.formButton {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px 0;
  padding: 0px;
  width: 100%;
  height: 36px;
  top: 280px;

  background: #d9d9d9;
  border: 1px solid #d9d9d9;
  color: #8c8787;

  font-size: 14px;
  font-weight: 500;
  line-height: 16px;
  letter-spacing: 1.25px;
  text-transform: uppercase;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}
.formButton:not(.p-disabled):hover {
  background: #d9d9d9;
  border: 1px solid #d9d9d9;
  color: #8c8787;
}
</style>
