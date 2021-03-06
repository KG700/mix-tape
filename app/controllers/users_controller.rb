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
      tracks = get_mock_tracks(user_details)
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

end
