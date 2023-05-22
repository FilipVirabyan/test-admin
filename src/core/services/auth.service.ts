import { Injectable } from '@angular/core'
import { Users } from 'core/constants';
import { RequestTypes, ResponseStatus } from 'core/enums';
import { ResponseHandler } from 'core/helpers';
import { GeneralResponse, ILogin, IUser } from 'core/models';
import { Observable, of, throwError } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthService {

    public login(login:ILogin):Observable<GeneralResponse<IUser, string>> { 
        const user = Users.find(user=> user.email === login.email && user.password === login.password);
        if(user){
            return of(ResponseHandler.processResponse<IUser>(user, ResponseStatus.SUCCESS, RequestTypes.LOGIN))
        }else{
            return throwError(()=> ResponseHandler.processResponse(null, ResponseStatus.FAILURE, RequestTypes.LOGIN))
        }
    }

    public logout() { 
    }
}
