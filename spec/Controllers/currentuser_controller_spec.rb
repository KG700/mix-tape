require 'rails_helper'

RSpec.describe CurrentuserController, type: :controller do

  let(:user) { double :user }

  before(:each) do
    allow_any_instance_of(ApplicationController).to receive(:current_user).and_return(user)
  end
  
  # describe 'DELETE /' do

  #   it 'deletes a session' do
  #     user.destroy
  #     expect(user).not_to be(Currentuser)
  #   end

  # end


end