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

const utils = require(`./utils/clientUtils.js`);
const audio = require(`./utils/audio.js`);

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
    core.px = data.x;
    core.py = data.y;

    core.health = data.health;
    core.isLocked = data.isLocked;
    core.charge = data.charge;

    core.scrx = -utils.cosLow(data.angle) * data.speed;
    core.scry = -utils.sinLow(data.angle) * data.speed;

    core.angle = data.angle;
    core.shield = data.shield;

    core.disguise = data.disguise;
    core.trail = data.trail;

    if (core.docked) audio.playAudio(`sector`, 1);
    core.docked = false;

    core.empTimer--;
    core.gyroTimer--;
    core.killStreakTimer--;

    core.packs = data.packs;
    core.players = data.players;

    core.bases = data.bases;
    core.asteroids = data.asteroids;

    core.beams = data.beams;
    core.blasts = data.blasts;

    core.missiles = data.missiles;
    core.orbs = data.orbs;

    core.mines = data.mines;
    core.vortexes = data.vortexes;

    if (core.sx !== data.game.sx || core.sy !== data.game.sy) {
        core.sx = data.sx;
        core.sy = data.sy;

        audio.playAudio(`sector`, 1);
        // r3DMap();
    }
    clearBullets();
});

socket.on(`update`, (data) => {
    core.uframes++;
    core.tick++;

    core.isLocked = data.isLocked;
    core.charge = data.charge;

    const delta = data.state;
    if (!delta) return;

    for (const player of delta.players) updatePlayer(player);
    for (const vortexes of delta.vortexes) updateVortex(vortexes);
    for (const mine of delta.mines) updateMine(mine);
    for (const beam of delta.beams) updateBeam(beam);
    for (const blast of delta.blasts) updateBlast(blast);
    for (const asteroid of delta.asteroids) updateAsteroid(asteroid);
    for (const missile of delta.missiles) updateMissile(missile);
    for (const pack of delta.packs) updatePack(pack);
    for (const orb of delta.orbs) updateOrb(orb);

    if (delta.base) for (const base of delta.bases) updateBase(base);

    updateBooms();
    updateNotes();

    updateBullets();
    updateTrails();

    core.empTimer--;
    core.gyroTimer--;
    core.killStreakTimer--;
});

socket.on(`player_create`, (data) => {
    core.players[data.id] = data;
});

socket.on(`player_delete`, (data) => {
    delete core.players[data];
});

socket.on(`pack_create`, (data) => {
    core.packs[data.id] = data.pack;
});

socket.on(`pack_delete`, (data) => {
    delete core.packs[data.id];
});

socket.on(`vort_create`, (data) => {
    core.vortexes[data.id] = data.pack;
});

socket.on(`vort_delete`, (data) => {
    delete core.vortexes[data];
});

socket.on(`mine_create`, (data) => {
    core.mines[data.id] = data.pack;
});

socket.on(`mine_delete`, (data) => {
    delete core.mines[data.id];
});

socket.on(`beam_create`, (data) => {
    core.beams[data.id] = data.pack;
});

socket.on(`beam_delete`, (data) => {
    delete core.beams[data.id];
});

socket.on(`blast_create`, (data) => {
    core.blasts[data.id] = data.pack;
});

socket.on(`blast_delete`, (data) => {
    delete core.blasts[data.id];
});

socket.on(`orb_create`, (data) => {
    core.orbs[data.id] = data.pack;
});

socket.on(`orb_delete`, (data) => {
    delete core.orbs[data.id];
});

socket.on(`asteroid_create`, (data) => {
    core.asteroids[data.id] = data.pack;
});

socket.on(`asteroid_delete`, (data) => {
    delete core.asteroids[data.id];
});

socket.on(`missile_create`, (data) => {
    core.missiles[data.id] = data.pack;
});

socket.on(`missile_delete`, (data) => {
    delete core.missiles[data.id];
});

socket.on(`base_create`, (data) => {
    core.bases = data;
});

socket.on(`base_delete`, () => {
    core.bases = null;
});

socket.on(`newBullet`, (data) => {
    core.bullets[data.id] = data;
    core.bullets[data.id].tick = 0;
});

socket.on(`delBullet`, (data) => {
    delete core.bullets[data.id];
});

socket.on(`invalidCredentials`, () => {
    core.credentialState = 1;
});

socket.on(`outdated`, () => {
    core.credentialState = 20;
});

socket.on(`badcookie`, () => {
    core.credentialState = 30;
});

const clearBullets = () => {
    core.bullets = {};
};

const updatePlayer = (data) => {
    const id = data.id;
    const delta = data.delta;

    if (core.players[id] === undefined) return;

    for (const d in delta) core.players[id][d] = delta[d];

    if (id === core.myID) {
        core.pvx = -core.px;
        core.pvy = -core.py;

        core.px = core.players[id].x;
        core.py = core.players[id].y;

        core.pvx += core.px;
        core.pvy += core.py;

        core.angle = core.players[id].angle;
        core.health = core.players[id].health;

        core.scrx = -utils.cosLow(core.angle) * core.players[id].speed;
        core.scry = -utils.cosLow(core.angle) * core.players[id].speed;

        core.disguise = delta.disguise;
    }
};

const updateVortex = (data) => {
    const id = data.id;
    if (core.vortexes[id] === undefined) return;

    const delta = data.delta;
    for (const d in delta) core.vortexes[id][d] = delta[d];
};

const updateMine = (data) => {
    const id = data.id;
    if (core.mines[id] === undefined) return;

    const delta = data.delta;
    for (const d in delta) core.mines[id][d] = delta[d];
};

const updatePack = (data) => {
    const id = data.id;
    if (core.packs[id] === undefined) return;

    const delta = data.delta;
    for (const d in delta) core.packs[id][d] = delta[d];
};

const updateBeam = (data) => {
    const id = data.id;
    if (core.beams[id] === undefined) return;

    const delta = data.delta;
    for (const d in delta) core.beams[id][d] = delta[d];
};

const updateBlast = (data) => {
    const id = data.id;
    if (core.blasts[id] === undefined) return;

    const delta = data.delta;
    for (const d in delta) core.blasts[id][d] = delta[d];
};

const updateAsteroid = (data) => {
    const id = data.id;
    if (core.asteroids[id] === undefined) return;

    const delta = data.delta;
    for (const d in delta) core.asteroids[id][d] = delta[d];
};

const updateOrb = (data) => {
    const id = data.id;
    if (core.orbs[id] === undefined) return;

    const delta = data.delta;
    for (const d in delta) core.orbs[id][d] = delta[d];
};

const updateMissile = (data) => {
    const id = data.id;
    if (core.missiles[id] === undefined) return;

    const delta = data.delta;
    for (const d in delta) core.missiles[id][d] = delta[d];
};

const updateBase = (data) => {
    if (core.bases === 0) return;

    const delta = data.delta;
    for (const d in delta) core.bases[d] = delta[d];
};

module.exports = {
    connect,
    sendAPI
};
