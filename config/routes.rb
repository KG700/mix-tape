Rails.application.routes.draw do

  namespace :api do
    namespace :v1 do
      resources :currentuser, only: [:index]
      resources :users, only: [:index] do
        resources :tracks
      end
    end
  end

  get '/auth/spotify/callback', to: 'users#spotify'
  get '/*path' => "home#index"
  # get '/add/playlist', to: 'track#spotify'

  get '/signin', to: 'signin#index'

  root "home#index"
end
