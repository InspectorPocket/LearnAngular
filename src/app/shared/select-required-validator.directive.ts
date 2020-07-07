import { Directive, Input } from "@angular/core";
import { Validator, AbstractControl, NG_VALIDATORS } from "@angular/forms";

@Directive ({
    selector: '[appSelectValidator]',
    providers: [{
        provide: NG_VALIDATORS, // Grabs angulars existing validator functionality
        useExisting: SelectRequiredValidatorDirective, // Allows you to pass your own custom validator
        multi: true // Signals angular to use custom provider
    }]
})
export class SelectRequiredValidatorDirective implements Validator {
    @Input('appSelectValidator') defaultValue: string;
    validate(control: AbstractControl): { [key: string]: any } | null {
        return control.value === this.defaultValue ? { 'defaultSelected': true } : null;
    }
}
