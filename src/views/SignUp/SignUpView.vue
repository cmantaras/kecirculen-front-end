<script>
// Components
import Form from './SignUpForm.vue';
import SuccessfulSignUp from './SuccessfullSignUp.vue';

import { reactive, watch } from 'vue';
import debounce from 'lodash.debounce';

export default {
  components: {
    Form,
    SuccessfulSignUp
  },
  setup() {
    const state = reactive({
      succed: false
    });

    const handleSucced = (val) => {
      state.succed = val;
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
    <img src="../logo/KECIRCULENLogo.svg" alt="logo" class="logo" />

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
.logo {
  width: 150px;
  height: 50px;
  padding: 0;
  margin: 0 20px 0 0;
  align-self: flex-end;
  cursor: pointer;
}
</style>
