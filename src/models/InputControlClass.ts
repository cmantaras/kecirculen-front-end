type ValidatorFn = (value: string) => string[]

export default class InputControl {
      private _value : string;
      private _validators : ValidatorFn[];
      errors : string[];

      public set value(value: string) {
        this._value = value;
        this.setErrors();
      }

      public get value() {
        return this._value;
      }

      isValid(): boolean {
        return !this.errors.some(str => !!str) && this._value !== ''
      }

      addError(error : string) : void{
        this.setErrors()
        this.errors = [...this.errors, error]
      }
      
      setErrors() { 
        this.errors = []
        this._validators.forEach((func) => {
          this.errors = [...this.errors, ...func(this.value) ]
        })
      }
 
      constructor(value : string, validators: ValidatorFn[]){
        this._value = value
        this._validators = validators.length > 0 ? validators : [];
        this.errors = []
      }
}