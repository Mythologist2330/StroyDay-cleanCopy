import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { CdkTreeModule } from '@angular/cdk/tree';
import { DragDropModule } from '@angular/cdk/drag-drop';

const materialComponent = [
    MatIconModule,
    CdkTreeModule,
    DragDropModule
]

@NgModule({
  imports: [materialComponent],
  exports: [materialComponent],
})
export class MaterialModule { }
