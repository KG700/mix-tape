require 'spec_helper'
require 'rails_helper'

describe 'Basic test', type: :feature, js: true do
  context 'Load a page' do
    it 'prints the page' do
      visit('http://localhost:3001/signin')
      sleep 10
      puts page.body
    end
  end
end
