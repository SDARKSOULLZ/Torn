import * as React from 'react';

import socket from '../../utils/socket';

class ChatInput extends React.Component<{}, { value: string, activated: boolean }> {
    chatRef: any;

    constructor (props) {
        super(props);

        this.state = {
            value: ``,
            activated: false
        };
    }
    
    focusChat = () => {
        this.chatRef.focus();
    }

    unfocusChat = () => {
        this.chatRef.blur();
    }

    init = (data: { value: string, activated: boolean }) => {
        this.setState(data);
    }

    activate = () => {
        this.setState({
            value: this.state.value,
            activated: true
        });
    }
    
    keypress = (event: KeyboardEvent) => {
        if (event.key === `Enter`) {
            this.unfocusChat();

            const val = this.state.value;

            socket.emit(`chat`, { msg: val });
            this.setState({ value: `` });

            // whatever this does
            // setTimeout(global.stopTyping, 50);
        }
    }

    change = (event) => {
        this.setState({ value: event.target.value });
    }

    render = () => {
        return this.state.activated
            ? (
                <input
                    className="chat-input"
                    ref={this.chatRef}
                    maxLength={128}
                    onKeyDown={this.keypress.bind(this)}
                    onChange={this.change.bind(this)}
                    value={this.state.value}
                    placeholder="Press enter to chat!"
                    type="text"
                />
            )
            : null;
    }
}

export default ChatInput;
