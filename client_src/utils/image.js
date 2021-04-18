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

const loadImage = (name, src) => {
    if (Img[name]) {
        console.error(`Loading image twice: ${name}`); return;
    }
    Img[name] = new Image();
    Img[name].addEventListener(`load`, () => {
        Img_prgs[0]++;
    });
    Img[name].src = src;
    Img_prgs[1]++;
};

const loadShipImg = (color, i) => {
    if (color === `red`) {
        redShips[i] = new Image();
        redShips[i].src = `/img/red/r${i + 1}.png`;
    } else if (color === `blue`) {
        blueShips[i] = new Image();
        blueShips[i].src = `/img/blue/b${i + 1}.png`;
    } else {
        greenShips[i] = new Image();
        greenShips[i].src = `/img/green/g${i + 1}.png`;
    }
};

module.exports = {
    loadImage,
    loadShipImg
};
