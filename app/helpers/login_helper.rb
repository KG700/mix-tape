module LoginHelper
  def persist_user(user_details)
    @user = User.find_by(spotify_id: user_details.id)
    if @user
      @user.update(auth_token: user_details.credentials.token)
    else
      @user = User.create(
        auth_token: user_details.credentials.token,
        username: user_details.display_name,
        spotify_id: user_details.id,
        image_url: user_details.images.blank? ? 'default' : user_details.images[0].url
      )
    end
    @user
  end

  def get_mock_user_details
    OmniAuth.config.test_mode = true
    omniauth_hash = { 
      'provider' => 'spotify',
      'uid' => '12345',
      'credentials' => {
        'expires' => true, 
        'expires_at' => 1_589_135_142,
        'refresh_token' => 'testRefreshToken',
        'token' => 'testToken'
      },
      'extra' => {
        'info' => {
          'display_name' => 'Test',
          'id' => 'test-username',
          'images' => 'default'
        }  
      }  
    }
    OmniAuth.config.add_mock(:spotify, omniauth_hash)
    request.env["omniauth.auth"] = OmniAuth.config.mock_auth[:spotify] 
  end

  def get_mock_tracks(user_details)
    tracks = [
      {
        # 'id' => 1,
        'name' => 'test',
        'href' => 'www.test.com',
        'artists' => {
          'name' => 'testy'
        }
      },
      {
        # 'id' => 2,
        'name' => 'test2',
        'href' => 'www.test2.com',
        'artists' => {
          'name' => 'testy2'
        }
      }
    ]
  end
end
