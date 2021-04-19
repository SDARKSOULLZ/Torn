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

module.exports = {
    connect,
    sendAPI
};
