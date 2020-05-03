class Track < ApplicationRecord
  has_many :user_tracks, dependent: :destroy
  has_many :users, through: :user_tracks
end
