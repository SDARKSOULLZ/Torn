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

import loadJSON from './loadJSON';

const languages = {
    eng: `english`,
    esp: `translations/spanish`,
    tki: `translations/tokipona`,
    chn: `translations/chinese`
};

let languageJSON, languageNumber;

const weapons = require(`../../client/weapons.json`);
const translateMapper = require(`../../client/translate.json`);

const loadLang = (name) => {
    let assigned;
    const loc = window.location.href;

    if (loc.includes(`eng`) || name === `eng`) {
        assigned = languages.eng;
        languageNumber = 0;
    } else if (loc.includes(`esp`) || name === `esp`) {
        assigned = languages.esp;
        languageNumber = 1;
    } else if (loc.includes(`tki`) || name === `tki`) {
        assigned = languages.tki;
        languageNumber = 2;
    } else if (loc.includes(`chn`) || name === `chn`) {
        assigned = languages.chn;
        languageNumber = 3;
    }

    if (!assigned) {
        const lang = document.cookie.replace(/(?:(?:^|.*;\s*)lang\s*\=\s*([^;]*).*$)|^.*$/, `$1`);

        languageJSON = languages[lang];
        languageNumber = Object.keys(languages).indexOf(lang);
    }

    languageJSON = loadJSON(languages[languageNumber]);
};
