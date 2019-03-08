import React from 'react';
import "../css/HelpingItem.css";
import "../css/EmptyAlert.css";

const EmptyAlert = props => {
    return (
        <>
            <div className="grayBackground"></div>
            <div className="emptyAlert">
                <h1>Nie podałeś żadnej odpowiedzi.</h1>
                <p>Jeśli nie znasz danego tytułu, skorzystaj z podpowiedzi.</p>
                <button onClick={props.close} id="displayEmpty">zamknij</button>
            </div>
        </>
    )
};

export default EmptyAlert;
