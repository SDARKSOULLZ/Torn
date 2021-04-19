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

const Howler = require(`howler`);
const core = require(`../core.js`);

const toggleAudio = () => {
    core.muted.sfx ^= true;
    Howler.mute(core.muted.sfx);
};

const toggleMusic = () => {
    const music = core.audio.find(audio => audio.name === `music1`);
    core.muted.music ^= true;

    if (core.muted.music) music.pause();
    else music.play();
};

const loadAudio = (name, src) => {
    if (core.audio.find(audio => audio.name === name)) return console.error(`Audio "${name}" already loaded!`);

    const aud = new Howler.Howl({
        src,

        autoplay: false,
        loop: false,

        preload: true
    });

    const audioProps = {
        name,
        aud
    };

    core.audio.push(audioProps);
};

module.exports = {
    toggleAudio,
    toggleMusic,

    loadAudio
};
