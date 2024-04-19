import Instrument from './Instrument.js';

export default class Stringed extends Instrument {
    constructor(name, numberOfStrings) {
        super(name);
        this.numberOfStrings = numberOfStrings;
    }
}