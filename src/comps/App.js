import React, {Component} from 'react';
import '../css/App.css';
import Header from "./Header";
import SectionTwo from "./SectionTwo";
import Helpings from "./Helpings";
import Footer from "./Footer";


class App extends Component {

    state = {
        activeMovie: 0,
        movies: [],
    };

    myRef = React.createRef();

    getActiveMovie = (activeMovie, movies) => {
        this.setState({
            activeMovie,
            movies,
        })
    };

    scrollToMyRef = () => {
        window.scrollTo(0, this.myRef.current.offsetTop);
    };


    render() {
        return (
            <div className="mainContainer">
                <Header scroll={this.scrollToMyRef}/>
                <SectionTwo getActiveMovie={this.getActiveMovie} myRef={this.myRef}/>
                {<Helpings movies={this.state.movies} activeMovie={this.state.activeMovie}/>}
                <Footer/>
            </div>
        );
    }
}


export default App;
