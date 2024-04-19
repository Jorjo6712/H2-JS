import Instrument from "./Instrument";

export default class Saxophone extends Instrument {
    constructor(name, material) {
        super(name);
        this.material = material;
        this.playSound("sounds/Saxophone.mp3")
    }
}