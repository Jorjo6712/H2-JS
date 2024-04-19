import Stringed from './Stringed.js';

export default class Harp extends Stringed {
    constructor(name,numberOfStrings, height) {
        super(name, numberOfStrings);
        this.height = height;
        this.playSound("sounds/Harp.mp3")
    }
}