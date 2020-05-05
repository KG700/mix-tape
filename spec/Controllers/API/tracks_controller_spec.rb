# frozen_string_literal: true

require 'rails_helper'

RSpec.describe Api::V1::TracksController, type: :controller do

  describe 'GET /index ' do
    it 'responds with 200' do
      expect(response).to have_http_status(200)
    end
  end

  # let(:user) { double :user}
  # let(:track) { double :track }

  # before do
  #   allow(Track).to receive(:all).and_return(track)
  # end
    
  # it 'should have an empty json response' do
  #   expect(JSON.parse(response.body)).to eq(track)
  # end

  # context "when there are no tracks in the database" do

  #   let(:user) { double :user}
  #   # let(:track) {double :track}
  #   let(:track) { Track.none }
    
  #   before do
  #   #   allow_any_instance_of(ApplicationController).to receive(:current_user).and_return(user)
  #   #   allow(user).to receive(:user_id) { user.id }
  #     allow(Track).to receive(:all).and_return(track)

  #   #   get :index, params: {user_id: user.id} 

  #   end

  #   it 'should have an empty json response' do
  #     expect(JSON.parse(response.body)).to eq(user.track)
  #   end
    
  # end

end
