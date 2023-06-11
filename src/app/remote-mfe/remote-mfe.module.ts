import { NgModule } from '@angular/core';
import { MfeHomeComponent } from './mfe-home/mfe-home.component';
import { RemoteMfeRouingModule } from './remote-mfe-routing.module';

@NgModule({
  declarations: [
    MfeHomeComponent
  ],
  imports: [
    RemoteMfeRouingModule
  ]
})
export class RemoteMfeModule { }
