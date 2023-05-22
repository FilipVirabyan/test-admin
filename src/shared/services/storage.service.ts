import { of } from 'rxjs';
import { Injectable } from '@angular/core';
import { IUser } from 'core/models';
import { STORAGE_KEY, Users } from 'core/constants';
import { EmailConverter } from 'core/helpers';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
    constructor() { }

  get token() {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) as string)
  }

  set token(email:string) {
    const token = EmailConverter.convertEmailToToken(email)
    localStorage.setItem(STORAGE_KEY, JSON.stringify(token))
  }
}
