import Instrument from "./Instrument";

export default class Flute extends Instrument {
    constructor(name, holes, material) {
        super(name);
        this.holes = holes;
        this.material = material;
        this.playSound("sounds/Flute.wav")
    }
}