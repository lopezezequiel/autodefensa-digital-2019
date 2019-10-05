import React, { Component } from "react";
import { MessagePropsInterface } from "./MessagePropsInterface";
import { TableCell, Table, TableBody, TableRow, Paper } from "@material-ui/core";
import ReactJson from 'react-json-view';

export class Message extends Component<MessagePropsInterface> {
    render() {

        const data = this.props.data;

        return (
            <ReactJson src={data} collapsed={this.props.collapsed} theme="isotope"/>
        ); 
    }
}