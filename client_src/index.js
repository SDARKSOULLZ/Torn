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

const printStartup = require(`./utils/printStartup.js`);
const core = require(`./core.js`);

printStartup();

core.loginInProgress = false;

window.document.title = `torn.space`;

core.isChrome = true || !(!window.chrome) && !(!window.chrome.webstore);// broken

core.canvas = document.getElementById(`ctx`);
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
core.ctx = canvas.getContext(`2d`, { alpha: false });
core.ReactRoot = ReactRootJS;

core.teamColors = [`red`, `blue`, `green`];
core.sectorWidth = 14336;
core.mx = 0; core.my = 0; core.mb = 0;
core.tick = 0;
core.scrx = 0; core.scry = 0;
core.mapSz = -1;
core.quests = 0; core.quest = 0;
core.login = false; core.lore = false;
core.px = 0; core.py = 0; core.pc = 0; core.pangle = 0; core.isLocked = false; core.pvx = 0; core.pvy = 0;
core.phealth = 0;
core.mapZoom = 1;
core.myxx1 = 0; core.myxx2 = 0; core.myxx3 = 0; core.myxx4 = 0;
core.myyy1 = 0; core.myyy2 = 0; core.myyy3 = 0; core.myyy4 = 0;
core.pscx = 0; core.pscy = 0; core.psga = 0;
core.bxo = 0; core.byo = 0; core.bx = 0; core.by = 0;
core.iron = 0; core.silver = 0; core.platinum = 0; core.copper = 0;
core.kills = 0; core.baseKills = 0; core.money = 0; core.experience = 0; core.rank = 0;
core.sx = 0; core.sy = 0;
core.docked = false; core.actuallyBuying = true;
core.tab = 0; core.confirmer = -1; core.shipView = 0; core.volTransparency = 0; core.gVol = 0.5;
core.typing = false;
core.stopTyping = () => {
    typing = false;
};
core.centered = false;
core.afk = false;

core.baseMap2D = {};
core.planetMap2D = {};
core.myGuild = {};

core.homepageTimer = 0; core.loreTimer = 0;
core.raidTimer = -1; core.raidRed = 0; core.raidBlue = 0; core.raidGreen = 0; core.points = 0;
core.shield = false; core.autopilot = false;
core.seller = 0; core.worth = 0; core.ship = 0;
core.empTimer = -1; core.dmgTimer = -1; core.gyroTimer = 0;
core.t2 = 1; core.mh2 = 1; core.c2 = 1; core.va2 = 1; core.e2 = 1; core.ag2 = 1;
core.dead = false; core.lives = 50; core.sLag = 0; core.nLag = 0; core.clientLag = -40; core.fps = 0; core.ops = 0; core.frames = 0; core.uframes = 0; core.ups = 0; core.dev = false;
core.credentialState = 0;
core.savedNote = 0;
core.myName = `GUEST`; core.currAlert = ``; core.bigAlert = ``; core.disguise = 0;
core.soundAllowed = false;
core.currLoading = ``;
core.secret2PlanetName = ``;
core.meanNLag = 0; core.nLagCt = 0;

core.booms = {};
core.boomParticles = {};
core.trails = {};
core.myTrail = 0;
core.notes = {};
core.bullets = {};
core.planets = 0; core.hmap = 0; core.lb = 0; core.youi = 0;
core.keys = []; core.lagArr = 0;

core.w = window.innerWidth;
core.h = window.innerHeight; // Canvas width and height

core.basesInfo = undefined;
core.playersInfo = { };
core.minesInfo = { };
core.orbsInfo = { };
core.missilesInfo = { };
core.vortsInfo = { };
core.beamsInfo = { };
core.blastsInfo = { };
core.astsInfo = { };
core.packsInfo = { };

core.clientmutes = { };
// for initial loading screen
core.EVERYTHING_LOADED = false;

core.guest = false;

core.stars = [];
for (let i = 0; i < 30; i++) stars[i] = { x: Math.random() * w, y: Math.random() * h };

core.myId = undefined;

core.killStreak = 0; core.killStreakTimer = -1;
core.badWeapon = 0;
core.mouseDown = false;
core.flash = 0;
core.hyperdriveTimer = 0;
core.didW = false; core.didSteer = false; core.currTut = 0;

core.sectorPoints = 0;

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

core.wepns = jsn.weapons;
core.ships = jsn.ships;

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
core.maxShipThrust = -1000;
core.maxShipHealth = -1000;
core.maxShipCapacity = -1000;
core.maxShipAgility = -1000;
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
core.o = 0;
for (const j in wepns) {
    wepns[j].order = o;
    o++;
}
core.wepnCount = Object.keys(wepns).length;
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

core.scroll = 0; core.weaponTimer = 0; core.charge = 0;
core.equipped = 0; core.ammos = {};
core.musicAudio = 0;

core.redShips = [];
core.blueShips = [];
core.greenShips = [];
core.planetImgs = [];
core.Img = {};
core.Img_prgs = [0 /* Count of loaded images */, 0];

loadAllImages();
loadAllAudio();

core.achs = [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false];
core.bigNotes = [-1, -1, -1, -1];

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
