export interface IUser{
    id:number;
    email: string;
    firstName: string;
    lastName: string;
    phone: string;
    url: string;
    password:string;
    role?:string;
}