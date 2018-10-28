import React, { Component } from 'react'

class Saying extends Component {
  render () {
    return (
      <h2>{ this.props.message }</h2>
    )
  }
}

export default Saying
