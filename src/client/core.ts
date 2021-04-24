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

declare const BRANCH: string;
declare const COMMITHASH: string;
declare const VERSION: string;

declare const TORN_API_URL: string;
declare const TORN_GAMESERVER_URL: string;

const core = {
    // Global variables defined by webpack.
    branch: BRANCH,
    commitHash: COMMITHASH,
    version: VERSION,

    apiURL: `${TORN_API_URL}/api`,
    gameServerURL: TORN_GAMESERVER_URL,

    // Audio / image loader storage.
    audio: [],
    images: [],

    // Audio mute handlers.
    muted: {
        music: false,
        sfx: false
    },

    // Login handler.
    login: {
        credentials: 0,
        progress: true
    },

    // Loader handler.
    everythingLoaded: false,

    // Game renderer
    canvas: document.querySelector(`canvas`),

    // Width of a sector.
    sectorWidth: 14336,

    // Client-side map hot storage.
    maps: {
        base2D: {},
        planet2D: {}
    }
};

export default core;
