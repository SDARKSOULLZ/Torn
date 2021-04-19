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

import { jsn, translate } from './localizer.ts';

const core = require(`./core.js`);
const socket = require(`./utils/socket.js`);

const connect = () => {
    if (socket.connected) return;
    socket.open();
};

const sendAPI = async (endpoint, data) => await fetch(core.API_URL + endpoint, {
    method: `POST`,
    body: data,
    headers: { 'Content-Type': `x-www-form-urlencoded` }
});

socket.on(`connect_error`, (err) => {
    if (core.loggedIn) alert(`Failed to connect to the Torn servers. This probably either means they are down or your firewall is blocking the request.`);
    else alert(`There's been an issue and your connection to Torn has been interrupted. You should be able to reload and get back right into the game`);

    console.error(`Socket connection terminated unexpectedly: ${err}`);
    return socket.close();
});

// Packet handling.
socket.on(`posUp`, (data) => {

});

module.exports = {
    connect,
    sendAPI
};
