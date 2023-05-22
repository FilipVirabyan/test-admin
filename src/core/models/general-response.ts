import {ResponseStatus} from "../enums/index";

export interface GeneralResponse<T = null,K = null> {
  status: ResponseStatus;
  data: T;
  metadata: K;
}
