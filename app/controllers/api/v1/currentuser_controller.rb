class Api::V1::CurrentuserController < ApplicationController
  def index
    render json: current_user
  end
end
