class Api::V1::PlaylistsController < ApplicationController
  skip_before_action :verify_authenticity_token

  def index
    render json: { player_id: current_user.playlist_id }
  end

  def create
    user = find_playlist_owner(current_user.spotify_id)
    playlist_tracks_ids = params[:playlist]
    playlist = user.create_playlist!('My Mixtape')
    session[:playlist_id] = playlist.id
    playlist_tracks = []
    playlist_tracks_ids.each do |track|
      playlist_tracks << RSpotify::Track.find(track)
    end
    playlist.add_tracks!(playlist_tracks)

    current_user.playlist_id = playlist.id
    current_user.save!

    render json: { player_id: current_user.playlist_id }
  end

  private

  def find_playlist_owner(user_details)
    RSpotify::User.find(user_details)
  end

end
