class Api::V1::PlaylistsController < ApplicationController
  skip_before_action :verify_authenticity_token

  def index
    render json: {player_id: session[:playlist_id]}
  end

  def create
    p current_user
    user = RSpotify::User.find(current_user.spotify_id)
    playlist_tracks_ids = params[:playlist]
    p playlist_tracks_ids
    playlist = user.create_playlist!('My-Mixtape')
    p playlist
    playlist_tracks = []
    playlist_tracks_ids.each do |track|
      playlist_tracks << RSpotify::Track.find(track)
    end
    playlist.add_tracks!(playlist_tracks)
    session[:playlist_id] = playlist.id
  end

end
