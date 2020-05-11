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
        image_url: (!user_details.images || user_details.images.empty?) ? 'default' : user_details.images[0].url
      )
    end
  end
end
