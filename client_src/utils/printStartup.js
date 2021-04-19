const core = require(`../core.js`);

const printStartup = () => {
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

    console.log(`torn-client-git-${core.globals.branch}-${core.globals.commitHash}`);
    console.log(`Implementing protocol version ${core.globals.version}`);

    // Print client modification warning.
    console.warn(`***********************************************************************`);
    console.warn(`WARNING: PASTING CODE INTO HERE CAN ALLOW FOR YOUR ACCOUNT TO BE STOLEN`);
    console.warn(`ALWAYS AUDIT CODE YOU ARE INJECTING INTO THE DEVELOPER CONSOLE`);
    console.warn(`ADDITIONALLY, PLEASE RESPECT OUR TOS https://torn.space/legal/tos.pdf AND NOTE OUR PRIVACY POLICY https://torn.space/legal/privacy_policy.pdf`);
    console.warn(`***********************************************************************`);
};

module.exports = printStartup;
