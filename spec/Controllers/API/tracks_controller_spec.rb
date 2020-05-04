
# frozen_string_literal: true

require 'rails_helper'

RSpec.describe Api::V1::TracksController, type: :controller do

  # let(:user) { double :user }

  # before(:each) do
  #   allow_any_instance_of(ApplicationController).to receive(:current_user).and_return(user)
  # end


  # let(:user) {double :user }
  # let(:id) { '1' }
  # let(:tracks) {double :tracks}

  #   before do
  #     user.stub(:id).and_return(id)
  #     User.stub(:find).and_return(user)
  #     user.stub(:tracks).and_return(Array)
  #   end
  
  # describe 'GET /index ' do
  #   it 'responds with 200' do
  #     get :index, params: { user_id: user.id }
  #     expect(response).to have_http_status(200)
  #   end

  # #   # it 'returns a json response' do
  # #   #   expect(response.content_type).to eq("application/json")
  # #   # end
  # end

  # context "when there are no tracks in the database" do
  #   let(:tracks) { Track.none }

  #   before do
  #     allow(Track).to receive(:all).and_return(tracks)

  #     get :index, params: { users: user.id }
  #   end

  #   specify { expect(response).to have_http_status(200) }
  #   specify { expect(JSON.parse(response.body)).to eq([]) }
  # end
  


end