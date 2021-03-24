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
    if (backspace && newVal.length <= 12) {
      newVal = newVal.substring(0, newVal.length - 1);
    }
    if (newVal.length === 0) {
      newVal = '';
    }
    else if (newVal.length === 1) {
      newVal = newVal.replace(/^(\d{0,1})/, '+7');
    } else if (newVal.length <= 5) {
      newVal = newVal.replace(/^(\d{0,1})(\d{0,3})/, '+7 ($2)');
    } else if (newVal.length <= 6) {
      newVal = newVal.replace(/^(\d{0,1})(\d{0,3})(\d{0,3})/, '+7 ($2) ($3)');
    } else if (newVal.length <= 10) {
      newVal = newVal.replace(/^(\d{0,1})(\d{0,3})(\d{0,3})(\d{0,4})/, '+7 ($2) ($3) $4');
    } else {
      newVal = newVal.substring(0, 11);
      newVal = newVal.replace(/^(\d{0,1})(\d{0,3})(\d{0,3})(\d{0,4})/, '+7 ($2) ($3) $4');
    }
    this.ngControl.valueAccessor.writeValue(newVal);
  }
}