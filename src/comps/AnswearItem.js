import React from 'react';
import "../css/AnswearItem.css";

const AnswearItem = props => {
    const {score, answearCorrect} = props.state;
    if (answearCorrect) {
        return (
            <div className="answearItem" >
                <div></div>
                <div style={{backgroundColor: "green"}}>
                    <h1>Poprawna odpowiedź</h1>
                    <p>Twój wynik to: {score}</p>
                    <button onClick={props.close}>graj dalej</button>
                </div>
            </div>
        )
    } else {
        return (
            <div className="answearItem" >
                <div></div>
                <div style={{backgroundColor: "red"}}>
                    <h1>Błędna odpowiedź</h1>
                    <p>Twój wynik to {score}</p>
                    <button onClick={props.close}>graj dalej</button>
                </div>
            </div>
        )
    }
};

export default AnswearItem;
