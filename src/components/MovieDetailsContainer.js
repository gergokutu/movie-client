import React, { Component } from 'react'
import { connect } from 'react-redux'

import MovieDetails from './MovieDetails'
import { getMovies } from '../actions/movies'

class MovieDetailsContainer extends Component {
  state = {}

  componentDidMount() {
    this.props.getMovies()
  }

  render() {
    // console.log('MovieDetailsContainer PROPS:', this.props)
    const pathname = this.props.location.pathname
    const splitPath = pathname.split('/')
    const id = splitPath[2]

    return (
      <MovieDetails movies={this.props.movies} movieId={id}/>
    )
  }
}

function mapStateToProps(state) {
  return {
    movies: state.movies
  }
}

// to be able to use getMovies in this component
const mapDispatchToProps = {
  getMovies
} 

export default connect(mapStateToProps, mapDispatchToProps)(MovieDetailsContainer)