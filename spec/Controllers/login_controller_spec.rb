# frozen_string_literal: true

require 'rails_helper'

RSpec.describe LoginController, type: :controller do

  it "allows authenticated access" do
    sign_in
    get :index
   
    expect(response).to be_success
  end

end
