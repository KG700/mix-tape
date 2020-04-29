Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html


  namespace :api do
    namespace :v1 do
      resources :users, only: [:index]
      resources :tracks, only: [:index]
    end
  end

  get '/auth/spotify/callback', to: 'users#spotify'
  get '/*path' => "home#index"

  root "home#index"
end
