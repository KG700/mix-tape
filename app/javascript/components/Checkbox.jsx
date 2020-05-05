import React from "react";

class Checkbox extends React.Component {
  constructor(props){
    super(props)
  }

  render() {

    return (
      <div >
        <input
          name={this.props.id}
          type="checkbox"
          checked={this.props.checked}
          onChange={this.props.onChange}
        />
        {this.props.name}
      </div>
    );
  }
}

export default Checkbox;
