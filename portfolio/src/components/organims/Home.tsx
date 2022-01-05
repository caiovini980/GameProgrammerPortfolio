import { Header } from "../molecules/Header";
import  { MainPage } from "../molecules/MainPage";

import "../../styles/home.css";

export function Home()
{
    return (
        <div id = "page-home">
            <Header />
            <MainPage />
        </div>
    )
}