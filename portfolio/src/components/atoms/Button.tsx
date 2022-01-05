import { useState } from "react";

type ButtonProperties = {
    text?: string;
}

export function Button(properties: ButtonProperties) {

    let _initialCounter : number = 0;

    const [counter, SetCounter] = useState(_initialCounter)

    function Increment()
    {
        SetCounter(counter + 1)
        //counter++;
        console.log(counter);
    }

    return (
        <button onClick = { Increment }> {properties.text} </button>
    )
}