import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import Saying from './components/Saying'

require('./index.css')

class App extends Component {
  render() {
    return(
      <div>
        <Saying message='Hello World! Eat More Doughnuts!'/>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'))