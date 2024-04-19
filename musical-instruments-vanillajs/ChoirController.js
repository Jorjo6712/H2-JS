import Guitar from './Guitar.js';
import Harp from './Harp.js';
import Flute from './Flute.js';
import Saxophone from './Saxophone.js';

export default function init(){
    document.getElementById('play-button').addEventListener('click', () => {
        const selectedOption = document.getElementById('instrument-dropdown').value;
        
        switch (selectedOption) {
          case 'Guitar':
            return new Guitar('Acoustic', 6, 'rose wood').playSound()
  
          case 'Harp':
            return new Harp('Pedal Harp', 47, '6 feet').playSound()

          case 'Flute':
            return new Flute('Bansuri', 7, 'bamboo').playSound()
          case 'Saxophone':
            return new Saxophone('Alto', 'brass').playSound()
          default:
            console.log('No sound configured for this option');
        }
      });
}
