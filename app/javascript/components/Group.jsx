import React from "react";

class Group extends React.Component {
  constructor(props){
    super(props)
  }


  render() {

    const container = {
      display: "flex", 
      flexDirection: "row", 
      justifyContent: "space-around",
      marginTop: "20px"
    }

    const groupImg = {
      borderRadius: '50%',
      height: "60px",
      width: "60px",
      border: "solid 2px black"
    };

    const group = this.props.selectedUsers.map(user => {
      return (
        <img src={user.image_url} alt="ProfilePicture" style={groupImg} />
      )
    })

    return (

      <div style={container}>
        {group}
      </div>

    )
  }

}

export default Group;
