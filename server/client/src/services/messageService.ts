import servicesConfig from "../config/servicesConfig";
import { MessageInterface } from "../interfaces/MessageInterface";
import socketIOClient from "socket.io-client";

const url = servicesConfig.messageService.url;
var socket = socketIOClient(url);

const subscribe = (key: string, callback: Function) => {
    socket.close();
    socket = socketIOClient(url);

    socket.on('connect', () => {
        socket.emit('subscribe', key);
        socket.on('message', callback);
    })

}

export default {
    subscribe
}