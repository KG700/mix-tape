class CreateUserTracks < ActiveRecord::Migration[6.0]
  def change
    create_table :user_tracks do |t|
      t.belongs_to :user
      t.belongs_to :track
      t.timestamps
    end
  end
end
