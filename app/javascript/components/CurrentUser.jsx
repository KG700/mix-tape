import React from "react";

class CurrentUser extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const profilePicture = this.props.currentUser.image_url
    const userName = this.props.currentUser.username

    return (
      <div>
        {userName}
        <img src={profilePicture} alt="ProfilePicture" height="42" width="42" />
      </div>
    );
  }
}

export default CurrentUser;
