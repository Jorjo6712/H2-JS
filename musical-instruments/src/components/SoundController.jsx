import { useState } from "react";
import { Select, Button } from '@chakra-ui/react'
import GuitarSound from "../sounds/Guitar.wav"
import HarpSound from "../sounds/Harp.mp3"
import FluteSound from "../sounds/Flute.wav"
import SaxophoneSound from "../sounds/Saxophone.mp3"
import useSound from 'use-sound';

function SoundController() {
    const [value, setValue] = useState('');
    const [sound, setSound] = useState(GuitarSound);

    const options = [
        { label: "Guitar", value: "1", sound: GuitarSound },
        { label: "Harp", value: "2", sound: HarpSound },
        { label: "Flute", value: "3", sound: FluteSound },
        { label: "Saxophone", value: "4", sound: SaxophoneSound },
    ]

    function handleSelect(event) {
        const selectedOption = options.find(option => option.value === event.target.value);
        setValue(selectedOption.value);
        setSound(selectedOption.sound);
        console.log(value, sound);
    }

    const [playSound] = useSound(sound);

    return (
        <div>
            <Select size={'lg'} onChange={handleSelect}>
                {options.map(option => (
                    <option key={option.value} value={option.value}>{option.label}</option>
                ))}
            </Select>
            <Button onClick={playSound} float={'right'} colorScheme={'teal'} size={'md'} mt={'6px'} rounded={'lg'}>
                Play
            </Button>
        </div>
    );
}

export default SoundController;