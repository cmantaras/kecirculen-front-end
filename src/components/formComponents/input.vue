<script>
import InputTextForm from 'primevue/inputtext';
import InputPasswordForm from 'primevue/password';
import InputMask from 'primevue/inputmask'
import 'bootstrap';

export default {
  props: {
    label: String,
    placeholder: String,
    value: String
  },
  components: {
    InputTextForm,
    InputPasswordForm,
    InputMask
  },
  methods: {
    updateValue(event) {
      this.$emit('input-value', event.target.value);
    },
  }
};
</script>

<template>
  <div>
    <div v-if="label === 'Password'" class="group">
      <label>{{ label }}</label>
      <InputPasswordForm :value="value" @input="updateValue">
        <template #header>
            <h6>Pick a password</h6>
        </template>
        <template #footer>
            <Divider />
            <p class="mt-2">Suggestions</p>
            <ul class="pl-2 ml-2 mt-0" style="line-height: 1.5">
                <li>At least one lowercase</li>
                <li>At least one uppercase</li>
                <li>At least one numeric</li>
                <li>Minimum 8 characters</li>
            </ul>
        </template>
    </InputPasswordForm>
    </div>

    <div v-else-if="label === 'Celular'" class="group">
      <label>{{ label }}</label>
      <InputMask mask="(99) 999-9999" :placeholder="placeholder" v-bind="value" @input="updateValue" />
    </div>

    <div v-else-if="label === 'Numero de documento'" class="group">
      <label>{{ label }}</label>
      <InputMask mask="9-999-999-9" :placeholder="placeholder" v-bind="value" @input="updateValue" />
    </div>
    
    <div v-else  class="group">
      <label>{{ label }}</label>
      <InputTextForm :placeholder="placeholder" v-bind="value" @input="updateValue" />
    </div>
  </div>
</template>

<style>
.group {
  display: flex;
  flex-direction: column;
  margin: 10px 0;
}
.p-hidden-accessible{
  display: none
}
</style>
