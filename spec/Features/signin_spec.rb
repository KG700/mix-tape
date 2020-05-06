# frozen_string_literal: true

require 'rails_helper'

describe "GET - signin", :type => :feature do
  it 'welcomes the user to mix tape' do
    visit('http://localhost:3000/signin')
    expect(page.title).to have_content("MixTape")
  end
end
describe "GET - signin", :type => :feature do
  it 'tells user to sign in with spotify' do
    visit('http://localhost:3000/signin')
    expect(page).to have_selector(:link_or_button, 'SIGN IN WITH SPOTIFY')
  end
end
# describe "GET '/login", :type => :feature do
#   it 'shows a login form' do
#     visit('http://localhost:3002/login')
#     expect(page).to have_content("Login")
#     puts 'cool, the login form page says Login'
#   end
# end