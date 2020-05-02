class UsersController < ApplicationController

  def spotify
    spotify_user = RSpotify::User.new(request.env['omniauth.auth'])

    @user = User.find_by(spotify_id: spotify_user.id)
    if @user
      @user.update(auth_token: spotify_user.credentials.token)
    else
      @user = User.create(
        auth_token: spotify_user.credentials.token,
        username: spotify_user.display_name,
        spotify_id: spotify_user.id,
        image_url: spotify_user.images[0].url
      )
    end

    session[:user_id] = @user.id

    @tracks = spotify_user.top_tracks(time_range: 'medium_term')

    UserTrack.where(user_id: @user.id).destroy_all

    @tracks.each do |track|
      @current_track = Track.find_by(spotify_track_id: track.id)
      @current_track ||= Track.create(
        spotify_track_id: track.id,
        track_name: track.name,
        track_url: track.href,
        artist_name: track.artists[0].name,
        )
        UserTrack.create(
          user_id: @user.id,
          track_id: @current_track.id
          )
    end

    redirect_to root_path

  end

end
