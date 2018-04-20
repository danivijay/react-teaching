import React from 'react'
import PropTypes from 'prop-types';

export class Home extends React.Component {
  constructor(props) {
    super()
    this.state = {
      age: props.initialAge,
      status: 0,
      homeLink: props.initialLinkName
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
  onHandleChange(event) {
    this.setState({
      homeLink: event.target.value
    })
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
        <input 
          type="text" 
          value={this.props.homeLink}
          onChange={this.onHandleChange.bind(this)} />
        <button className="btn btn-success" onClick={this.onChangeLink.bind(this)}>Change header</button>
      </div>
    )
  }
}
