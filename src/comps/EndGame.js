import React from 'react';
import "../css/EndGame.css";
import "../css/HelpingItem.css";

const EndGame = props => {

    const score = props.score;

    return (
        <>
            <div className="grayBackground"></div>
            <div className="endGame">
                <h1>Gra skończona</h1>
                <div>
                    {score <= 1 ? <h2>Woody Allen jest smutny. Twój wynik to {score}</h2> :
                        <h2>Woody Allen jest szczęśliwy. Twój wynik to {score}.</h2>}

                    {score <= 1 ? <div className="allenSadPic"></div> : <div className="allenHappyPic"></div>}
                </div>
                <button onClick={props.close} id="endGame">Zagraj jeszcze raz</button>
            </div>
        </>
    )
};

export default EndGame;