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

import core from './core';
import socket from './utils/socket';

class ReactRoot extends React.Component<{}, { display: string, register: string }> {
    constructor (props) {
        super(props);

        this.state = {
            // Control what is displayed.
            display: `none`,
            register: `none`
        };
    }

    toggleDisplay = (state: string) => {
        const current = this.state;
        const val = current.display;

        if (val === state) this.turnOffDisplay();
        else this.turnOnDisplay(state);
    }

    turnOnDisplay = (state: string) => {
        this.setState({ display: state });
    }

    turnOffDisplay = () => {
        this.setState({ display: `none` });
    }
}

export default ReactRoot;
