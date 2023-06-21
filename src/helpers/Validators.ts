import { isLength, isEmail  } from 'validator'
//TODO: implementar validaciones de isLength y isEmail con regex

let isRequired = (value : string) => {
    return !value ? [] : empty
} 

let isSamePassword = (password : string, repeatPassword : string) => {
    return !(password === repeatPassword) ? [ VALIDATIONS_MESSAGE.DIFF_PASSWORDS ] : empty
}

let validateEmail = (value : string) => {
    return !isEmail(value) ? [VALIDATIONS_MESSAGE.INVALID_EMAIL] : empty
}

let validateUsername  = (value : string) => {
    return !isLength(value, { min: 2, max: 20 }) ? [VALIDATIONS_MESSAGE.INVALID_NAME] : empty
}

const empty = ['']

function validatePassword(value : string){
    let arrError = []

    if(!REGEX.AT_LEAST_ONE_MAYUS.test(value))
        arrError.push(VALIDATIONS_MESSAGE.AT_LEAST_ONE_MAYUS)
    
    if(!REGEX.AT_LEAST_ONE_MINUS.test(value))
        arrError.push(VALIDATIONS_MESSAGE.AT_LEAST_ONE_MINUS)                       

    if(!REGEX.AT_LEAST_ONE_NUMBER.test(value))
        arrError.push(VALIDATIONS_MESSAGE.AT_LEAST_ONE_NUMBER)

    if(!REGEX.AT_LEAST_ONE_SPECIAL_CHAR.test(value))
        arrError.push(VALIDATIONS_MESSAGE.AT_LEAST_ONE_SPECIAL_CHAR)                 
    
    if(!REGEX.AT_LEAST_EIGHT_DIGITS.test(value))                                                                                                     
        arrError.push(VALIDATIONS_MESSAGE.AT_LEAST_EIGHT_DIGITS)
        
    return arrError
}

const REGEX = {
    AT_LEAST_ONE_MAYUS: /(?=.*[A-Z])/,
    AT_LEAST_ONE_MINUS : /(?=.*[a-z])/,
    AT_LEAST_ONE_NUMBER : /(?=.*[0-9])/, 
    AT_LEAST_ONE_SPECIAL_CHAR : /(?=.*[\W])/, 
    AT_LEAST_EIGHT_DIGITS : /(?=.{8,})/,
}

const VALIDATIONS_MESSAGE = {
    DIFF_PASSWORDS :            'Las contraseñas no coinciden',
    REQUIRED_FIELD :            'El campo es requerido',
    INVALID_NAME :              'El nombre debe contener al menos de 2 carácteres',
    INVALID_EMAIL :             'El email es incorrecto',
    AT_LEAST_ONE_MAYUS:         'La contraseña debe tener al menos una mayúsucula',
    AT_LEAST_ONE_MINUS :        'La contraseña debe tener al menos una minúscula',
    AT_LEAST_ONE_NUMBER :       'La contraseña debe tener al menos un número', 
    AT_LEAST_ONE_SPECIAL_CHAR : 'La contraseña debe tener al menos un carácter especial', 
    AT_LEAST_EIGHT_DIGITS :     'La contraseña debe tener al menos 8 dígitos',
}

export const Validators = {
    isSamePassword,
    validateEmail,
    validateUsername,
    validatePassword,
    isRequired
}