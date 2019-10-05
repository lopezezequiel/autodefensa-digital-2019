import { MessageInterface } from "../interfaces/MessageInterface";
import { ActionEnum } from "../enum/ActionEnum";

const addMessage = (message: MessageInterface) => {
    return {
        type: ActionEnum.ADD_MESSAGE,
        payload: message
    }
}


export default {
    addMessage
}