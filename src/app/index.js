import React from 'react'
import { render } from 'react-dom'

// components
import { Header } from './components/Header'
import { Home } from './components/Home'

class App extends React.Component {
  render() {
    let name = "dani"
    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-10 col-xs-offset=1">
            <Header />
          </div>
        </div>
        <div className="row">
          <div className="col-xs-10 col-xs-offset=1">
            <Home name={name} />
          </div>
        </div>
      </div>
    )
  }
}

render(<App />, window.document.getElementById('app'))
