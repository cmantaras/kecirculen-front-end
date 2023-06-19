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
  <ButtonForm @click="handleClick()" class="button">{{ label }}</ButtonForm>
</template>
<style>
.button {
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
}
.button:not(.p-disabled):hover {
  background: #c4c4c4;
  border: 1px solid #e2e2e2;
  color: #8c8787;
}
</style>
