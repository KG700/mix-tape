# # frozen_string_literal: true

require 'spec_helper'
require 'rails_helper'

describe 'Signup Flow', type: :feature, js: true do

  before do
    visit('/signin')
    find(".signinButton").click
  end
  
  context 'when I click the sign in button' do
    it 'brings them to spotify authentication page' do
      sleep 2
      expect(page.body).to have_content('To continue, log in to Spotify.')
    end

    # This test doesn't quite work
    # it 'signs them into our app' do
    #   sleep 2
    #   fill_in 'username', with: 'xxx'
    #   fill_in 'password', with: 'xxx'
    #   click_button 'Log In'
    #   sleep 2
    #   expect(page.body).to have_content('Friends')
    # end
  end
  
end
