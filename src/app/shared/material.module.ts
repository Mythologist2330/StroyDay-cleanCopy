import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

const materialComponent = [
    MatIconModule
]

@NgModule({
  imports: [materialComponent],
  exports: [materialComponent],
})
export class MaterialModule { }
