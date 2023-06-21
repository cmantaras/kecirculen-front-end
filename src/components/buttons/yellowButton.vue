<script setup lang="ts">
  import ButtonForm from 'primevue/button'
  import 'bootstrap'

  const props = defineProps(['label', 'disabled'])
  const emit = defineEmits(['onClick'])

</script>

<template>
    <ButtonForm 
        :disabled="props.disabled" 
        @click="emit('onClick')" 
        class="yellowButton"
      >{{ props.label }}</ButtonForm>
</template>

<style>
.yellowButton {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px 0;
  padding: 0px;
  width: 100%;
  height: 36px;
  top: 280px;

  background: #f2ce63;
  border: 1px solid #f2ce63;
  color: #263238;

  font-size: 14px;
  font-weight: 500;
  line-height: 16px;
  letter-spacing: 1.25px;
  text-transform: uppercase;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}
.yellowButton:not(.p-disabled):hover {
  background: #f2ce63;
  border: 1px solid #f2ce63;
  color: #263238;
}
</style>
