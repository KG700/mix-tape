import React from "react";

class Option extends React.Component {
  constructor(props){
    super(props)
  }

  render() {

    return (
        <option value={this.props.id}>
        {this.props.name}
        </option>
    );
  }
}

export default Option;
