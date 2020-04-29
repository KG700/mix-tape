class Api::V1::TracksController < ApplicationController
  def index
    render json: Track.all
  end
end