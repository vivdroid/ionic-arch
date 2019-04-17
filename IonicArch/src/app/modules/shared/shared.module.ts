import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { TruncatePipe } from './../../shared/pipes/';
import { LoaderComponent } from './../../components';


@NgModule({
  declarations: [TruncatePipe, LoaderComponent],
  imports: [
    IonicModule,
    CommonModule,
  ],
  exports: [TruncatePipe, LoaderComponent]
})
export class SharedModule { }
