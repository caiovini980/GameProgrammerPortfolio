import profileImg from '../../assets/images/profile.jpg';

import "../../styles/mainPage.css";

export function MainPage()
{
    return (
        <div id = "page-main">
            <img src = {profileImg} alt = "Profile picture" />
            <strong>Caio Aguiar</strong>
            <p>I'm a Unity game developer speciallized in gameplay.</p>
        </div>
    )
}