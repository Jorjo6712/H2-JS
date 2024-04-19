import Stringed from './Stringed.js';

 export default class Guitar extends Stringed {
    constructor(name,numberOfStrings, material) {
        super(name, numberOfStrings, material);
        this.material = material;
        this.playSound("sounds/Guitar.wav")
    }
}