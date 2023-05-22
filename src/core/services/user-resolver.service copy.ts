import { of, Observable, throwError } from 'rxjs';
import { Injectable } from '@angular/core'
import { EmailConverter, ResponseHandler, Utilities } from 'core/helpers';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { ProfileService, StorageService } from 'shared';

@Injectable({ providedIn: 'root' })
export class UserResolverService implements Resolve<any> {    
    constructor(
        private _storageService: StorageService,
        private _profileService: ProfileService
        ){}
    
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const email = EmailConverter.encodeToken(this._storageService.token)
        const user  = Utilities.getUserByMail(email)
        this._profileService.profile$.next(user);
        return of(user)
    }
}
