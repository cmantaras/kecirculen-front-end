<script setup lang="ts">
import InputTextForm from 'primevue/inputtext'
import 'bootstrap'

  type InputType = 'text' | 'password' 

  interface Props {
    type : InputType,
    errors : string[],
    loading? : boolean,
    label: string,
    placeholder: string,
    valueInput?: string,
  }
  let touched : boolean = false
  
  const props = defineProps<Props>()

  const emit = defineEmits(['eventInput'])

  let emitInput = (event : any) => emit('eventInput', event.target.value)

  let fieldHasErrors = () => props.errors.some(d => !!d)
    
</script>
<template>
  <div class="input-field" >
    <label> {{ props.label }}</label>

      <div class="group ">
    
        <div class="d-flex ">
          <div class="w-100">
            <InputTextForm
                  class="w-100" 
                  :type="props.type"
                  :feedback="false"
                  :class="{ 
                    'p-invalid' : fieldHasErrors() && touched, 
                    'valid-field' : !fieldHasErrors() 
                                      && props.valueInput 
                                      && touched
                    }"
                  :placeholder="props.placeholder"
                  :value="props.valueInput"
                  @focusin="() => touched = true"
                  @input="emitInput"
                  />
          </div>
          <div class="p-2 flex-shrink-1 align-self-center">
            <small v-if="props.loading" class="spinner-border spinner " role="status"></small>
          </div>  
        </div>
    
      </div>

      <div v-for="item in props.errors">
          <small class="p-error"  v-if="item" >
            {{ item }}
          </small>
      </div>
  </div>
</template>

<style>
  .group {
    display: flex;
    flex-direction: column;
  }
  .p-hidden-accessible {
    display: none;
  }
  .p-error{
    font-size: 11px;
  }
  .input-field{
    margin-bottom: 15px;
  }
  .valid-field{
    border-color: green;
  }
  .spinner{
    width: 20px;
    height : 20px;
    font-size: 5px;
  }
</style>
