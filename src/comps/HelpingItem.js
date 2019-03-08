import React from 'react';
import "../css/HelpingItem.css";

const HelpingItem = props => {

    let {activeHelping} = props.state;
    let content = null;

    if (activeHelping === "pictures") {
        content = props.state[activeHelping].map(el => (
                <div key={el} className="helpingPicture" style={{backgroundImage: `url(${el})`}}>
                </div>
            )
        )
    } else {
        content = props.state[activeHelping].map(el => <li key={el}>{el}</li>);
    }

    if (activeHelping === "cast") {
        activeHelping = "obsada"
    }
    if (activeHelping === "plot") {
        activeHelping = "fabuła"
    }
    if (activeHelping === "pictures") {
        activeHelping = "dodatkowe zdjęcia"
    }
    if (activeHelping === "productionYear") {
        activeHelping = "rok produkcji"
    }

    return (
        <div className="helpingItem">
            <h1>Podpowiedź</h1>
            <h3>Dziedzina: {activeHelping}</h3>
            {activeHelping === "dodatkowe zdjęcia" ? <div className="helpingPictures">{content}</div> : <ul>{content}</ul>}
            <button onClick={props.closeHelping}>Zamknij podpowiedź</button>
        </div>
    )
};

export default HelpingItem;