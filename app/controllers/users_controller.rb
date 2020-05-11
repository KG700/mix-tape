class UsersController < ApplicationController
  include TrackHelper
  include LoginHelper

  def spotify

    if Rails.env.test? 
      user_details = get_mock_user_details
    else
      user_details = get_spotify_user_details
    end

    user = persist_user(user_details)
  
    session[:current_user_id] = user.id

    if Rails.env.test? 
      tracks = get_mock_tracks
    else
      tracks = get_spotify_tracks(user_details)
    end
    persist_tracks(user.id, tracks)

    redirect_to root_path

  end

  private
  
  def get_spotify_user_details
    RSpotify::User.new(request.env['omniauth.auth'])
  end

  def get_spotify_tracks(user)
    user.top_tracks(limit: 50, time_range: 'short_term')
  end

  def get_mock_user_details
    OmniAuth.config.test_mode = true
    omniauth_hash = { 
      'provider' => 'spotify',
      'uid' => '12345',
      'credentials' => {
        'expires' => true, 
        'expires_at' => 1589135142,
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

  def get_mock_tracks
    tracks = [
      {
        'id' => 1,
        'name' => 'test',
        'href' => 'www.test.com',
        'artists' => {
          'name' => 'testy'
        }
      },
      {
        'id' => 2,
        'name' => 'test2',
        'href' => 'www.test2.com',
        'artists' => {
          'name' => 'testy2'
        }
      }
    ]
  end
end
