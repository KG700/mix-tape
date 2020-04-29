class CreateTracks < ActiveRecord::Migration[6.0]
  def change
    create_table :tracks do |t|
      t.string :spotify_track_id, null: false, default: ''
      t.string :track_name, null: false, default: ''
      t.string :track_url, null: false, default: ''
      t.string :artist_name, null: false, default: ''

      t.timestamps
    end
  end
end
