import React, {Component} from 'react';
import './Pokecard.css'

// const ImgApi = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";
const ImgApi = "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/";

let padToThree = (number) => (number <= 999 ? `00${number}`.slice(-3) : number);


class Pokecard extends Component {
    render(){
        let Srcimg = `${ImgApi}${padToThree(this.props.id)}.png`;
        return (
            <div className="Pokecard">
                <h1 className="Pokecard-title">{this.props.name}</h1>
                <img className="Pokecard-image" src={Srcimg} alt={this.props.name} ></img>
                <div className="Pokecard-data">Type: {this.props.type}</div>
                <div className="Pokecard-data">EXP: {this.props.exp}</div>
            </div>
        )
    }
}

export default Pokecard;