import React, { Component } from 'react'
import queryString from 'query-string'
import { Link } from 'react-router-dom'
import api from '../../utils/api'

class Results extends Component {
  constructor (props) {
    super(props)

    this.state = {
      winner: null,
      looser: null,
      error: null,
      loading: true
    }
  }

  componentDidMount () {
    var players = queryString.parse(this.props.location.search)

    api.battle([
      players.playerOneName,
      players.playerTwoName
    ]).then(function (results) {
      if (results === null) {
        return this.setState(function () {
          return {
            error: 'Looks like there was an error. Check that both users exist on Github',
            loading: false
          }
        })
      }

      this.setState(function () {
        return {
          error: null,
          winner: results[0],
          looser: results[1],
          loading: false
        }
      })
    }.bind(this))
  }

  render () {
    var error = this.state.error
    var winner = this.state.winner
    var looser = this.state.looser
    var loading = this.state.loading

    if (loading === true) {
      return <p>Loading...</p>
    }

    if (error) {
      return (
        <div>
          <p>{error}</p>
          <Link to='/battle'>Reset</Link>
        </div>
      )
    }
    return (
      <div>
        <h2>Results</h2>
        {JSON.stringify(this.state, null, 2)}
      </div>

    )
  }
}

export default Results
