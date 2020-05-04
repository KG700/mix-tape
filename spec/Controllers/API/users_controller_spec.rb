
# frozen_string_literal: true

require 'rails_helper'

RSpec.describe Api::V1::UsersController, type: :controller do

  context "when there's no users in the database" do
    let(:user) { User.none }

    before do
      allow(User).to receive(:all).and_return(user)

      get :index
    end

    specify { expect(response).to have_http_status(200) }
    specify { expect(JSON.parse(response.body)).to eq([]) }
  end
  
end