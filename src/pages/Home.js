import React, {Component} from 'react';
import { Title } from '../components/Title';
import { SearchForm } from '../components/searchForm';
import { MoviesList } from '../components/MoviesList';

import '../css/home.css'

export class Home extends Component{
    state = { movieResults: [], userSearch: false }

    _handleResults =(results) => {
        this.setState({ movieResults: results, userSearch: true })
    }
  
    _renderResults() {
        return this.state.movieResults.length === 0
        ? <h6> Sorry! <span role="img" aria-label="sad face"> 😞 </span> try something different...</h6>
        : <MoviesList movieResults={this.state.movieResults} />
    }

    componentWillMount() {
        if ( window.sessionStorage.getItem('sessionMovies') !== null ) {
          const movieResults = JSON.parse(window.sessionStorage.getItem('sessionMovies'))
          this.setState({ movieResults, userSearch: true })
          this._renderResults()
        } else {
          window.sessionStorage.setItem('sessionMovies', [])
        }
    
    }
    render() {
        return (
            <div className='Home__container'>
              <Title>Search Movies</Title>
              <div className='Home__form'>
                <SearchForm onResults={this._handleResults}/>
              </div>
                {
                  this.state.userSearch
                  ? this._renderResults()
                  : <small> You can search movies, series or videogames. </small>
                }
              <div className='Home__credits'>
                <p>I use <a href="https://www.omdbapi.com/" target="_blank" rel="noopener noreferrer">OMDB API</a> for results</p>
                <p><b>
                Check my <a href="https://github.com/kristellu" >
                <i className="fab fa-github-alt"></i></a>
                </b></p>
                <small><a href="https://www.udemy.com/aprendiendo-react/?couponCode=5_ANNIVERSARIO" target="_blank" rel="noopener noreferrer">Do you want to learn React? (Spanish)</a></small>
              </div>
            </div>
        )
    }
}
    