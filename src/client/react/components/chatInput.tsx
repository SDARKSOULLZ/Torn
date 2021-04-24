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
    
    keypress = (event) => {
        if (event.key === `Enter`) {
            this.unfocusChat();

            const val = this.state.value;

            socket.emit(`chat`, { })
        }
    }
}
