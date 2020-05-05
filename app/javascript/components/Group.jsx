import React from "react";

class Group extends React.Component {
  constructor(props){
    super(props)
  }


  render() {

    const container = {
      display: "flex", 
      flexDirection: "row", 
      flexWrap: "wrap", 
      justifyContent: "space-around",
      marginTop: "20px"
    }

    const groupImg = {
      borderRadius: '50%',
      height: "60px",
      width: "60px",
      border: "solid 2px black",
      marginLeft: "5px",
      marginRight: "5px"
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
