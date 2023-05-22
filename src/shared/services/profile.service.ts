import {BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';
import { IUser } from 'core/models';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
   profile$: BehaviorSubject<IUser> = new BehaviorSubject({} as IUser)
}
