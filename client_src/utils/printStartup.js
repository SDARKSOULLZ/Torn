
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

    console.log(`torn-client-git-${BRANCH}-${COMMITHASH}`);
    console.log(`Implementing protocol version ${VERSION}`);

    // Print client modification warning
    console.error(`***********************************************************************`);
    console.error(`WARNING: PASTING CODE INTO HERE CAN ALLOW FOR YOUR ACCOUNT TO BE STOLEN`);
    console.error(`ALWAYS AUDIT CODE YOU ARE INJECTING INTO THE DEVELOPER CONSOLE`);
    console.error(`ADDITIONALLY, PLEASE RESPECT OUR TOS https://torn.space/legal/tos.pdf AND NOTE OUR PRIVACY POLICY https://torn.space/legal/privacy_policy.pdf`);
    console.error(`***********************************************************************`);
}

module.exports = printStartup;
