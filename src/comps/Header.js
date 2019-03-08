import React from 'react';
import "../css/Header.css";
import scrollToComponent from "react-scroll-to-component";

const Header = props => {

    return (
        <header>
            <div className="headerImg">
                <h1>Woody Allen</h1>
                <h2>gra</h2>
                <button onClick={props.scroll}>Zacznij grę!
                </button>
                <p>Naciśnij, aby zacząć grę</p>
            </div>
        </header>
    )
};

export default Header;