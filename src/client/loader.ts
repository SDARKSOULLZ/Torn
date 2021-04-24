import { loadImage, loadShipImg } from './utils/image';
import { loadAudio } from './utils/audio';

const loadAllImages = () => {
    // Misc.
    loadImage(`grad`, `/img/grad.png`);
    loadImage(`fire`, `/img/fire.png`);
    loadImage(`shockwave`, `/img/shockwave.png`);
    loadImage(`booms`, `/img/booms.png`);

    // Bases.
    loadImage(`rss`, `/img/red/rss.png`);
    loadImage(`bss`, `/img/blue/bss.png`);
    loadImage(`gss`, `/img/green/gss.png`);

    loadImage(`mrss`, `/img/red/mrss.png`);
    loadImage(`mbss`, `/img/blue/mbss.png`);
    loadImage(`mgss`, `/img/green/mgss.png`);

    loadImage(`rt`, `/img/red/rt.png`);
    loadImage(`bt`, `/img/blue/bt.png`);
    loadImage(`gt`, `/img/green/gt.png`);

    loadImage(`rsentry`, `/img/red/rsentry.png`);
    loadImage(`bsentry`, `/img/blue/bsentry.png`);
    loadImage(`gsentry`, `/img/green/gsentry.png`);

    // Asteroids.
    loadImage(`iron`, `/img/space/iron.png`);
    loadImage(`copper`, `/img/space/copper.png`);
    loadImage(`platinum`, `/img/space/platinum.png`);
    loadImage(`silver`, `/img/space/silver.png`);

    loadImage(`astUnderlayBlue`, `/img/space/astUnderlayBlue.png`);
    loadImage(`astUnderlayRed`, `/img/space/astUnderlayRed.png`);
    loadImage(`astUnderlayGreen`, `/img/space/astUnderlayGreen.png`);

    // Planets.
    loadImage(`planetO`, `/img/space/planetOverlay.png`);
    loadImage(`planetU`, `/img/space/planetUnderlay.png`);

    loadImage(`planetUB`, `/img/space/planetUnderlayBlue.png`);
    loadImage(`planetUR`, `/img/space/planetUnderlayRed.png`);
    loadImage(`planetUG`, `/img/space/planetUnderlayGreen.png`);

    // Weapons.
    loadImage(`redbullet`, `/img/weapons/rb.png`);
    loadImage(`bluebullet`, `/img/weapons/bb.png`);
    loadImage(`greenbullet`, `/img/weapons/gb.png`);

    loadImage(`energyDisk`, `/img/weapons/energyDisk.png`);
    loadImage(`photonOrb`, `/img/weapons/photonOrb.png`);

    loadImage(`missile`, `/img/weapons/missile.png`);
    loadImage(`alienMissile`, `/img/weapons/alienMissile.png`);
    loadImage(`torpedo`, `/img/weapons/torpedo.png`);
    loadImage(`heavyMissile`, `/img/weapons/heavyMissile.png`);
    loadImage(`alienMissileSwarm`, `/img/weapons/alienMissileSwarm.png`);
    loadImage(`empMissile`, `/img/weapons/empMissile.png`);

    loadImage(`mine`, `/img/weapons/mine.png`);
    loadImage(`magneticMine`, `/img/weapons/magneticMine.png`);
    loadImage(`grenade`, `/img/weapons/grenade.png`);
    loadImage(`empMine`, `/img/weapons/empMine.png`);
    loadImage(`laserMine`, `/img/weapons/laserMine.png`);
    loadImage(`pulseMine`, `/img/weapons/pulseMine.png`);
    loadImage(`campfire`, `/img/weapons/campfire.png`);

    loadImage(`bigBullet`, `/img/weapons/bigBullet.png`);

    // Space.
    loadImage(`vort`, `/img/space/vort.png`);
    loadImage(`worm`, `/img/space/worm.png`);
    loadImage(`spc`, `/img/space/Background.png`);

    // Base GUI.
    loadImage(`q`, `/img/baseGui/q.png`);
    loadImage(`button`, `/img/baseGui/button.png`);
    loadImage(`arrow`, `/img/baseGui/arrow.png`);

    // Pack drops.
    loadImage(`pack`, `/img/packs/pack.png`);
    loadImage(`ammo`, `/img/packs/ammo.png`);
    loadImage(`bonus`, `/img/packs/bonus.png`);
    loadImage(`life`, `/img/packs/life.png`);

    // Distance pointer arrows.
    loadImage(`yellowArrow`, `/img/arrows/yellowArrow.png`);
    loadImage(`orangeArrow`, `/img/arrows/orangeArrow.png`);
    loadImage(`greenArrow`, `/img/arrows/greenArrow.png`);
    loadImage(`redArrow`, `/img/arrows/redArrow.png`);
    loadImage(`blueArrow`, `/img/arrows/blueArrow.png`);
    loadImage(`whiteArrow`, `/img/arrows/whiteArrow.png`);
    loadImage(`blackArrow`, `/img/arrows/blackArrow.png`);

    // Ships
    for (let i = 0; i < 23; i++) {
        loadShipImg(`blue`, i);
        loadShipImg(`red`, i);
        loadShipImg(`green`, i);
    }
};

const loadAllAudio = () => {
    loadAudio(`minigun`, `/aud/minigun.mp3`);
    loadAudio(`boom`, `/aud/boom.mp3`);
    loadAudio(`hyperspace`, `/aud/hyperspace.mp3`);
    loadAudio(`bigboom`, `/aud/bigboom.wav`);
    loadAudio(`shot`, `/aud/shot.mp3`);
    loadAudio(`beam`, `/aud/beam.wav`);
    loadAudio(`missile`, `/aud/whoosh.mp3`);
    loadAudio(`sector`, `/aud/sector.wav`);
    loadAudio(`money`, `/aud/money.wav`);
    loadAudio(`button2`, `/aud/button2.wav`);
    loadAudio(`noammo`, `/aud/noammo.wav`);
};

export {
    loadAllImages,
    loadAllAudio
}