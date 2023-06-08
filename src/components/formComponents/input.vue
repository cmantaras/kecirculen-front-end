<script>
import InputTextForm from 'primevue/inputtext';
import DropdownForm from 'primevue/dropdown';
import InputMask from 'primevue/inputmask'
import {isStrongPassword, isEmail} from 'validator';

import 'bootstrap';

export default {
  props: {
    label: String,
    placeholder: String,
    value:  [String, Number]
  },
  data() {
    return {
      error: '',
      isValidEmail: true,
      isValidPassword: true,
      isValidRepeatedPassword: true,
      isValidField: true,
    };
  },
  components: {
    InputTextForm,
    DropdownForm,
    InputMask
  },
  methods: {
    updateValue(event) {
      this.$emit('input-value', event.target.value);
      this.error = '';
    },
    validate() {
      if (this.value.length <= 1) {
        this.error = 'Este campo es requerido';
        this.isValidField = false;

      } else if (this.value.length > 20) {
        this.error = 'El campo no puede tener más de 20 caracteres';
        this.isValidField = false;

      } else {
        this.error = '';
        this.isValidField = true;
      }
    },
    validateEmail() {
      this.isValidEmail = isEmail(this.value);
    },
    validatePassword() {
      this.isValidPassword = isStrongPassword(this.value);
      this.password = this.value;
      console.log(this.password)
    },
    validateRepeatPassword() {
      this.repeatPassword = this.value;
      console.log(this.repeatPassword)
      if(this.repeatPassword === this.password){
        this.isValidRepeatedPassword = true;
      }else{
        this.isValidRepeatedPassword = false;
      }
    }
  }
};
</script>

<template>
  <div>
    <div v-if="label === 'Password'" class="group">
      <label>{{ label }}</label>
      <InputTextForm type="password" :value="value" :placeholder="placeholder" @input="updateValue" @blur="validatePassword" />
      <p v-if="label === 'Password' && !isValidPassword" class="error-message">La contraseña debe tener al menos 8 caracteres, 1 carácter especial y 1 número.</p>
    </div>
    
    <div v-else-if="label === 'Repeat Password'" class="group">
      <label>{{ label }}</label>
      <InputTextForm type="password" :value="value" :placeholder="placeholder" @input="updateValue" @blur="validateRepeatPassword" />
      <p v-if="label === 'Repeat Password' && !isValidRepeatedPassword" class="error-message">Las contraseñas no coinciden</p>
    </div>

    <div v-else-if="label === 'Celular'" class="group">
      <label>{{ label }}</label>
      <InputMask mask="(99) 999-999" :placeholder="placeholder" :value="value" @input="updateValue" @blur="validate" />
    </div>

    <div v-else-if="label === 'Numero de documento'" class="group">
      <label>{{ label }}</label>
      <InputMask mask="9-999-999-9" :placeholder="placeholder" :value="value" @input="updateValue" @blur="validate" />
    </div>
    
    <div v-else-if="label === 'Tipo de documento'" class="group">
      <label>{{ label }}</label>
      <DropdownForm options="C" :placeholder="placeholder" :value="value" @input="validateEmail" @blur="validate" />
    </div>
    
    <div v-else-if="label === 'Email'" class="group">
      <label>{{ label }}</label>
      <InputTextForm :placeholder="placeholder" :value="value" @input="updateValue" @blur="validateEmail" />
      <p v-if="!isValidEmail" class="error-message">Por favor, ingresa un correo electrónico válido.</p>
    </div>
    
    <div v-else class="group">
      <label>{{ label }}</label>
      <InputTextForm :placeholder="placeholder" :value="value" @input="updateValue" @blur="validate" />
    </div>
    
    <p class="error-message">{{ error }}</p>
  </div>
</template>


<style>
.group {
  display: flex;
  flex-direction: column;
  margin: 10px 0;
}
.p-hidden-accessible {
  display: none;
}
.error-message {
  color: red;
  margin-top: 5px;
}
</style>