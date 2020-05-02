class Api::V1::CurrentUserController < ApplicationController
  def index
    current_user = User.find(session[:user_id])
    render json: current_user
  end
end
