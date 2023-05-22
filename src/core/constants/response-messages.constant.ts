import { RequestTypes, ResponseStatus } from "core/enums";

export const Messages = {
    [ResponseStatus.SUCCESS]:{
        [RequestTypes.PROFILE_UPDATE as string]: "Profile Successfully Updated",
        [RequestTypes.LOGIN as string]: "Success"
    },
    [ResponseStatus.FAILURE]:{
        [RequestTypes.PROFILE_NAME_LENGTH as string]: "Name Should Be Longer",
        [RequestTypes.LOGIN as string]: "Wrong email or password"
    }
};