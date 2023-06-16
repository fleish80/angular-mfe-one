import { Component, OnInit, Optional, inject } from '@angular/core';
import { Observable } from 'rxjs';
import {
  ShareLibService,
  SharedPlatformService,
  SharedRootService,
} from 'share-lib';
@Component({
  selector: 'app-mfe-home',
  template: `
    <p>mfe-home works! eee</p>

    <ul>
      <li><button (click)="sendData()">Send data to shared service</button></li>
      <li>
        <button (click)="sendText()">Send data to platform service</button>
      </li>
      <li><button (click)="sendToRoot()">Send data to root service</button></li>
    </ul>
    <ul>
      <li>{{ sharedText$ | async }}</li>
      <li>{{ platformText$ | async }}</li>
      <li>{{ rootText$ | async }}</li>
    </ul>
  `,
  styles: [],
})
export class MfeHomeComponent {
  #shareLibService = inject(ShareLibService);
  #sharedPlatformService = inject(SharedPlatformService);
  #sharedRootService = inject(SharedRootService);

  sharedText$ = this.#shareLibService.text$;
  platformText$ = this.#sharedPlatformService.text$;
  rootText$ = this.#sharedRootService.text$;

  sendData() {
    this.#shareLibService.addName('mfe one');
  }

  sendText() {
    this.#sharedPlatformService.addName('mfe one');
  }

  sendToRoot() {
    this.#sharedRootService.addName('mfe one');
  }
}
