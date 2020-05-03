class Api::V1::PlaylistsController < ApplicationController
  skip_before_action :verify_authenticity_token
  

  def index
    p "-----index-----"
    p session[:playlist_id]
    render json: {player_id: session[:playlist_id]}
  end

  def create
    user = RSpotify::User.find(current_user.spotify_id)
    playlist_tracks_ids = params[:playlist]
    playlist = user.create_playlist!('My-Mixtape')
    p "---playlist.id---"
    p playlist.id
    session[:playlist_id] = playlist.id
    p "---session---"
    p session[:playlist_id]
    playlist_tracks = []
    playlist_tracks_ids.each do |track|
      playlist_tracks << RSpotify::Track.find(track)
    end
    playlist.add_tracks!(playlist_tracks)
  end

end
