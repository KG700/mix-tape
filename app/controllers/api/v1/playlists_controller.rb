class Api::V1::PlaylistsController < ApplicationController
  skip_before_action :verify_authenticity_token

  def index
  
  end

  def create
    
    p params[:playlist]

  
  end

end