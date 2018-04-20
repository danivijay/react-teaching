import React from 'react'
import { render } from 'react-dom'

// components
import { Header } from './components/Header'
import { Home } from './components/Home'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      homeLink: "Home"
    }
  }
  onGreet(){
    alert('hello')
  }
  onChangeLinkName(newName) {
    this.setState({
      homeLink: newName
    })
  }
  render() {
    let name = "dani"
    let arr = ["ab", "bc"]
    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-10 col-xs-offset=1">
            <Header homeLink={this.state.homeLink} />
          </div>
        </div>
        <div className="row">
          <div className="col-xs-10 col-xs-offset=1">
            <Home 
              name={name} 
              initialAge={20} 
              greet={this.onGreet}
              changeLink={this.onChangeLinkName.bind(this)}>
              <p>This is a para</p>
            </Home>
          </div>
        </div>
      </div>
    )
  }
}

render(<App />, window.document.getElementById('app'))
