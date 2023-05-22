import { RequestTypes, ResponseStatus } from 'core/enums';
import { GeneralResponse } from './../models/general-response';
import { Messages, Users } from 'core/constants';
import { IUser } from 'core/models';

export class ResponseHandler {
  static processResponse<T>(data:T, status:ResponseStatus, type: RequestTypes): GeneralResponse<T, string> {
    return {
      data,
      status,
      metadata: Messages[status][type]
    }
  }

  static updateUser(data:IUser, id:number): GeneralResponse<IUser, string> {
    const index = Users.findIndex((user:IUser) => user.id === id);
    Users[index] = {...Users[index], ...data}
    return {
      data: Users[index],
      status: ResponseStatus.SUCCESS,
      metadata: Messages[ResponseStatus.SUCCESS][RequestTypes.PROFILE_UPDATE]
    }
  }

}
