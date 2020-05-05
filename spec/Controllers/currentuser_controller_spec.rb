require 'rails_helper'

RSpec.describe CurrentuserController, type: :controller do

  let(:user) { double :user }

  before(:each) do
    allow_any_instance_of(ApplicationController).to receive(:current_user).and_return(user)
    session[user]
  end
  
  describe 'DELETE /' do
  
    it 'allows user to log out' do
      delete :destroy
      session.should be_empty
    end
  end

end
