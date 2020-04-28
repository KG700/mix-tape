require 'rspotify/oauth'

Rails.application.config.middleware.use OmniAuth::Builder do
  provider :spotify, 'spotify_client_id', 'spotify_client_secret',
  scope: 'user-top-read'
end
