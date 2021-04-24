import * as React from 'react';

import ChatInput from './chatInput';

class ChatMessage {
    msg: string;
    color: string;

    id: number;
    fadeOut: boolean;

    constructor (data) {
        this.msg = data.msg;
        this.color = data.color;

        this.id = data.id;
        this.fadeOut = false;
    }
}

class Chat extends React.Component<{}, { messages: any[] }> {
    constructor (props) {
        super(props);

        this.state = {
            messages: []
        };
    }

    fadeOut = (id: number) => {
        this.setState({ messages: this.state.messages.map(message => (message.id === id ? {...message, fadeOut: true } : message)) });
    }

    addMsg = (data: any) => {
        data.id = Math.floor(Math.random() * 999);
        this.setState({ messages: this.state.messages.concat(new ChatMessage(data)) });

        setTimeout(() => {
            this.fadeOut(data.id);
            setTimeout(() => this.removeMsg(data.id), 2e3)
        }, 6e4);
    }

    removeMsg = (id: number) => {
        this.setState({ messages: this.state.messages.filter(message => message.id !== id) });
    }

    render = () => (Element) => {
        return (
            <div className="chat">
                {
                    this.state.messages.map((message, i) => 
                        <div className={`chat-msg ${message.fadeOut ? `chat-msg-fadeout`: ``}`}
                            key={i}
                            style={{ color:
                                message.color === `red`
                                    ? `pink`
                                    : message.color === `blue`
                                        ?  `cyan`
                                        : `white` }}
                        >{message.msg}</div>)
                }
                <ChatInput />
            </div>
        );
    }
}

export default Chat;
