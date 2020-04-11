import React, { Component } from 'react'
import '../css/form.css'
const API_KEY = 'e5d9b9ad'

export class SearchForm extends Component {
    state = {
      searchText: ""
    };
  
    _handleUserSearch = e => {
      this.setState({ searchText: e.target.value });
    };
  
    _handleSubmit = e => {
      e.preventDefault();
      const { searchText } = this.state;
      fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${searchText}`)
        .then(response => response.json())
        .then(data => {
          console.log(data);
          const { Search = [], totalResults = "0" } = data;
          console.log({ Search, totalResults });
          this.props.onResults(Search)
          window.sessionStorage.setItem('sessionMovies', JSON.stringify(Search));
        });
    };
  
    render() {
      return (
        <form onSubmit={this._handleSubmit}>
          <div className="SearchForm__inputContainer">
            <input
              className="SearchForm__input has-text-link"
              onChange={this._handleUserSearch}
              type="text"
              placeholder="Search here! "
            />
            <button className="SearchForm__submit has-text-link"><i className="fas fa-search"></i></button>
          </div>
        </form>
      );
    }
  }