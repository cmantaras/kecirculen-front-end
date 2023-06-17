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
    repeatValue: [String, Number],
    validUsername: Boolean,
    validEmail: Boolean,
    validPassword: Boolean,
    validRepeatPassword: Boolean
  },
  data() {
    return {
      error: '',
      isValidEmail: true,
      isValidPassword: true,
      isValidRepeatedPassword: true,
      isValidField: true
    }
  },
  components: {
    InputTextForm,
    DropdownForm,
    Text,
    InputMask
  },
  methods: {
    updateValue(event) {
      this.$emit('input-value', event.target.value)
      this.error = ''
    },
    validate() {
      if (this.value.length <= 1) {
        this.$emit('validUsername', false)
        this.error = 'Este campo es requerido'
        this.isValidField = false
      } else if (this.value.length > 20) {
        this.$emit('validUsername', false)
        this.error = 'El campo no puede tener más de 20 caracteres'
        this.isValidField = false
      } else {
        this.$emit('validUsername', true)
        this.error = ''
        this.isValidField = true
      }
    },
    validateEmail() {
      this.$emit('input-value', this.value)
      this.$emit('validEmail', isEmail(this.value))
      this.isValidEmail = isEmail(this.value)
    },
    validatePassword() {
      this.$emit('input-value', event.target.value)
      this.$emit('validPassword', isStrongPassword(this.value))
      this.isValidPassword = isStrongPassword(this.value)
    },
    validateRepeatPassword() {
      this.$emit('input-value', event.target.value)
      this.$emit('validRepeatPassword', this.repeatValue === this.value)
      this.isValidRepeatedPassword = this.repeatValue === this.value
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
        @input="updateValue"
        @blur="validatePassword"
      />
      <Text
        v-if="label === 'Password' && !isValidPassword"
        class="error-message"
        :text="'La contraseña debe tener al menos 8 caracteres, 1 carácter especial y 1 número.'"
      />
    </div>

    <div v-else-if="label === 'Repeat Password'" class="group">
      <label>{{ label }}</label>
      <InputTextForm
        type="password"
        :value="value"
        :placeholder="placeholder"
        @input="updateValue"
        @blur="validateRepeatPassword"
      />
      <Text
        v-if="label === 'Repeat Password' && !isValidRepeatedPassword"
        class="error-message"
        :text="'Las contraseñas no coinciden'"
      />
    </div>

    <div v-else-if="label === 'Celular'" class="group">
      <label>{{ label }}</label>
      <InputMask
        mask="(99) 999-999"
        :placeholder="placeholder"
        :value="value"
        @input="updateValue"
        @blur="validate"
      />
    </div>

    <div v-else-if="label === 'Numero de documento'" class="group">
      <label>{{ label }}</label>
      <InputMask
        mask="9-999-999-9"
        :placeholder="placeholder"
        :value="value"
        @input="updateValue"
        @blur="validate"
      />
    </div>

    <div v-else-if="label === 'Tipo de documento'" class="group">
      <label>{{ label }}</label>
      <DropdownForm
        options="C"
        :placeholder="placeholder"
        :value="value"
        @input="validateEmail"
        @blur="validate"
      />
    </div>

    <div v-else-if="label === 'Email'" class="group">
      <label>{{ label }}</label>
      <InputTextForm
        :placeholder="placeholder"
        :value="value"
        @input="updateValue"
        @blur="validateEmail"
        @click="$emit('click')"
      />
      <Text
        v-if="!isValidEmail"
        class="error-message"
        :text="'Por favor, ingresa un correo electrónico válido.'"
      />
    </div>

    <div v-else class="group">
      <label>{{ label }}</label>
      <InputTextForm
        :placeholder="placeholder"
        :value="value"
        @input="updateValue"
        @blur="validate"
      />
    </div>

    <Text class="error-message" :text="error" />
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
