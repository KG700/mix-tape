class Api::V1::CurrentUserController < ApplicationController
  def index
    render json: User.all
  end
end