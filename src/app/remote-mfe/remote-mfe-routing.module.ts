import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MfeHomeComponent } from './mfe-home/mfe-home.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: MfeHomeComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class RemoteMfeRouingModule { }
