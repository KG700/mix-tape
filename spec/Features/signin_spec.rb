# # frozen_string_literal: true

require 'spec_helper'
require 'rails_helper'

describe 'Signup Flow', type: :feature, js: true do

  before do
    visit('/signin')
    find(".signinButton").click
  end

  context 'authenticate via spotify' do
    it 'brings them to page authentication page' do
      click_button
      expect(page).to have_current_path('/auth/spotify')
    end
  end
  
end