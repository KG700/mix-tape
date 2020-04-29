class AddSpotifyIdToUsers < ActiveRecord::Migration[6.0]
  def change
    add_column :users, :spotify_id, :string
  end
end
