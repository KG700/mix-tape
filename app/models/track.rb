class Track < ApplicationRecord
  has_many :user_tracks
  has_many :users, through: :user_tracks
end
