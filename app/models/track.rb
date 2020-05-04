class Track < ApplicationRecord
  has_many :user_tracks, dependent: :destroy
  has_many :users, through: :user_tracks

  validates :spotify_track_id, :track_name, :track_url, :artist_name, presence: true
end
