import { WithStyles } from "@material-ui/styles";
import { MessageListStyles } from "./MessageListStyles";
import { MessageInterface } from "../../interfaces/MessageInterface";

export interface MessageListPropsInterface extends WithStyles<typeof MessageListStyles> {
    match: {
        params: {
            key: string
        }
    }
}