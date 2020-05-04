class User < ApplicationRecord
  has_many :user_tracks, dependent: :destroy
  has_many :tracks, through: :user_tracks, dependent: :destroy

  validates :username, :auth_token, :spotify_id, :image_url, presence: true
end
