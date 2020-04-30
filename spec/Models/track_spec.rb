# frozen_string_literal: true

require 'rails_helper'

RSpec.describe Track, type: :model do

  subject { described_class.new }

  it 'is definitely a class' do
    subject.spotify_track_id = 5
    subject.track_name = "hello"
    subject.track_url = "https://website.com"
    subject.artist_name = "test"
    expect(subject).to be_valid
  end

end
