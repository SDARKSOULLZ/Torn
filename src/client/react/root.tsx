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

import core from '../core';
import socket from '../utils/socket';

import Chat from './chat';
import MuteButton from './muteButton';
import MusicButton from './musicButton';
import LoginOverlay from './loginOverlay';
import Register from './register';

class ReactRoot extends React.Component<{ data: { toggleSFX: boolean, toggleMusic: boolean } }, { display: string, register: string }> {
    constructor (props) {
        super(props);

        this.state = {
            // Control what is displayed.
            display: `none`,
            register: `none`
        };
    }

    turnOnDisplay = () => {
        this.setState({ display: `LoginOverlay` });
    }

    turnOffDisplay = () => {
        this.setState({ display: `none` });
    }

    turnOnRegister = () => {
        this.setState({ register: `Register` });
    }
    
    turnOffRegister = () => {
        this.setState({ register: `none` });
    }

    render = () => (Element) => {
        return (
            <span>
                <Chat />

                <MuteButton toggleSFX={this.props.data.toggleSFX} />
                <MusicButton toggleMusic={this.props.data.toggleMusic} />

                <LoginOverlay display={this.state.display === `LoginOverlay`} />
                <Register register={this.state.register === `Register`} />
            </span>
        );
    }
}

export default ReactRoot;
