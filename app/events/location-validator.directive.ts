import { Directive } from '@angular/core';
import { Validator, FormGroup } from '@angular/forms';

@Directive({
    selector: '[validateLocation]'
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
            return { validateLocation: false }
        }
    }
} 