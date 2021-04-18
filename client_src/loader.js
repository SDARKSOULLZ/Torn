const imageUtil = require(`./utils/image.js`);

const loadAllImages = () => {
    // Misc.
    imageUtil.loadImage(`grad`, `/img/grad.png`);
    imageUtil.loadImage(`fire`, `/img/fire.png`);
    imageUtil.loadImage(`shockwave`, `/img/shockwave.png`);
    imageUtil.loadImage(`booms`, `/img/booms.png`);

    // Bases.
    imageUtil.loadImage(`rss`, `/img/red/rss.png`);
    imageUtil.loadImage(`bss`, `/img/blue/bss.png`);
    imageUtil.loadImage(`gss`, `/img/green/gss.png`);

    imageUtil.loadImage(`mrss`, `/img/red/mrss.png`);
    imageUtil.loadImage(`mbss`, `/img/blue/mbss.png`);
    imageUtil.loadImage(`mgss`, `/img/green/mgss.png`);

    imageUtil.loadImage(`rt`, `/img/red/rt.png`);
    imageUtil.loadImage(`bt`, `/img/blue/bt.png`);
    imageUtil.loadImage(`gt`, `/img/green/gt.png`);

    imageUtil.loadImage(`rsentry`, `/img/red/rsentry.png`);
    imageUtil.loadImage(`bsentry`, `/img/blue/bsentry.png`);
    imageUtil.loadImage(`gsentry`, `/img/green/gsentry.png`);

    // Asteroids.
    imageUtil.loadImage(`iron`, `/img/space/iron.png`);
    imageUtil.loadImage(`copper`, `/img/space/copper.png`);
    imageUtil.loadImage(`platinum`, `/img/space/platinum.png`);
    imageUtil.loadImage(`silver`, `/img/space/silver.png`);

    imageUtil.loadImage(`astUnderlayBlue`, `/img/space/astUnderlayBlue.png`);
    imageUtil.loadImage(`astUnderlayRed`, `/img/space/astUnderlayRed.png`);
    imageUtil.loadImage(`astUnderlayGreen`, `/img/space/astUnderlayGreen.png`);

    // Planets.
    imageUtil.loadImage(`planetO`, `/img/space/planetOverlay.png`);
    imageUtil.loadImage(`planetU`, `/img/space/planetUnderlay.png`);

    imageUtil.loadImage(`planetUB`, `/img/space/planetUnderlayBlue.png`);
    imageUtil.loadImage(`planetUR`, `/img/space/planetUnderlayRed.png`);
    imageUtil.loadImage(`planetUG`, `/img/space/planetUnderlayGreen.png`);

    // Weapons.
    imageUtil.loadImage(`redbullet`, `/img/weapons/rb.png`);
    imageUtil.loadImage(`bluebullet`, `/img/weapons/bb.png`);
    imageUtil.loadImage(`greenbullet`, `/img/weapons/gb.png`);

    imageUtil.loadImage(`energyDisk`, `/img/weapons/energyDisk.png`);
    imageUtil.loadImage(`photonOrb`, `/img/weapons/photonOrb.png`);

    imageUtil.loadImage(`missile`, `/img/weapons/missile.png`);
    imageUtil.loadImage(`alienMissile`, `/img/weapons/alienMissile.png`);
    imageUtil.loadImage(`torpedo`, `/img/weapons/torpedo.png`);
    imageUtil.loadImage(`heavyMissile`, `/img/weapons/heavyMissile.png`);
    imageUtil.loadImage(`alienMissileSwarm`, `/img/weapons/alienMissileSwarm.png`);
    imageUtil.loadImage(`empMissile`, `/img/weapons/empMissile.png`);

    imageUtil.loadImage(`mine`, `/img/weapons/mine.png`);
    imageUtil.loadImage(`magneticMine`, `/img/weapons/magneticMine.png`);
    imageUtil.loadImage(`grenade`, `/img/weapons/grenade.png`);
    imageUtil.loadImage(`empMine`, `/img/weapons/empMine.png`);
    imageUtil.loadImage(`laserMine`, `/img/weapons/laserMine.png`);
    imageUtil.loadImage(`pulseMine`, `/img/weapons/pulseMine.png`);
    imageUtil.loadImage(`campfire`, `/img/weapons/campfire.png`);

    imageUtil.loadImage(`bigBullet`, `/img/weapons/bigBullet.png`);

    // Space.
    imageUtil.loadImage(`vort`, `/img/space/vort.png`);
    imageUtil.loadImage(`worm`, `/img/space/worm.png`);
    imageUtil.loadImage(`spc`, `/img/space/Background.png`);

    // Base GUI.
    imageUtil.loadImage(`q`, `/img/baseGui/q.png`);
    imageUtil.loadImage(`button`, `/img/baseGui/button.png`);
    imageUtil.loadImage(`arrow`, `/img/baseGui/arrow.png`);

    // Pack drops.
    imageUtil.loadImage(`pack`, `/img/packs/pack.png`);
    imageUtil.loadImage(`ammo`, `/img/packs/ammo.png`);
    imageUtil.loadImage(`bonus`, `/img/packs/bonus.png`);
    imageUtil.loadImage(`life`, `/img/packs/life.png`);

    // Distance pointer arrows.
    imageUtil.loadImage(`yellowArrow`, `/img/arrows/yellowArrow.png`);
    imageUtil.loadImage(`orangeArrow`, `/img/arrows/orangeArrow.png`);
    imageUtil.loadImage(`greenArrow`, `/img/arrows/greenArrow.png`);
    imageUtil.loadImage(`redArrow`, `/img/arrows/redArrow.png`);
    imageUtil.loadImage(`blueArrow`, `/img/arrows/blueArrow.png`);
    imageUtil.loadImage(`whiteArrow`, `/img/arrows/whiteArrow.png`);
    imageUtil.loadImage(`blackArrow`, `/img/arrows/blackArrow.png`);

    // Ships
    for (let i = 0; i < 23; i++) {
        imageUtil.loadShipImg(`blue`, i);
        imageUtil.loadShipImg(`red`, i);
        imageUtil.loadShipImg(`green`, i);
    }
};

module.exports = {
    loadAllImages
};
