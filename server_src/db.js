var Player = require("./player.js");
var MONGO_CONNECTION_STR = Config.getValue("mongo_connection_string", "mongodb://localhost:27017/torn");
var PLAYER_DATABASE = null;
var TURRET_DATABASE = null;
var Mongo = require('mongodb').MongoClient(MONGO_CONNECTION_STR, { useUnifiedTopology: true })
var Base = require('./universe/base.js');

// TODO: Implement failover in the event we lose connection
// to MongoDB
global.connectToDB = function () {
    if (PLAYER_DATABASE != null) {
        console.log("[DB] Already connected to MongoDB database...");
        return;
    }

    console.log("[DB] Connecting to MongoDB instance @ " + MONGO_CONNECTION_STR);

    Mongo.connect(function (err, client) {
        if (err) {
            console.log("[DB] Connection failed! (ERROR: " + err + ")");
            return;
        }

        var db = client.db('torn');
        PLAYER_DATABASE = db.collection('players');
        TURRET_DATABASE = db.collection('turrets');

        loadTurretData();
        setTimeout(saveTurrets, 1000);
        console.log("[DB] Connection successful!");
    });
}

global.handlePlayerDeath = async function (player) {
    var record = await PLAYER_DATABASE.findOne({_id: player._id});

    if (record == null) return;
    
    // Certain variables should NOT be reverted
    const persist = [ "lastLogin", "randAchs", "killAchs", "moneyAchs", "driftAchs", "planetsClaimed", "lives", "experience", "rank" ];
    for (var key in record) {
        if (key in persist) continue;

        player[key] = record[key];
    }

    player.experience *= .98;
    player.randmAchs[1] = true; // Death Achievement;
}

global.loadPlayerData = async function (playerName, socket) {
    
    var record = await PLAYER_DATABASE.findOne({ _id: playerName });
    var player = new Player(socket);

    for (var key in record) {
        if (key === "password") continue; // don't load passwords into memory
        player[key] = record[key];
    }

    if(bases[player.sy][player.sx] === 0 || bases[player.sy][player.sx].color != player.color) {
        player.sx = baseMap[player.color][0];
        player.sy = baseMap[player.color][1];
    }

    player.lastLogin = new Date(player.lastLogin);
    
    player.permissionLevels = [0];
    if (player.name.includes("O")) player.permissionLevels.push(30); // they're capital, it's fine
    if (player.name.includes("A")) player.permissionLevels.push(20);
    if (player.name.includes("M")) player.permissionLevels.push(10);
    if (player.name.includes("B")) player.permissionLevels.push(7);
    if (player.name.includes("V")) player.permissionLevels.push(5);
    if (player.name.includes("Y")) player.permissionLevels.push(3);

    return player;
}

global.saveTurret = function (turret) {
    var record = {
        id : turret.id,
        kills: turret.kills,
        experience: turret.experience,
        money: turret.money,
        color: turret.color,
        owner: turret.owner,
        x: turret.x,
        y: turret.y,
        sx: turret.sx,
        sy: turret.sy,
        name: turret.name
    };
    TURRET_DATABASE.replaceOne( { id : turret.id }, record, { upsert: true});
}

global.deleteTurret = function (turret) {
    TURRET_DATABASE.remove( {_id: turret._id });
}

global.loadTurretData = async function() {
    console.log("\nLoading Turrets...");
    var items = await TURRET_DATABASE.find();

    items.forEach(i => {
        var b = new Base(0, false, 0, 0, 0, 0, 0);
        for (var x in i) {
            b[x] = i[x];
        }
        bases[b.sy][b.sx] = b;
        console.log("Turret (" + b.sy + "," + b.sx + ") loaded!");
    });
}

global.savePlayerData = function (player) {
    var record = {
        color: player.color,
        ship : player.ship,
        weapons : player.weapons,
        name : player.name,
        trail : player.trail,
        money : player.money,
        kills : player.kills,
        planetsClaimed : player.planetsClaimed,
        iron : player.iron,
        silver : player.silver,
        platinum : player.platinum,
        aluminium : player.aluminium,
        experience : player.experience,
        rank : player.rank,
        thrust2 : player.thrust2,
        radar2 : player.radar2,
        agility2 : player.agility2,
        capacity2 : player.capacity2,
        maxHealth2 : player.maxHealth2,
        energy2 : player.energy2,
        killsAchs : player.killsAchs,
        baseKills : player.baseKills,
        oresMined : player.oresMined,
        moneyAchs : player.moneyAchs,
        questsDone : player.questsDone,
        driftTimer : player.driftTimer,
        driftAchs : player.driftAchs,
        cornersTouched : player.cornersTouched,
        lastLogin : player.lastLogin,
        randmAchs : player.randmAchs,
        lives : player.lives
    };
    PLAYER_DATABASE.updateOne( { _id: player._id }, {$set : record}, { upsert: true });
}