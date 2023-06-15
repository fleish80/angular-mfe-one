import { Component, OnInit, Optional } from '@angular/core';
import { Observable } from 'rxjs';
import { ShareLibService } from 'share-lib';
@Component({
  selector: 'app-mfe-home',
  template: `
    <p>mfe-home works! eee</p>

    <ng-container *ngIf="name$ | async as name">
      {{ name }}
    </ng-container>
    <button (click)="sendData()">Send data to remote mfe</button>
  `,
  styles: [],
})
export class MfeHomeComponent implements OnInit {

  name$: Observable<string> | undefined;

  constructor(private shareLib: ShareLibService) {}

  ngOnInit(): void {
    this.name$ = this.shareLib?.name$; // subscribe to name$
  }
  
  sendData() {
    this.shareLib.addName('mfe one');
  }
}