import React from "react";

class SignIn extends React.Component {
  constructor(props){
    super(props)
  }

  render() {
    return (
      <div>
        <form action='/auth/spotify'>
          <button>Sign in with Spotify</button>
        </form>
      </div>
    );
  }
}

export default SignIn;
