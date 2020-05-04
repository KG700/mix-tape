class CurrentuserController < ApplicationController
  def destroy
    session.clear
    redirect_to '/signin'
  end
end
