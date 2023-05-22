import { ResponseStatus } from "core/enums";

export interface IMessage{
    type: ResponseStatus;
    message: string;
}