import * as React from 'react';

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

    removeMsg = (id: number) => {
        this.setState({ messages: this.state.messages.filter(message => message.id !== id) });
    }

    chat = (data: any) => {
        this.setState({ messages: this.state.messages.concat(data) });
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
            </div>
        );
    }
}

export default Chat;
