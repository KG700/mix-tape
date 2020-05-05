require 'rails_helper'

RSpec.describe User, type: :model do

  subject(:user) { described_class.new(
      id: 1,
      username: 'fakeuser',
      auth_token: 'auth-token',
      spotify_id: 'fakeusername',
      image_url: 'http://profileimage.com',
      playlist_id: nil,
    )
  }

  it 'is not valid without a username' do
    user.username = nil
    expect(user).to_not be_valid
  end

  it 'is not valid without an auth token' do
    user.auth_token = nil
    expect(user).to_not be_valid
  end

  it 'is not valid without a spotify id' do
    user.spotify_id = nil
    expect(user).to_not be_valid
  end

  it 'is not valid without an image_url' do
    user.image_url = nil
    expect(user).to_not be_valid
  end

  it 'is valid without a playlist id' do
    user.playlist_id = nil
    expect(user).to be_valid
  end

  it 'can add a playlist id' do
    user.playlist_id = '123456789'
    expect(user.playlist_id).to eq '123456789'
  end

  it 'can update the auth token' do
    user.auth_token = 'new-auth-token'
    expect(user.auth_token).to eq 'new-auth-token'
  end

end
