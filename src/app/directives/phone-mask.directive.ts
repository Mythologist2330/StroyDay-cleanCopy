import { Directive, HostListener } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
  selector: '[formControlName][appPhoneMask]',
})
export class PhoneMaskDirective {

  constructor(public ngControl: NgControl) { }

  @HostListener('ngModelChange', ['$event'])
  onModelChange(event) {
    this.onInputChange(event, false);
  }

  @HostListener('keydown.backspace', ['$event'])
  keydownBackspace(event) {
    this.onInputChange(event.target.value, true);
  }
  

  onInputChange(event, backspace) {
    let newVal = event.replace(/\D/g, '');
    if (newVal.length === 0) {
      newVal = '';
    }
    else if (newVal.length === 1) {
      newVal = newVal.replace(/^(\d{0,1})/, '+7');
    } else if (newVal.length <= 4 ) {
      newVal = newVal.replace(/^(\d{0,1})(\d{0,3})/, '+7 ($2');
    } else if (newVal.length <= 7) {
      newVal = newVal.replace(/^(\d{0,1})(\d{0,3})(\d{0,3})/, '+7 ($2) $3');
    } else if (newVal.length <= 9) {
      newVal = newVal.replace(/^(\d{0,1})(\d{0,3})(\d{0,3})(\d{0,2})/, '+7 ($2) $3-$4');
    } else {
      newVal = newVal.substring(0, 11);
      newVal = newVal.replace(/^(\d{0,1})(\d{0,3})(\d{0,3})(\d{0,2})(\d{0,2})/, '+7 ($2) $3-$4-$5');
    }
    this.ngControl.valueAccessor.writeValue(newVal);
    console.log(newVal);
  }
}
