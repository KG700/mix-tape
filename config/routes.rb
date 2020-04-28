Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  get '/auth/spotify/callback', to: 'users#spotify'

  get '/*path' => "home#index"

  root "home#index"
end
