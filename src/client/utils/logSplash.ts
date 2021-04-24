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

import core from '../core';

const logSplash = () => {
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

    console.log(`torn-client-git-${core.branch}-${core.commitHash}`);
    console.log(`Implementing protocol version ${core.version}`);

    // Print client modification warning.
    console.warn(`***********************************************************************`);
    console.warn(`WARNING: PASTING CODE INTO HERE CAN ALLOW FOR YOUR ACCOUNT TO BE STOLEN`);
    console.warn(`ALWAYS AUDIT CODE YOU ARE INJECTING INTO THE DEVELOPER CONSOLE`);
    console.warn(`ADDITIONALLY, PLEASE RESPECT OUR TOS https://torn.space/legal/tos.pdf AND NOTE OUR PRIVACY POLICY https://torn.space/legal/privacy_policy.pdf`);
    console.warn(`***********************************************************************`);
};

export default logSplash;
