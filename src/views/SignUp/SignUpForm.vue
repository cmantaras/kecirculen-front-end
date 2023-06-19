<script>
// Styles
import InputText from 'primevue/inputtext'
import Message from 'primevue/message'
import ProgressSpinner from 'primevue/progressspinner'

// Components
import InputForm from '@/components/formComponents/input.vue'
import ButtonForm from '@/components/formComponents/button.vue'
import Title from '@/components/Texts/title.vue'
import Text from '@/components/Texts/text.vue'

import { watch, reactive } from 'vue'
import { isStrongPassword, isEmail, isLength } from 'validator'
import debounce from 'lodash.debounce'
import { toRefs } from 'vue'
import axios from 'axios'

import 'bootstrap'

export default {
  components: {
    InputForm,
    Title,
    ButtonForm,
    Message,
    Text,
    ProgressSpinner
  },
  setup(props, { emit }) {
    const state = reactive({
      loading: false,
      createdSuccessfully: false,
      failed: false
    })
    let form = reactive({
      username: '',
      email: '',
      password: '',
      repeatPassword: '',
      roles: ['admin']
    })
    let valid = reactive({
      username: true,
      email: true,
      password: true,
      repeatPassword: true
    })

    let submit = async () => {
      state.loading = true
      try {
        await axios.post('http://localhost:3000/api/signup', form, {
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
          }
        })
        state.loading = false
        emit('succed', true)
      } catch (error) {
        state.loading = false
        state.failed = true
        console.log(error)
      } finally {
        setTimeout(() => {
          state.failed = false
        }, 5000)
      }
    }

    let validateUsername = (val) => {
      valid.username = isLength(val, { min: 2, max: 20 })
    }

    let validateEmail = (isValid) => {
      valid.email = isEmail(isValid)
    }

    let validatePassword = (isValid) => {
      valid.password = isStrongPassword(isValid)
    }

    let validateRepeatPassword = (val) => {
      valid.repeatPassword = form.password === val
    }

    let validateSubmit = () => {
      const emptyFields = Object.values(form).some((value) => value === '')
      const invalidFields = Object.values(valid).some((value) => value === false)

      return !emptyFields && !invalidFields
    }

    watch(
      form,
      debounce(() => {
        console.log('asd')
      }, 1000)
    )

    return {
      form,
      valid,
      state,
      submit,
      validateUsername,
      validateEmail,
      validatePassword,
      validateRepeatPassword,
      validateSubmit
    }
  }
}
</script>

<template>
  <div class="formContainer">
    <Title :title="'Crear una cuenta nueva'" />

    <div>
      <InputForm
        label="Usuario"
        placeholder="Usuario"
        :value="form.username"
        @inputValue="form.username = $event"
        @handleUsername="validateUsername"
      />
      <Text
        v-if="!valid.username"
        class="error-message"
        :text="'El campo no puede tener menos de 2 o más de 20 caracteres'"
      />
    </div>

    <div>
      <InputForm
        label="Email"
        placeholder="Email"
        :value="form.email"
        @inputValue="form.email = $event"
        @handleEmail="validateEmail"
      />
      <Text
        v-if="!valid.email"
        class="error-message"
        :text="'Por favor, ingresa un correo electrónico válido.'"
      />
    </div>

    <div>
      <InputForm
        label="Password"
        placeholder="Password"
        :value="form.password"
        @inputValue="form.password = $event"
        @handlePassword="validatePassword"
      />
      <Text
        v-if="!valid.password"
        class="error-message"
        :text="'La contraseña debe tener al menos 8 caracteres, 1 carácter especial y 1 número.'"
      />
    </div>

    <div>
      <InputForm
        label="Repeat Password"
        placeholder="Repeat Password"
        :value="form.repeatPassword"
        :repeatValue="form.password"
        @inputValue="form.repeatPassword = $event"
        @handleRepeatPassword="validateRepeatPassword"
      />
      <Text
        v-if="!valid.repeatPassword"
        class="error-message"
        :text="'Las contraseñas no coinciden'"
      />
    </div>

    <div v-if="state.loading">
      <div class="card flex justify-content-center" style="border: none">
        <ProgressSpinner
          style="width: 50px; height: 50px"
          strokeWidth="8"
          fill="var(--surface-ground)"
          animationDuration=".5s"
          aria-label="Custom ProgressSpinner"
        />
      </div>
    </div>
    <div v-else>
      <ButtonForm v-if="validateSubmit()" label="Crear cuenta" :onClick="submit" />

      <ButtonForm v-else label="Crear cuenta" disabled />
    </div>

    <div v-if="state.failed">
      <Message :closable="false" severity="error"
        >Por favor verifique los datos ingresados.</Message
      >
    </div>
  </div>
</template>

<style>
.formContainer {
  display: flex;
  flex-direction: column;
  background: white;
  width: 423px;
  border-radius: 40px;
  padding: 50px;
  margin-top: auto;
  margin-bottom: auto;
  align-self: center;
}
</style>
