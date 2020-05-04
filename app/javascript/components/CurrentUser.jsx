import React from "react";

class CurrentUser extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const profilePicture = this.props.currentUser.image_url

    return (
        <img src={profilePicture} alt="ProfilePicture" height="42" width="42" />
    );
  }
}

export default CurrentUser;
