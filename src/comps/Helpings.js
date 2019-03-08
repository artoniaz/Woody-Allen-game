import React from 'react';
import "../css/Helpings.css";
import HelpingItem from "./HelpingItem";

class Helpings extends React.Component {

    state = {
        cast: [],
        plot: [],
        pictures: [],
        productionYear: [],
        activeHelping: "",

        helpingItem: false,
    };

    handleClick = e => {
        const activeMovie = this.props.movies[this.props.activeMovie];

        const activeHelping = activeMovie.helpings.filter(el => el.categoryName === e.target.id);

        this.setState({
            [activeHelping[0].categoryName]: activeHelping[0].data,
            activeHelping: activeHelping[0].categoryName,
            helpingItem: true,
        })
    };

    closeHelping = () => {
        this.setState({
            helpingItem: false,
        })
    };

    render() {
        return (
            <section className="container helpingsSection">
                <div className="help">
                    <p>potrzebujesz podpowiedzi?</p>
                    <p>możesz uzyskać podpowiedź z zakresu poniższych kategorii:</p>
                </div>
                <div className="helpButtons">
                    <button onClick={this.handleClick} id="cast">Obsada</button>
                    <button onClick={this.handleClick} id="plot">Fabuła</button>
                    <button onClick={this.handleClick} id="pictures">Zdjęcia</button>
                    <button onClick={this.handleClick} id="productionYear">Rok&nbsp;produkcji</button>
                </div>
                {this.state.helpingItem && <div className="grayBackground"></div>}
                {this.state.helpingItem && <HelpingItem state={this.state} target={this.handleClick} closeHelping={this.closeHelping}/>}
            </section>
        )
    }
}

export default Helpings;