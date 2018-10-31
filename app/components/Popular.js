import React, { Component } from 'react'

class Popular extends Component {
  constructor (props) {
    super(props)
    this.state = {
      selectedLanguage: 'All'
    }

    this.updateLanguage = this.updateLanguage.bind(this)
  }

  updateLanguage (lang) {
    this.setState(function () {
      return {
        selectedLanguage: lang
      }
    })
  }

  render () {
    var languages = ['All', 'JavaScript', 'Ruby', 'Java', 'CSS', 'Python']

    return (
      <ul className='languages'>
        { languages.map(function (lang) {
          return (
            <li
              onClick={this.updateLanguage.bind(null, lang)}
              key={lang}>
              {lang}
            </li>
          )
        }, this)}
      </ul>
    )
  }
}

export default Popular
