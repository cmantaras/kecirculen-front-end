<script>
// Styles
import InputTextForm from 'primevue/inputtext'
import DropdownForm from 'primevue/dropdown'
import InputMask from 'primevue/inputmask'

// Components
import Text from '../Texts/text.vue'

import { isStrongPassword, isEmail } from 'validator'

import 'bootstrap'

export default {
  props: {
    label: String,
    placeholder: String,
    value: [String, Number],
    repeatValue: [String, Number]
  },
  components: {
    InputTextForm,
    DropdownForm,
    Text,
    InputMask
  },
  methods: {
    handleInput(event) {
      this.$emit('inputValue', event.target.value)
    },
    validateUsername(event) {
      this.$emit('handleUsername', event.target.value)
    },
    handleEmail(event) {
      this.$emit('handleEmail', event.target.value)
    },
    handlePassword(event) {
      this.$emit('handlePassword', event.target.value)
    },
    handleRepeatPassword(event) {
      this.$emit('handleRepeatPassword', event.target.value)
    }
  }
}
</script>

<template>
  <div>
    <div v-if="label === 'Password'" class="group">
      <label>{{ label }}</label>
      <InputTextForm
        type="password"
        :value="value"
        :placeholder="placeholder"
        @input="handleInput"
        @blur="handlePassword"
      />
    </div>

    <div v-else-if="label === 'Repeat Password'" class="group">
      <label>{{ label }}</label>
      <InputTextForm
        type="password"
        :value="value"
        :placeholder="placeholder"
        @input="handleInput"
        @blur="handleRepeatPassword"
      />
    </div>

    <div v-else-if="label === 'Celular'" class="group">
      <label>{{ label }}</label>
      <InputMask mask="(99) 999-999" :placeholder="placeholder" :value="value" />
    </div>

    <div v-else-if="label === 'Numero de documento'" class="group">
      <label>{{ label }}</label>
      <InputMask mask="9-999-999-9" :placeholder="placeholder" :value="value" />
    </div>

    <div v-else-if="label === 'Tipo de documento'" class="group">
      <label>{{ label }}</label>
      <DropdownForm options="C" :placeholder="placeholder" :value="value" />
    </div>

    <div v-else-if="label === 'Email'" class="group">
      <label>{{ label }}</label>
      <InputTextForm
        :placeholder="placeholder"
        :value="value"
        @blur="handleEmail"
        @input="handleInput"
      />
    </div>

    <div v-else class="group">
      <label>{{ label }}</label>
      <InputTextForm
        :placeholder="placeholder"
        :value="value"
        @blur="validateUsername"
        @input="handleInput"
      />
    </div>
  </div>
</template>

<style>
.group {
  display: flex;
  flex-direction: column;
  margin: 10px 0;
  font-size: 16px;
}
.p-hidden-accessible {
  display: none;
}
.error-message {
  color: red;
  margin-top: 5px;
}
</style>
