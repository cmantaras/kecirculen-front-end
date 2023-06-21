import { defineStore } from 'pinia'
import axios, { type AxiosRequestConfig } from 'axios'

const headers : AxiosRequestConfig  = {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
}

interface EmailResponse {
  message : string,
  emailavailable : boolean
}

interface SignUpState {
  emailResponse : EmailResponse,
  emailLoading : boolean,
  loadingSubmit : boolean
  signupSucces : boolean
}

//TODO: add env
const API_URL = 'https://kecirculen-api.azurewebsites.net/api/auth'
export const useSignupStore = defineStore('counter', {
    state: () : SignUpState => ({ 
        emailResponse : { emailavailable : true, message : '' },
        emailLoading : false,
        loadingSubmit: false,
        signupSucces : false,
    }),
    getters: {
      getLoading: (state) => state.loadingSubmit,
      getEmailLoading: (state) => state.emailLoading,
      getEmailResponse: (state) => state.emailResponse,
    },
    actions: {
      signUp(data : any) {
        this.loadingSubmit = true;
        this.signupSucces = false;
        axios.post(`${API_URL}/signup`, { ...data, roles : ['admin'] }, headers)
        .then(() => {
          this.signupSucces = true 
        })
        .finally(() => 
            this.loadingSubmit = false
        )
      },
      checkEmailAvailable(email : string) {
        this.emailLoading = true
        axios.post(`${API_URL}/emailavailable`, { email }, headers)
        .then(({data}) => this.emailResponse = data )
        .finally(() => 
            this.emailLoading = false
        )
      }
    },
  })