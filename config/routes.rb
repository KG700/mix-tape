Rails.application.routes.draw do

  namespace :api do
    namespace :v1 do
      resources :currentuser, only: [:index]
      resources :users, only: [:index] do
        resources :tracks
      end
      resources :playlists, only: [:create, :index]
    end
  end

  get '/auth/spotify/callback', to: 'users#spotify'
  get '/signin', to: 'signin#index'
  get '/logout', to: 'currentuser#destroy'

  get '/*path' => "home#index"
  # get '/add/playlist', to: 'track#spotify'

  root "home#index"
end
