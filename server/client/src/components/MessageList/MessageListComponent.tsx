import React, { Component } from "react";
import { MessageListPropsInterface } from "./MessageListPropsInterface";
import { withStyles } from "@material-ui/styles";
import { MessageListStyles } from "./MessageListStyles";
import { MessageInterface } from "../../interfaces/MessageInterface";
import messageService from "../../services/messageService";
import { Container } from "@material-ui/core";
import { Message } from "../Message/MessageComponent";
import { MessageListStateInterface } from "./MessageListStateInterface";

export class MessageListComponent extends Component<MessageListPropsInterface, MessageListStateInterface> {

    constructor(props: MessageListPropsInterface) {
        super(props);
        this.state = {
            messages: []
        }
    }


    async componentWillMount() {
        messageService.subscribe(this.props.match.params.key, (message: Object) => {

            this.setState({
                messages: [
                    ...this.state.messages,
                    message
                ]
            })
        });
    }


    render() {

        const messages = this.state.messages;
        const classes = this.props.classes;

        return (
            <Container>
                <h1 className={classes.title}>{this.props.match.params.key}</h1>
                {messages.map( (message, index) => 
                    <Message key={index} data={message} collapsed={index+1 !== messages.length}></Message>)
                }
            </Container>
        );
    }
}

export const MessageList = withStyles(MessageListStyles)(MessageListComponent);
