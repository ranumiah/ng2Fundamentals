import { Directive } from '@angular/core';
// NG_VALIDATORS ==> This supports every validator in Angular 2
import { Validator, FormGroup, NG_VALIDATORS } from '@angular/forms';

@Directive({
    selector: '[validateLocation]',
    // We can register this Validator to the list of Angular 2 Validators
    // multi: true ==> With this we are telling it NOT TO REPLACE existing NG2 Validators
    // But instead via setting it true we are saying just add this to the existing NG_VALIDATORS collection
    providers: [{ provide: NG_VALIDATORS, useExisting: LocationValidator, multi: true }]
})
export class LocationValidator implements Validator {
    validate(formGroup: FormGroup): { [key: string]: any } {
        let addressControl = formGroup.controls['address'];
        let cityControl = formGroup.controls['city'];
        let countryControl = formGroup.controls['country'];
        let onlineUrlControl = (<FormGroup>formGroup.root).controls['onlineUrl'];

        if ((addressControl && addressControl.value && cityControl && cityControl.value && countryControl && countryControl.value) || (onlineUrlControl && onlineUrlControl.value)) {
            // This is telling the validation system that this is passing with no problem
            return null;
        } else {
            return { validateLocation: false };
        }
    }
} 