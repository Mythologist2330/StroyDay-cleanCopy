import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { CdkTreeModule } from '@angular/cdk/tree';

const materialComponent = [
    MatIconModule,
    CdkTreeModule
]

@NgModule({
  imports: [materialComponent],
  exports: [materialComponent],
})
export class MaterialModule { }
