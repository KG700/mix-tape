class UsersController < ApplicationController
  include TrackHelper

  def new_spotify
    if Rails.env.test? 
      user_details = get_mock_user_details
    else
      user_details = get_spotify_user_details
    end
    user = persist_user(user_details)

    if Rails.env.test? 
      tracks = get_mock_tracks
    else
      tracks = get_spotify_tracks(user.id)
    end
    persist_tracks(tracks)

    redirect_to root
  end
  
  def spotify
    if Rails.env.test? 
      omniauth_mock
    end
    
    spotify_user = RSpotify::User.new(request.env['omniauth.auth'])

    puts "request.env['omniauth.auth']:"
    puts request.env['omniauth.auth']
    puts "spotify_user:"
    puts spotify_user

    @user = User.find_by(spotify_id: spotify_user.id)
    if @user
      @user.update(auth_token: spotify_user.credentials.token)
    else
      # p spotify_user.images[0]
      @user = User.create(
        auth_token: spotify_user.credentials.token,
        username: spotify_user.display_name,
        spotify_id: spotify_user.id,
        image_url: (!spotify_user.images || spotify_user.images.empty?) ? 'default' : spotify_user.images[0].url
      )
    end

    session[:current_user_id] = @user.id

    tracks = spotify_user.top_tracks(limit: 50, time_range: 'short_term')
    
    UserTrack.where(user_id: @user.id).destroy_all
    
    persist_tracks(@user.id, tracks)
    
    # @tracks.each do |track|
    #   @current_track = Track.find_by(spotify_track_id: track.id)
    #   @current_track ||= Track.create(
    #     spotify_track_id: track.id,
    #     track_name: track.name,
    #     track_url: track.href,
    #     artist_name: track.artists[0].name,
    #     )

    #   UserTrack.create(
    #     user_id: @user.id,
    #     track_id: @current_track.id
    #     )
    # end

    redirect_to root_path

  end

  def omniauth_mock
    OmniAuth.config.test_mode = true
    omniauth_hash = { 
      'provider' => 'spotify',
      'uid' => '12345',
      'credentials' => {
        'expires' => true, 
        'expires_at' => 1589135142,
        'refresh_token' => 'blahblah',
        'token' => 'testblah'
      },
      'extra' => {
        'info' => {
          'display_name' => 'Test',
          'id' => 'test-username',
          'images' => 'default'
        }  
      }  
    }

    #<OmniAuth::AuthHash 
      # credentials=#<OmniAuth::AuthHash 
      #   expires=true 
      #   expires_at=1589135142 
      #   refresh_token="-z8XzVMEHeUieIUlTdVsnaU" 
      #   token="BQDGLIPaE717KrdY8cq9Yrkxd5T--"
      # > 
      # extra=#<OmniAuth::AuthHash> 
      #   info=#<OmniAuth::AuthHash::InfoHash 
      #     display_name="Sophia Bell" 
      #     external_urls=#<OmniAuth::AuthHash 
      #       spotify="https://open.spotify.com/user/sophbell87"
      #       > 
      #     followers=#<OmniAuth::AuthHash 
      #       href=nil total=27
      #     >
      #     href="https://api.spotify.com/v1/users/sophbell87" 
      #     id="sophbell87" 
      #     images=#<Hashie::Array [
      #       #<OmniAuth::AuthHash height=nil url="https://scontent-frx5-1.xx.fbcdn.net/v/t1.0-1/p320x320/76762527_10102847637938153_6474527370379264000_n.jpg?_nc_cat=105&_nc_sid=0c64ff&_nc_ohc=JR0sM84GdhkAX-4JGpu&_nc_ht=scontent-frx5-1.xx&_nc_tp=6&oh=1f52e3e1f85331e3e5249d9175274c54&oe=5EDE4071" width=nil>]> type="user" uri="spotify:user:sophbell87"> provider="spotify" uid="sophbell87"
    
    OmniAuth.config.add_mock(:spotify, omniauth_hash)
    request.env["omniauth.auth"] = OmniAuth.config.mock_auth[:spotify] 
  end

end
