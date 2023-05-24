<script>
import InputText from 'primevue/inputtext';
import 'bootstrap';

export default {
  props: {
    label: String,
    placeholder: String,
    value: String
  },
  components: {
    InputText
  },
  methods: {
    updateValue(event) {
      this.$emit('input-value', event.target.value);
    }
  }
};
</script>

<template>
  <div class="group">
    <label>{{ label }}</label>
    <InputText type="text" :placeholder="placeholder" :value="value" @input="updateValue" />
  </div>
</template>

<style>
.group {
  display: flex;
  flex-direction: column;
  margin: 10px 0;
}
</style>
