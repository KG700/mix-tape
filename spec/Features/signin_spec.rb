# # frozen_string_literal: true

require 'spec_helper'
require 'rails_helper'

describe 'Signup Flow', type: :feature, js: true do

  before do
    visit('/signin')
  end
  
  context 'when I click the sign in button' do
    it 'brings them to spotify authentication page' do
      sleep 2
      find("#signinButton").click
      sleep 2
      expect(page).to have_current_path('/auth/spotify/callback')
      sleep 2
    end
  end
  
end