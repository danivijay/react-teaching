import React from 'react'
import PropTypes from 'prop-types';

export class Home extends React.Component {
  constructor(props) {
    super()
    this.state = {
      age: props.initialAge,
      status: 0,
      homeLink: "changed link"
    }
  }
  onMakeOlder() {
    this.setState({
      age: this.state.age + 1
    })
  }
  onChangeLink() {
    this.props.changeLink(this.state.homeLink)
  }
  render() {
    return(
      <div>
        <p>In a new component</p>
        <p>  { this.props.name } : { this.state.age } </p>
        <hr />
        <button className="btn btn-primary" onClick={this.onMakeOlder.bind(this)}>Older</button>
        <hr />
        <button className="btn btn-danger" onClick={this.props.greet}>Call root</button>
        <hr />
        <button className="btn btn-success" onClick={this.onChangeLink.bind(this)}>Change header</button>
      </div>
    )
  }
}
