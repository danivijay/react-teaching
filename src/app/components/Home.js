import React from 'react'
import PropTypes from 'prop-types';

export class Home extends React.Component {
  render() {
    let helloCheck = ""
    console.log(this.props)
    if(true) {
      helloCheck = <p>Hello check</p>
    }
    return(
      <div>
        <p>In a new component</p>
        { helloCheck }
        { this.props.name }
        <ul>
          { this.props.arr.map((val, i) => <li key={i}>{val}</li>) }
        </ul>
        { this.props.children }
      </div>
    )
  }
}

Home.PropTypes = {
  name: PropTypes.string,
  arr: PropTypes.array,
  children: PropTypes.element.isRequired
}
