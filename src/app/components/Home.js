import React from 'react'

export class Home extends React.Component {
  render() {
    let helloCheck = ""
    if(true) {
      helloCheck = <p>Hello check</p>
    }
    return(
      <div>
        <p>In a new component</p>
        { helloCheck }
      </div>
    )
  }
}
