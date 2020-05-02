class Api::V1::UsersController < ApplicationController
  def index
    render json: User.all
  end

  # def current_user
  #   current_user = User.find(session[:user_id])
  #   render json: current_user
  # end

  # def create
  #   fruit = Fruit.create(fruit_params)
  #   render json: fruit
  # end
  #
  # def destroy
  #   Fruit.destroy(params[:id])
  # end
  #
  # def update
  #   fruit = Fruit.find(params[:id])
  #   fruit.update_attributes(fruit_params)
  #   render json: fruit
  # end
  #
  # private
  #
  # def fruit_params
  #   params.require(:fruit).permit(:id, :name, :description)
  # end
end
