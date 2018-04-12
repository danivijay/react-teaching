import React from 'react'
import PropTypes from 'prop-types';

export class Home extends React.Component {
  constructor(props) {
    super()
    this.state = {
      age: props.initialAge,
      status: 0
    }
  }
  onMakeOlder() {
    this.setState({
      age: this.state.age + 1
    })
  }
  render() {
    return(
      <div>
        <p>In a new component</p>
        <p>  { this.props.name } : { this.state.age } </p>
        <button className="btn btn-primary" onClick={this.onMakeOlder.bind(this)}>Older</button>
      </div>
    )
  }
}
