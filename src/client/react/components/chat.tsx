import { Component } from 'react';

class Chat extends Component<{}, { messages: any[] }> {
    constructor (props) {
        super(props);

        this.state = {
            messages: []
        };
    }

    fadeOut = (id: number) => {
        this.setState({ messages: this.state.messages.map(message => (message.id === id ? {...message, fadeOut: true } : message)) });
    }

    removeMsg = (id: number) => {
        
    }
}

export default Chat;
