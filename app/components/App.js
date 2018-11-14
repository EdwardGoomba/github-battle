import React, { Component } from 'react'

import Nav from './Nav'
import Popular from './Popular'

const ReactRouter = require('react-router-dom')
const Router = ReactRouter.BrowserRouter
const Route = ReactRouter.Route

class App extends Component {
  render () {
    return (
      <Router>
        <div className='container'>
          <Nav />
          <Route path='/popular' component={Popular} />
        </div>
      </Router>

    )
  }
}

export default App
