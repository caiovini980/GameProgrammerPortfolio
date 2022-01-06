import { Header } from "../molecules/Header/Index";
import  { MainPage } from "../molecules/MainPage/Index";

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