<script>
// Components
import Form from './SignUpForm.vue'
import SuccessfulSignUp from './SuccessfullSignUp.vue'
import Logo from '@/components/logo/logo.vue'

import { reactive, watch } from 'vue'
import debounce from 'lodash.debounce'

export default {
  components: {
    Form,
    SuccessfulSignUp,
    Logo
  },
  setup() {
    const state = reactive({
      succed: false
    })

    const handleSucced = (val) => {
      state.succed = val
    }

    return {
      state,
      handleSucced
    }
  }
}
</script>

<template>
  <div class="higherContainer">
    <Logo />

    <Form v-if="!state.succed" @succed="handleSucced" />

    <SuccessfulSignUp v-else />
  </div>
</template>

<style>
.higherContainer {
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;
  font-family: Poppins;
  background: #f2ce63;
}
</style>
