import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { TruncatePipe } from './../../shared/pipes/';
import { LoaderComponent } from './../../shared/components';

const COMPONENTS = [
  LoaderComponent
]

const PIPES = [
  TruncatePipe
]

@NgModule({
  declarations: [COMPONENTS, PIPES],
  imports: [
    IonicModule,
    CommonModule,
  ],
  exports: [COMPONENTS, PIPES]
})
export class SharedModule { }
