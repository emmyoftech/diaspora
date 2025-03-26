import { Directive, forwardRef } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[appEmailFormatValidator]',
  standalone: true,
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: EmailFormatValidatorDirective,
      multi: true
    }
  ]
})
export class EmailFormatValidatorDirective implements Validator{

  constructor() { }

  validate(control: AbstractControl): ValidationErrors | null {
    const value = control.value as string

    if(!value) return null

    if(value.includes("@"))
      return null
    else return {inalidEmailFormaat: true}
  }
}
