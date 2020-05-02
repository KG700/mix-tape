class Api::V1::PlaylistsController < ApplicationController
  skip_before_action :verify_authenticity_token

  def index
  
  end

  def create
    user = RSpotify::User.find(current_user.spotify_id)
    p user
    playlist_tracks = params[:playlist]
    user.create_playlist!('my-first-playlist')
  
  end

end