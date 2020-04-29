class UserTrack < ApplicationRecord
  has_many :tracks
  has_many :users
end
