class Api::V1::TracksController < ApplicationController
  def index
    @user = User.find(params[:user_id])
    render json: @user.tracks.all
  end
end
