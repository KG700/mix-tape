class Api::V1::CurrentuserController < ApplicationController
  def index
    # current_user = User.find(session[:current_user_id])
    render json: current_user
  end
end
