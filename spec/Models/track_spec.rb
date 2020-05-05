require 'rails_helper'

RSpec.describe Track, type: :model do

  subject(:track) { described_class.new(
      id: 1,
      spotify_track_id: '123456789',
      track_name: 'A Song',
      track_url: 'http://trackurl.com',
      artist_name: 'Best Artist',
    )
  }

  it 'is not valid without a spotify track id' do
    track.spotify_track_id = nil
    expect(track).to_not be_valid
  end

  it 'is not valid without an track name' do
    track.track_name = nil
    expect(track).to_not be_valid
  end

  it 'is not valid without a track url' do
    track.track_url = nil
    expect(track).to_not be_valid
  end

  it 'is not valid without an artist name' do
    track.artist_name = nil
    expect(track).to_not be_valid
  end

end
