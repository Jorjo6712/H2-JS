export default class Instrument {
    constructor(name) {
        this.name = name;
    }
    
    playSound(sound) {
      new Audio(sound).play();
    }
}