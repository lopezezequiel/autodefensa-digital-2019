import { ActionEnum } from "../enum/ActionEnum";

export interface ActionInterface {
    type: ActionEnum,
    payload: any
}