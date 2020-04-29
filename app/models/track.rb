class Track < ApplicationRecord
  has_many :users, through: :user_tracks
  has_many :user_tracks
end
