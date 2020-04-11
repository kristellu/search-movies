import React, {Component} from 'react';
import PropTypes from 'prop-types'

const API_KEY= 'e5d9b9ad'


export class Details extends Component{
    static propTypes = {
        match: PropTypes.shape({
            params: PropTypes.object,
            isExact: PropTypes.bool,
            path: PropTypes.string,
            url: PropTypes.string
        })
    }

    state = {movie: {}} //consistencia
    _fetchMovie({id}){
        fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&i=${id}`)
            .then(res => res.json())
            .then(movie => {
                //const { Search = [], totalResults = "0"} = results
                console.log({movie})
                this.setState({movie})
            })
    }

    componentDidMount(){
        console.log(this.props)
        const {movieId} = this.props.match.params
        this._fetchMovie({id: movieId})
    }
    
    _goBack(){
        window.history.back()
    }

    render(){
        const{ Title, Poster, Actors, Plot, Metascore, Genre} = this.state.movie
        return(
            <div>
                <button onClick = {this._goBack}>Volver</button>
                <h1>{Title}</h1>
                <h1>{Genre}</h1>
                <img src={Poster}/>
                <p>{Plot}</p>
                <h4>Actors: {Actors}</h4>
                <span>{Metascore}</span>
            </div>
        )
    }
}