<script>
import Button from 'primevue/button';
import 'bootstrap';

export default {
  props: {
    label: String,
  },
  components: {
    Button
  }
}
</script>

<template>
    <Button @click="onClick" :label="label"/>
</template>
