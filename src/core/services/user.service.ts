import { of, Observable, throwError } from 'rxjs';
import { Injectable } from '@angular/core'
import { GeneralResponse, IUser } from 'core/models';
import { ResponseHandler } from 'core/helpers';
import { RequestTypes, ResponseStatus } from 'core/enums';

@Injectable({ providedIn: 'root' })
export class UserService {
    
    public updateUser(user: IUser, id:number):Observable<GeneralResponse<IUser, string>>{
        if(user.firstName.length === 1 ||  user.lastName.length === 1){
            return throwError(()=> ResponseHandler.processResponse<null>(null, ResponseStatus.FAILURE, RequestTypes.PROFILE_NAME_LENGTH));
        }

        return of(ResponseHandler.updateUser(user, id))
    }
}
