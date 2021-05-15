/*
Copyright (C) 2021  torn.space (https://torn.space)

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU Affero General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU Affero General Public License for more details.

You should have received a copy of the GNU Affero General Public License
along with this program.  If not, see <http://www.gnu.org/licenses/>.
*/

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

    render = () => this.state.activated
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
        : null
}

export default ChatInput;
