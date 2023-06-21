<script setup lang="ts">
// @ts-ignore
import debounce  from 'lodash.debounce'
// Components
import ProgressSpinner from 'primevue/progressspinner'
import InputForm from '@/components/form/input.vue'
import Title from '@/components/labels/title.vue'
import YellowButton from '@/components/buttons/yellowButton.vue'
import InputControl from '../../models/InputControlClass'
import { Validators } from '../../helpers/Validators'
import { reactive, watch, onBeforeMount } from 'vue'
import { useSignupStore } from '@/stores/signup'
import { useToast } from "primevue/usetoast";

import 'bootstrap'

    const toast = useToast();

    //store
    const store = useSignupStore()

    //FORM  
    let form = reactive({
      username: new InputControl('', [ Validators.validateUsername, Validators.isRequired ]),
      email : new InputControl('', [ Validators.validateEmail, Validators.isRequired ]),
      password: new InputControl('', [ Validators.validatePassword, Validators.isRequired ]),
      repeatPassword: new InputControl('', [ Validators.isRequired ]),
    })

    //ON init
    onBeforeMount(() => {
      watchEmail();
      watchPasswords();
      watchEmailResponse();
      watchSignupResponse();

    })

    //Form Methods
    //TODO: Estos metodos de formulario pueden ser parte de una clase
    function getFormValues(){
      const { email, password, username } = form
      return { 
        email : email.value,
        password : password.value,
        username : username.value
      }
    }

    function resetForm(){
      const { email, password, repeatPassword, username } = form
      email.value = '';
      email.errors = [];
      password.value = '';
      password.errors = [];
      username.value = '';
      username.errors = [];
      repeatPassword.value = '';
      repeatPassword.errors = [];
    }

    function isFormValid() {
      return Object.values(form).every((input) => input.isValid());
    }

    function formHasEmptyField() {
      return Object.values(form).some((input) => input.value === '')
    }

    function submit() {
      store.signUp(getFormValues())
    }

    //WATCHERS
    function watchEmailResponse(){
      watch(()=> store.emailResponse, 
            () => { 
              form.email.addError(store.emailResponse.message)
            });
    }

    function watchSignupResponse(){
      watch(()=> store.signupSucces, 
            () => { 
              if(store.signupSucces) {
                toast.add({ severity : 'success', summary: 'Crear cuenta', detail: 'El usuario fue creado con éxito!', life: 3000 })
                resetForm()
              }
      });
    }

    function watchEmail(){
      const { email } = form
      watch(()=> email.value, debounce(() => {
        if(email.isValid())
            store.checkEmailAvailable(email.value)
      }, 300));
    }

    function watchPasswords(){
      const { password, repeatPassword } = form
      watch(()=> [password.value, repeatPassword.value], () => {

        if( password.value && repeatPassword.value ){

          const [error] = Validators.isSamePassword(password.value, repeatPassword.value)
          repeatPassword.addError(error)
        }
      });
    }
 
</script>

<template>

  <div class="formContainer">
    <Title :title="'Crear una cuenta nueva'" />

    <div>
      <InputForm
        label="Nombre"
        placeholder="Nombre"
        :type="'text'"
        :valueInput="form.username.value"
        :errors="form.username.errors"
        @eventInput="($event : string) => form.username.value = $event"
      />
    </div>

    <div>
      <InputForm
        label="Email"
        placeholder="Email"
        :type="'text'"
        :errors="form.email.errors"
        :valueInput="form.email.value"
        :loading="store.getEmailLoading"
        @eventInput="($event : string) => form.email.value = $event"
      />
    </div>

    <div>
      <InputForm
        label="Contraseña"
        placeholder="Contraseña"
        :type="'password'"
        :errors="form.password.errors"
        :valueInput="form.password.value"
        @eventInput="($event : string) => form.password.value = $event"
      />
    </div>

    <div>
      <InputForm
        label="Repetir contraseña"
        placeholder="Repetir contraseña"
        :type="'password'"
        :errors="form.repeatPassword.errors"
        :valueInput="form.repeatPassword.value"
        @eventInput="($event : string) => form.repeatPassword.value = $event"
      />
    </div>

    
    <div v-if="store.loadingSubmit">
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
        <YellowButton 
          label="Crear cuenta" 
          :disabled="(!isFormValid() || formHasEmptyField())" 
          @onClick="submit()"
        />
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
