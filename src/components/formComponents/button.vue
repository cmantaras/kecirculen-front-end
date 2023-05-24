<script>
import ButtonForm from 'primevue/button';
import 'bootstrap';

export default {
  props: {
    label: String,
  },
  components: {
    ButtonForm
  }
}
</script>

<template>
  <ButtonForm @click="$emit('click')" :label="label" />
</template>
