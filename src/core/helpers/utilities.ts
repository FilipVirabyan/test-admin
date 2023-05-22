import { Users } from "core/constants";
import { ROLES } from "core/constants/roles.constant";
import { IUser } from "core/models";

export class Utilities{

    static getRandomRole(): string {
        const randomDecimal = Math.random();
    
        const randomInRange = randomDecimal * ROLES.length;
      
        const randomInteger = Math.floor(randomInRange);

        return ROLES[randomInteger]
    
    }
   
    static getUserByMail(email:string): IUser{
        return Users.find( user => user.email === email)!
    }
}