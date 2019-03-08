import React from 'react';
import "../css/SectionTwo.css";
import {db} from "./firebase";
import AnswearItem from "./AnswearItem";
import EmptyAlert from "./EmptyAlert";
import EndGame from "./EndGame";

class SectionTwo extends React.Component {

    state = {
        movies: [],
        activeMovie: 0,
        score: 0,
        answear: "",
        answearDisplay: false,
        answearCorrect: false,
        displayEmpty: false,
        endGame: false,


    };

    handleAnswearChange = e => {
        this.setState({
            answear: e.target.value,
        });
    };

    handleAnswearSubmit = e => {
        e.preventDefault();
        const activeTitle = this.state.movies[this.state.activeMovie].title;

        if (this.state.answear === ""){
            return this.setState({
                displayEmpty: true,
            })
        }

        if (this.state.answear.toLowerCase() === activeTitle.toLowerCase()){
            this.setState({
                answear : "",
                score: this.state.score + 1,
                answearDisplay: true,
                answearCorrect: true,
            });
        } else {
            this.setState({
                answear: "",
                answearDisplay: true,
                answearCorrect: false,
            });
        }
    };

    handleClosePopUp = e => {
        if (e.target.id === "endGame") {
            this.setState({
                [e.target.id]: false,
                answearDisplay: false,
                answearCorrect: false,
                activeMovie: 0,
                score: 0,
            })
        } else {
            this.setState({
                [e.target.id]: false,
            })
        }
    };

    handleCloseBtn = () => {

        if (this.state.activeMovie + 1 > this.state.movies.length - 1){
            return this.setState({
                endGame: true,
            })
        }

        this.setState({
            answearDisplay: false,
            answearCorrect: false,
            activeMovie: this.state.activeMovie + 1,
        });

        this.props.getActiveMovie(this.state.activeMovie +1, this.state.movies);
    };

    render() {
        if (this.state.movies.length === 0) {
            return null;
        }
        const {score} = this.state;
        const mainPicture = this.state.movies[this.state.activeMovie].img;

        return (
            <section className="container movieSection" ref={this.props.myRef}>
                <p>Twój aktualny wynik: {score}</p>
                <div className="imgPlace" style={{backgroundImage: `url(${mainPicture})`}}>
                </div>
                <div className="question">
                    <h4>Czy znasz ten film?</h4>
                    <p>wpisz poniżej nazwę filmu</p>
                    <p>jeśli nie wiesz, skorzystaj z podpowiedzi poniżej</p>
                    <p>pamiętaj, aby wpisywać jedynie oryginalne tytuły filmów</p>
                    <div className="getHelp">
                        <h5>zjedź w dół<br/>aby uzyskać podpowiedź</h5>
                        <i className="fas fa-angle-double-down"></i>
                    </div>
                </div>
                <form noValidate onSubmit={this.handleAnswearSubmit}>
                    <input type="text" placeholder="wpisz nazwę filmu"
                           value={this.state.answear}
                           onChange={this.handleAnswearChange}
                    />
                    <br/>
                    <button>Sprawdź odpowiedź</button>
                </form>
                {this.state.answearDisplay && <AnswearItem close={this.handleCloseBtn} state={this.state}/>}
                {this.state.displayEmpty && <EmptyAlert close={this.handleClosePopUp}/>}
                {this.state.endGame && <EndGame score={this.state.score} close={this.handleClosePopUp}/>}
            </section>
        )
    }

    componentDidMount() {
        db.collection("quiz2").get().then((response) => {
            const temp = [];
            response.docs.forEach((e) => {
                temp.push(e.data())
            });
            this.setState({
                movies: temp,
            });
            this.props.getActiveMovie(this.state.activeMovie, this.state.movies);
        })
    }
}

export default SectionTwo;