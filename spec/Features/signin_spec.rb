# # frozen_string_literal: true

require 'spec_helper'
# require 'rails_helper'

# describe "GET - signin", :type => :feature do
#   it 'welcomes the user to mix tape' do
#     visit('http://localhost:3000/signin')
#     expect(page.title).to have_content("MixTape")
#   end
# end

describe 'Signup Flow', type: :feature, js: true do

  # Trying to get the page to show certain features before we run our tests
  before do
    visit('/signin')
    # find(".signinButton").click
    find(".testyButton")
    # page.should have_form(:visible => true)
    # expect(page).to have_selector('#signinButton', visible: true)
    # page.find('.signinButton').click()
    # page.all('li', text: 'Select friends to share music with')
  end

  context 'authenticate via spotify' do
    it 'brings them to page authentication page' do
      click_button
      expect(page).to have_current_path('/auth/spotify')
    end
  end
  
end