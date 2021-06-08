import Entity from './entity';

class Ship extends Entity {
    id: number
    name: string
    tag: string

    team: string
    constructor (id: number, name: string, x: number, y: number) {
        super(3, x, y);

        this.id = id;
        this.name = name;

        this.tag = ``;

        this.team = id > 0.5 ? `red` : `blue` //
    }
}

export default Ship;
