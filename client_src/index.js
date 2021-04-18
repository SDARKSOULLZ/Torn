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
import React from "react";
import ReactDOM from "react-dom";
import ReactRootJS from "./react.js";

import { jsn, translate } from "./localizer.ts";

`use strict`;

function printStartup () {
    console.log(`******************************************************************************************************`);
    console.log(` ▄▄▄▄▄▄▄▄▄  ▄▄▄▄▄▄▄▄▄  ▄▄▄▄▄▄▄▄▄  ▄▄      ▄     ▄▄▄▄▄▄▄▄▄  ▄▄▄▄▄▄▄▄▄  ▄▄▄▄▄▄▄▄▄  ▄▄▄▄▄▄▄▄▄  ▄▄▄▄▄▄▄▄▄ `);
    console.log(`▐░░░░░░░░░▌▐░░░░░░░░░▌▐░░░░░░░░░▌▐░░▌    ▐░▌   ▐░░░░░░░░░▌▐░░░░░░░░░▌▐░░░░░░░░░▌▐░░░░░░░░░▌▐░░░░░░░░░▌`);
    console.log(` ▀▀▀█░█▀▀▀ ▐░█▀▀▀▀▀█░▌▐░█▀▀▀▀▀█░▌▐░▌░▌   ▐░▌   ▐░█▀▀▀▀▀▀▀ ▐░█▀▀▀▀▀█░▌▐░█▀▀▀▀▀█░▌▐░█▀▀▀▀▀▀▀ ▐░█▀▀▀▀▀▀▀ `);
    console.log(`    ▐░▌    ▐░▌     ▐░▌▐░▌     ▐░▌▐░▌▐░▌  ▐░▌   ▐░▌        ▐░▌     ▐░▌▐░▌     ▐░▌▐░▌        ▐░▌        `);
    console.log(`    ▐░▌    ▐░▌     ▐░▌▐░█▄▄▄▄▄█░▌▐░▌ ▐░▌ ▐░▌   ▐░█▄▄▄▄▄▄▄ ▐░█▄▄▄▄▄█░▌▐░█▄▄▄▄▄█░▌▐░▌        ▐░█▄▄▄▄▄▄▄ `);
    console.log(`    ▐░▌    ▐░▌     ▐░▌▐░░░░░░░░░▌▐░▌  ▐░▌▐░▌   ▐░░░░░░░░░▌▐░░░░░░░░░▌▐░░░░░░░░░▌▐░▌        ▐░░░░░░░░░▌`);
    console.log(`    ▐░▌    ▐░▌     ▐░▌▐░█▀▀█░█▀▀ ▐░▌   ▐░▐░▌    ▀▀▀▀▀▀▀█░▌▐░█▀▀▀▀▀▀▀ ▐░█▀▀▀▀▀█░▌▐░▌        ▐░█▀▀▀▀▀▀▀ `);
    console.log(`    ▐░▌    ▐░▌     ▐░▌▐░▌   ▐░▌  ▐░▌    ▐░░▌           ▐░▌▐░▌        ▐░▌     ▐░▌▐░▌        ▐░▌        `);
    console.log(`    ▐░▌    ▐░█▄▄▄▄▄█░▌▐░▌    ▐░▌ ▐░▌     ▐░▌ ▄  ▄▄▄▄▄▄▄█░▌▐░▌        ▐░▌     ▐░▌▐░█▄▄▄▄▄▄▄ ▐░█▄▄▄▄▄▄▄ `);
    console.log(`    ▐░▌    ▐░░░░░░░░░▌▐░▌     ▐░▌▐░▌     ▐░▌▐░▌▐░░░░░░░░░▌▐░▌        ▐░▌     ▐░▌▐░░░░░░░░░▌▐░░░░░░░░░▌`);
    console.log(`     ▀      ▀▀▀▀▀▀▀▀▀  ▀       ▀  ▀       ▀  ▀  ▀▀▀▀▀▀▀▀▀  ▀          ▀       ▀  ▀▀▀▀▀▀▀▀▀  ▀▀▀▀▀▀▀▀▀ `);
    console.log(`                                                                                                      `);
    console.log(`******************************************************************************************************`);

    console.log(`This software is free software, licensed under the terms of the AGPL v3. For more information, please see LICENSE.txt`);
    console.log(`Source available at: https://github.com/TornDotSpace/Torn`);

    console.log(`torn-client-git-${BRANCH}-${COMMITHASH}`);
    console.log(`Implementing protocol version ${VERSION}`);

    // Print client modification warning
    console.error(`***********************************************************************`);
    console.error(`WARNING: PASTING CODE INTO HERE CAN ALLOW FOR YOUR ACCOUNT TO BE STOLEN`);
    console.error(`ALWAYS AUDIT CODE YOU ARE INJECTING INTO THE DEVELOPER CONSOLE`);
    console.error(`ADDITIONALLY, PLEASE RESPECT OUR TOS https://torn.space/legal/tos.pdf AND NOTE OUR PRIVACY POLICY https://torn.space/legal/privacy_policy.pdf`);
    console.error(`***********************************************************************`);
}

printStartup();

loginInProgress = false;

window.document.title = `torn.space`;

isChrome = true || !(!window.chrome) && !(!window.chrome.webstore);// broken

canvas = document.getElementById(`ctx`);
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
ctx = canvas.getContext(`2d`, { alpha: false });
ReactRoot = ReactRootJS;
const { Howl, Howler } = require(`howler`); // audio

teamColors = [`red`, `blue`, `green`];
sectorWidth = 14336;
mx = 0; my = 0; mb = 0;
tick = 0;
scrx = 0; scry = 0;
mapSz = -1;
quests = 0; quest = 0;
login = false; lore = false;
px = 0; py = 0; pc = 0; pangle = 0; isLocked = false; pvx = 0; pvy = 0;
phealth = 0;
mapZoom = 1;
myxx1 = 0; myxx2 = 0; myxx3 = 0; myxx4 = 0;
myyy1 = 0; myyy2 = 0; myyy3 = 0; myyy4 = 0;
pscx = 0; pscy = 0; psga = 0;
bxo = 0; byo = 0; bx = 0; by = 0;
iron = 0; silver = 0; platinum = 0; copper = 0;
kills = 0; baseKills = 0; money = 0; experience = 0; rank = 0;
sx = 0; sy = 0;
docked = false; actuallyBuying = true;
tab = 0; confirmer = -1; shipView = 0; volTransparency = 0; gVol = 0.5;
typing = false;
stopTyping = () => {
    typing = false;
};
centered = false;
afk = false;

baseMap2D = {};
planetMap2D = {};
myGuild = {};

homepageTimer = 0; loreTimer = 0;
raidTimer = -1; raidRed = 0; raidBlue = 0; raidGreen = 0; points = 0;
shield = false; autopilot = false;
seller = 0; worth = 0; ship = 0;
empTimer = -1; dmgTimer = -1; gyroTimer = 0;
t2 = 1; mh2 = 1; c2 = 1; va2 = 1; e2 = 1; ag2 = 1;
dead = false; lives = 50; sLag = 0; nLag = 0; clientLag = -40; fps = 0; ops = 0; frames = 0; uframes = 0; ups = 0; dev = false;
credentialState = 0;
savedNote = 0;
myName = `GUEST`; currAlert = ``; bigAlert = ``; disguise = 0;
soundAllowed = false;
currLoading = ``;
secret2PlanetName = ``;
meanNLag = 0; nLagCt = 0;

booms = {};
boomParticles = {};
trails = {};
myTrail = 0;
notes = {};
bullets = {};
planets = 0; hmap = 0; lb = 0; youi = 0;
keys = []; lagArr = 0;

w = window.innerWidth;
h = window.innerHeight; // Canvas width and height

basesInfo = undefined;
playersInfo = { };
minesInfo = { };
orbsInfo = { };
missilesInfo = { };
vortsInfo = { };
beamsInfo = { };
blastsInfo = { };
astsInfo = { };
packsInfo = { };

clientmutes = { };
// for initial loading screen
EVERYTHING_LOADED = false;

guest = false;

stars = [];
for (let i = 0; i < 30; i++) stars[i] = { x: Math.random() * w, y: Math.random() * h };

myId = undefined;

killStreak = 0; killStreakTimer = -1;
badWeapon = 0;
mouseDown = false;
flash = 0;
hyperdriveTimer = 0;
didW = false; didSteer = false; currTut = 0;

sectorPoints = 0;

require(`./audio.js`);
const loadAllImages = require(`./image.js`);
require(`./localizer.ts`);
require(`./helper.js`);
require(`./network.js`);
require(`./graphics/render.js`);
require(`./graphics/ArrowGraphics.js`);
require(`./graphics/minimap.js`);
require(`./BaseMenu/BaseMenu.js`);
require(`./input.js`);
require(`./chat.ts`);

wepns = jsn.weapons;
ships = jsn.ships;

ReactRoot.socket = socket; // Just to make socket accessible in react.js

ReactDOM.render(
    /* eslint-disable */
    <ReactRoot data={{
      toggleMusic: toggleMusic,
      toggleAudio: toggleAudio,
    }} />,
    // Not rendering to body so canvas will not be affected
    document.getElementById("a"),
    /* eslint-enable */
);
ReactRoot.turnOnDisplay(`LoginOverlay`);

// Used in the ship store to make the bar graphs
maxShipThrust = -1000;
maxShipHealth = -1000;
maxShipCapacity = -1000;
maxShipAgility = -1000;
for (const i in ships) {
    const ship = ships[i];
    if (ship.thrust > maxShipThrust) maxShipThrust = ship.thrust;
    if (ship.capacity > maxShipCapacity && i != 17) maxShipCapacity = ship.capacity;
    if (ship.agility > maxShipAgility) maxShipAgility = ship.agility;
    if (ship.health > maxShipHealth) maxShipHealth = ship.health;
}

for (const j in wepns) {
    if (!wepns[j].enabled) { delete wepns[j]; }
}
const weaponTypeOrder = { Gun: 0, Mine: 1, Missile: 2, Beam: 3, Orb: 4, Blast: 5, Misc: 6 };
o = 0;
for (const j in wepns) {
    wepns[j].order = o;
    o++;
}
wepnCount = Object.keys(wepns).length;
for (let j = 0; j < wepnCount - 1; j++) { // this nifty loop sorts weapons by ship
    const woj = weaponWithOrder(j);
    const woj1 = weaponWithOrder(j + 1);
    const typeJ = weaponTypeOrder[wepns[woj].type];
    const typeJ1 = weaponTypeOrder[wepns[woj1].type];
    if (typeJ > typeJ1 || (wepns[woj].level > wepns[woj1].level && typeJ == typeJ1)) {
        wepns[woj].order = j + 1;
        wepns[woj1].order = j;
        j = 0;
    }
}

wepns[-2] = { name: `` };
wepns[-1] = { name: translate(`Empty`) };
wepnCount += 2;

scroll = 0; weaponTimer = 0; charge = 0;
equipped = 0; ammos = {};
musicAudio = 0;

redShips = [];
blueShips = [];
greenShips = [];
planetImgs = [];
Img = {};
Img_prgs = [0 /* Count of loaded images */, 0];

loadAllImages();
loadAllAudio();

achs = [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false];
bigNotes = [-1, -1, -1, -1];

function forceRefresh () {
    window.location.reload(true);
}

setInterval(() => {
    fps = frames;
    ups = uframes;
    uframes = frames = 0;
}, 1000);

setInterval(() => {
    raidTimer--;
    hyperdriveTimer--;
    w = window.innerWidth;
    h = window.innerHeight;
    if (canvas.width != w || canvas.height != h) {
        canvas.width = w;
        canvas.height = h;
    }
    baseMenuX = w / 2 - 128 * 3, baseMenuY = h / 4 - 128;
}, 40);

window.requestAnimationFrame(loop);

function loop () {
    render();
    if (!login) {
        if (!EVERYTHING_LOADED) {
            ReactRoot.turnOffDisplay(`LoginOverlay`);
            rLoadingBar();
            setTimeout(render, 5);
            window.requestAnimationFrame(loop);
            return;
        } else ReactRoot.turnOnDisplay(`LoginOverlay`);

        if (++homepageTimer == 1) {
            loadAudio(`music1`, `/aud/music1.mp3`);
        }

        canvas.width = canvas.width;
        ctx.fillStyle = `black`;
        ctx.fillRect(0, 0, w, h);

        // desmos this stuff or you wont have a clue whats going on vvv
        const softsign = Math.exp(homepageTimer / 15);
        let scale = 1.885 * (softsign / (1 + softsign) - 0.47);
        if (homepageTimer > 100)scale = 1;

        ctx.translate(w / 2, h / 2);
        ctx.scale(scale, scale);
        ctx.translate(-w / 2, -h / 2);

        const d = new Date();
        const t = d.getTime() / 6000;
        const loreZoom = 100 * (Math.hypot(loreTimer, 256) - 256);
        px = (32 + Math.sin(t * 4)) * 3200;
        py = (32 + Math.cos(t * 5)) * 3200;

        scrx = (-w / 3 * Math.cos(4 * t));
        scry = (h / 3 * Math.sin(5 * t));
        if (loreTimer > 0) scry += loreZoom;

        renderBG(true);

        // Main hydra
        const vx = 4000 * Math.sin(5 * t); const vy = 3200 * Math.cos(4 * t);
        const spd = Math.hypot(vx, vy) / 100.0;
        const rnd = Math.random();
        let angleNow = -Math.atan2(5 * Math.sin(5 * t), 4 * Math.cos(4 * t));
        if (rnd < 0.05) {
            playAudio(`minigun`, 0.1);
            bullets[rnd] = { x: px, y: py, vx: 12800 / 6000 * 20 * Math.cos(4 * t) + 40 * Math.cos(angleNow), vy: -16000 / 6000 * 20 * Math.sin(5 * t) + 40 * Math.sin(angleNow), id: rnd, angle: angleNow, wepnID: 0, color: `red` };
        }

        let img = redShips[14];
        let pw = ships[14].width;
        let rendX = w / 2 + scrx;
        let rendY = h / 2 + scry;
        ctx.save();
        ctx.translate(rendX, rendY);
        ctx.drawImage(Img.astUnderlayRed, -pw, -pw, pw * 2, pw * 2);
        ctx.rotate(angleNow + Math.PI / 2);
        let fireWidth = 32 * 1.2 * Math.sqrt(pw / 64); let fireHeight = spd * 1.4 * pw / 64 + Math.random() * pw / 25;
        if (spd > 0) ctx.drawImage(Img.fire, 0, Math.floor(Math.random() * 8) * 64, 64, 64, -fireWidth / 2, 0, fireWidth, fireHeight);
        ctx.restore();
        ctx.save();
        ctx.translate(rendX, rendY);
        ctx.rotate(angleNow + Math.PI / 2);
        ctx.drawImage(img, -pw / 2, -pw / 2);
        ctx.restore();

        // Extra ships
        for (let j = 0; j < 4; j++) {
            const pxn = (32 + Math.sin(t * 4 + 0.2)) * 3200 + CoherentNoise(t * 4 + j * 3 * Math.E) * 192;
            const pyn = (32 + Math.cos(t * 5 + 0.2)) * 3200 + CoherentNoise(t * 4 + j * 3 * Math.E + 61.23) * 192;
            for (const i in bullets) {
                const b = bullets[i];
                if (square(b.x - pxn) + square(b.y - pyn) < 64 * 32) {
                    delete bullets[i];
                    booms[Math.random()] = { x: b.x, y: b.y, time: 0, shockwave: false };
                    // for (let i = 0; i < 5; i++) boomParticles[Math.random()] = { x: b.x, y: b.y, angle: Math.random() * 6.28, time: -1, dx: b.vx / 1.5, dy: b.vy / 1.5 };
                    playAudio(`boom`, 0.35);
                }
            }

            img = (j % 2 == 0 ? blueShips : greenShips)[j * 2];
            pw = img.width;
            rendX = pxn - px + w / 2 + scrx;
            rendY = pyn - py + h / 2 + scry;
            ctx.save();
            ctx.translate(rendX, rendY);
            ctx.drawImage((j % 2 == 0 ? Img.astUnderlayBlue : Img.astUnderlayGreen), -pw, -pw, pw * 2, pw * 2);
            angleNow = -Math.atan2(5 * Math.sin(5 * t), 4 * Math.cos(4 * t));
            ctx.rotate(angleNow + Math.PI / 2);
            fireWidth = 32 * 1.2 * Math.sqrt(pw / 64), fireHeight = spd * 1.4 * pw / 64 + Math.random() * pw / 25;
            if (spd > 0) ctx.drawImage(Img.fire, 0, Math.floor(Math.random() * 8) * 64, 64, 64, -fireWidth / 2, 0, fireWidth, fireHeight);
            ctx.restore();
            ctx.save();
            ctx.translate(rendX, rendY);
            ctx.rotate(angleNow + Math.PI / 2);
            ctx.drawImage(img, -pw / 2, -pw / 2);
            ctx.restore();
        }
        for (const i in bullets) if (Math.random() < 0.01) delete bullets[i];
        rBullets();
        rBooms();
        ctx.setTransform(1, 0, 0, 1, 0, 0);
        if (homepageTimer < 10) {
            ctx.globalAlpha = 1 - homepageTimer / 10;
            ctx.fillStyle = `black`;
            ctx.fillRect(0, 0, w, h);
            ctx.globalAlpha = 1;
        }
        ctx.drawImage(Img.grad, 0, 0, w, h);
        rCreds();
        if (lore) {
            ReactRoot.turnOffDisplay(`LoginOverlay`);
            rLore();
            loreTimer++;
            window.requestAnimationFrame(loop);
            return;
        }
    } else ReactRoot.activate();

    window.requestAnimationFrame(loop);
}
