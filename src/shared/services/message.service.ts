import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';
import { IMessage } from 'core/models';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  message:Subject<IMessage> = new Subject<IMessage>();

  constructor() { }
}
