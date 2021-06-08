import core from '../core';

class Entity {
    netType: number;
    position: { x: number, y: number };

    constructor (netType, x, y) {
        // forbidden is a piece of shit
        this.position = {
            x,
            y
        };

        this.netType = netType;

        core.entities.push(this);
    }

    destroy = () => {
        core.entities.splice(core.entities.indexOf(this), 1);
    }
}

export default Entity;
