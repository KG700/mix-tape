class User < ApplicationRecord
  has_many :user_tracks
  has_many :tracks, through: :user_tracks
end
