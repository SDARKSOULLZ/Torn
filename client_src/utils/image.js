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

const core = require(`../core.js`);

const loadImage = (name, src) => {
    if (core.images.find(image => image.name === name)) return console.error(`Image "${name}" already loaded!`);

    const img = new Image();
    img.src = src;

    const imageProps = {
        img,
        name
    };

    img.addEventListener(`load`, () => core.images.push(imageProps));
    return img;
};

const loadShipImg = (color, i) => {
    loadImage(`${color.slice(0, 1) + i.toString()}`, `/img/${color}/${color.slice(0, 1)}${i + 1}.png`);
};

module.exports = {
    loadImage,
    loadShipImg
};
