import { useState } from "react";
import MUButton from '@mui/material/Button';

type ButtonProperties = {
    text?: string;
}

export function Button(properties: ButtonProperties) {

    let _initialCounter : number = 0;

    const [counter, SetCounter] = useState(_initialCounter)

    function Increment()
    {
        SetCounter(counter + 1);
        //counter++;
        console.log(counter);
    }

    return (
        <MUButton variant = "headerButton" onClick = { Increment }> { properties.text } </MUButton>
    )
}