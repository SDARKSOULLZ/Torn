const core = {
    globals: {
        branch: BRANCH,
        commitHash: COMMITHASH,
        version: VERSION,

        apiURL: `${TORN_API_URL}/api`,
        gameServerURL: TORN_GAMESERVER_URL
    },

    game: {
        player: {
            x: null,
            y: null,

            health: null,
            isLocked: null,
            charge: null,

            scrx: null,
            scry: null,

            rotation: null,
            shield: null,

            disguise: null,
            trail: null,

            docked: null,

            empTimer: null,
            gyroTimer: null,
            killStreakTimer: null
        },

        info: {
            packs: null,
            players: null,
            bases: null,
            asteroids: null,
            beams: null,
            blasts: null,
            missiles: null,
            orbs: null,
            mines: null,
            vortexes: null
        },

        tick: null,
        uframes: null
    }
};

module.exports = core;
