# frozen_string_literal: true

require 'rails_helper'

RSpec.describe User, type: :model do

  subject { described_class.new }
  
  it 'is definitely a class' do
    subject.username = "My name"
    subject.spotify_id = "username"
    expect(subject).to be_valid
  end

end
