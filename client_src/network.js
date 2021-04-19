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
    core.game.x = data.x,
    core.game.y = data.y,

    core.game.health = data.health;
    core.game.isLocked = data.isLocked;
    core.game.charge = charge;

    core.game.scrx = -utils.cosLow(data.angle) * data.speed;
    core.game.scry = -utils.sinLow(data.angle) * data.speed;

    core.game.angle = data.angle;
    core.game.shield = data.shield;

    core.game.disguise = data.disguise;
    core.game.trail = data.trail;

    if (core.game.docked) audio.playAudio(`sector`, 1);
    core.game.docked = false;

    core.game.empTimer--;
    core.game.gyroTimer--;
    core.game.killStreakTimer--;

    core.game.packs = data.packs;
    core.game.players = data.players;

    core.game.bases = data.bases;
    core.game.asteroids = data.asteroids;

    core.game.beams = data.beams;
    core.game.blasts = data.blasts;

    core.game.missiles = data.missiles;
    core.game.orbs = data.orbs;

    core.game.mines = data.mines;
    core.game.vortexes = data.vortexes;

    if (core.game.sx !== data.game.sx || core.game.sy !== data.game.sy) {
        core.game.sx = data.sx;
        core.game.sy = data.sy;

        audio.playAudio(`sector`, 1);
        // r3DMap();
    }
    clearBullets();
});

socket.on(`update`, (data) => {
    core.game.uframes++;
    core.game.tick++;

    core.game.isLocked = data.isLocked;
    core.game.charge = data.charge;

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

    core.game.empTimer--;
    core.game.gyroTimer--;
    core.game.killStreakTimer--;
});

socket.on(`player_create`, (data) => {
    core.game.players[data.id] = data;
});

socket.on(`player_delete`, (data) => {
    delete core.game.players[data];
});

socket.on(`pack_create`, (data) => {
    core.game.packs[data.id] = data.pack;
});

socket.on(`pack_delete`, (data) => {
    delete core.game.packs[data.id];
});

socket.on(`vort_create`, (data) => {
    core.game.vortexes[data.id] = data.pack;
});

socket.on(`vort_delete`, (data) => {
    delete core.game.vortexes[data];
});

socket.on(`mine_create`, (data) => {
    core.game.mines[data.id] = data.pack;
});

socket.on(`mine_delete`, (data) => {
    delete core.game.mines[data.id];
});

socket.on(`beam_create`, (data) => {
    core.game.beams[data.id] = data.pack;
});

socket.on(`beam_delete`, (data) => {
    delete core.game.beams[data.id];
});

socket.on(`blast_create`, (data) => {
    core.game.blasts[data.id] = data.pack;
});

socket.on(`blast_delete`, (data) => {
    delete core.game.blasts[data.id];
});

socket.on(`orb_create`, (data) => {
    core.game.orbs[data.id] = data.pack;
});

socket.on(`orb_delete`, (data) => {
    delete core.game.orbs[data.id];
});

socket.on(`asteroid_create`, (data) => {
    core.game.asteroids[data.id] = data.pack;
});

socket.on(`asteroid_delete`, (data) => {
    delete core.game.asteroids[data.id];
});

socket.on(`missile_create`, (data) => {
    core.game.missiles[data.id] = data.pack;
});

socket.on(`missile_delete`, (data) => {
    delete core.game.missiles[data.id];
});

socket.on(`base_create`, (data) => {
    core.game.bases = data;
});

socket.on(`base_delete`, () => {
    core.game.bases = null;
});

const clearBullets = () => {
    core.game.bullets = {};
};

module.exports = {
    connect,
    sendAPI
};
