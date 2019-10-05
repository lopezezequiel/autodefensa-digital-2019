import { StateInterface } from "../interfaces/StateInterface";
import { ActionInterface } from "../interfaces/ActionInterface";
import { ActionEnum } from "../enum/ActionEnum";

const defaultState = {
    messages: [
        {
            topic: "Phishing",
            data: {
                url: "http://test.com",
                inputs: [
                    { name: "username", value:"lopezezequiel" },
                    { name: "clave", value:"1234456" },
                ]
            }
        }
    ]
}

export default (state: StateInterface = defaultState, action: ActionInterface) => {
    switch(action.type) {
        case ActionEnum.ADD_MESSAGE:
            return {
                ...state,
                messages: [
                    ...state.messages,
                    action.payload
                ]
            }
    }
}