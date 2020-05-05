import React from "react";
import Default from '../../assets/images/default.png';

class CurrentUser extends React.Component {
  constructor(props) {
    super(props)
    this.defaultPic = this.defaultPic.bind(this);
  }

  defaultPic() {
    if (this.props.currentUser.image_url === 'default') {
      return Default
    } else {
      return this.props.currentUser.image_url
    };
  }

  render() {
    const profilePic = this.defaultPic()
    const img = {
      borderRadius: '50%',
      height: "60px",
      width: "60px",
      border: "solid 2px black" 
    };

    return (
    
      <img src={profilePic} style={img} alt="ProfilePicture"  /> 
    );
  }
}

export default CurrentUser;
