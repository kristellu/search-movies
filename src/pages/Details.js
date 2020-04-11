import React, {Component} from 'react';
import PropTypes from 'prop-types'
import { ButtonBackToHome } from '../components/ButtonBackToHome';
import '../css/details.css'

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
    
      state = { movie: {} }
    
      _fetchMovie({ id }) {
        fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&i=${id}`)
          .then(response => response.json())
          .then(movie => {
            this.setState({ movie })
            console.log('Movie ->', this.state.movie);
          });
      }
    
      componentDidMount() {
        console.log(this.props)
        const { movieId } = this.props.match.params
        this._fetchMovie({ id: movieId })
      }
    
      render() {
    
        const { Title, Actors, Country, Released, Type, imdbRating, Poster, Plot, Genre } = this.state.movie
    
        return (
          <div className="Detail">
            <div className="Detail__card">
              <div className="Detail__column Detail__column_img">
                <img src={Poster} alt={Title} className="Detail__poster Detail__poster_blured"/>
                <img src={Poster} alt={Title} className="Detail__poster"/>
              </div>
              <div className="Detail__column Detail__description">
                <h2 className="Detail__title title">{Title}</h2>
                <div className="tags" >
                  <p className="tag is-rounded">{Released}</p>
                  <p className="tag is-rounded">{Country}</p>
                  <p className="tag is-rounded">{Type}</p>
                </div>
                <p>
                  <strong>IMDB Rating:</strong> <span className="tag is-warning"><i className="fas fa-star Detail__star"></i> {imdbRating}</span>
                </p>
                <p>
                  <strong>Synopsis:</strong>
                  <br/>
                  {Plot}
                </p>
                <p>
                  <strong>Actors:</strong>
                  <br/>
                  {Actors}
                </p>
                <small ><i>{Genre}</i></small>
                <div className="Detail__footer">
                  <ButtonBackToHome/>
                </div>
              </div>
            </div>
          </div>
        )
    }
}