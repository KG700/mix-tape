import React from "react";

class Checkbox extends React.Component {
  constructor(props){
    super(props)
  }


  render() {

    return (
      <div>
        <input
          name={this.props.name}
          type="checkbox"
          checked={false}
          onChange="a function"
        />
        {this.props.name}
      </div>
    );
  }
}

export default Checkbox;
