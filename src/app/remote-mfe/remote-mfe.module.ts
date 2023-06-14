import { NgModule } from '@angular/core';
import { MfeHomeComponent } from './mfe-home/mfe-home.component';
import { RemoteMfeRouingModule } from './remote-mfe-routing.module';
import { MfeFragmentComponent } from './mfe-fragment/mfe-fragment.component';
import { CommonModule } from '@angular/common';
import { ShareLibModule } from 'share-lib';

@NgModule({
  declarations: [
    MfeHomeComponent,
    MfeFragmentComponent
  ],
  imports: [
    RemoteMfeRouingModule,
    CommonModule
  ]
})
export class RemoteMfeModule { }
