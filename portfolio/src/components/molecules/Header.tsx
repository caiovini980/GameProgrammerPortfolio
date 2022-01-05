import { Button } from "../atoms/Button";

import "../../styles/header.css";

export function Header()
{
    return (
        <div id = "page-header">
            <div id = "name-area">
                {/* <strong>Caio Aguiar</strong> */}
            </div>

            <div id = "buttons-area">
                <Button text = "About"></Button>
                <Button text = "Portfolio"></Button>
                <Button text = "Experience"></Button>
                <Button text = "Education"></Button>
                <Button text = "Skills"></Button>
                <Button text = "Interests"></Button>
            </div>
            
        </div>
    )
}