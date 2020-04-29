class LoginController < ApplicationController
  def create

    query_params = {
      client_id: 'db401929193448738f3c817962014ca6',
      response_type: "code",
      redirect_uri: 'http://localhost:3000/auth/spotify/callback',
      scope: 'user-top-read',
      show_dialog: true
    }
    url = "http://accounts.spotify.com/authorize/"
    redirect_to "#{url}?#{query_params.to_query}"

  end
end
