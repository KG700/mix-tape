# frozen_string_literal: true

require 'rails_helper'

RSpec.describe Api::V1::PlaylistsController, type: :controller do
  
  let(:user) { double :user, playlist_id: "H40ldfk2l234lsdoi" }

  before(:each) do
    allow_any_instance_of(ApplicationController).to receive(:current_user).and_return(user)
  end

  describe 'GET /index ' do
    it 'responds with 200' do
      get :index
      expect(response).to have_http_status(200)
      expect(JSON.parse(response.body)).to eq({ "player_id" => "H40ldfk2l234lsdoi" })
    end

  end

  describe 'POST' do

    # let rspotify_user:
    # before(:each) do
    #   @playlist = Playlist.create {:playlist}
    # end

  # it 'responds with 200' do
  #   expect(response).to have_http_status(200)
  # end

  # it 'creates a playlist' do
   
  # end

  end

end
