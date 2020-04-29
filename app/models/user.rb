class User < ApplicationRecord
  has_many :tracks, through: :user_tracks
  has_many :user_tracks
end
