module TrackHelper
  def persist_tracks(user_id, tracks)
    UserTrack.where(user_id: user_id).destroy_all

    tracks.each do |track|
      current_track = Track.find_by(spotify_track_id: track.id)
      current_track ||= Track.create(
        spotify_track_id: track.id,
        track_name: track.name,
        track_url: track.href,
        artist_name: track.artists[0].name,
        )

      UserTrack.create(
        user_id: user_id,
        track_id: current_track.id
        )
    end
  end

  def get_mock_tracks(_user_details)
    tracks = {
      "items": [
        {
          'artists' => [
            {
              'name' => 'testy1'
            } 
          ],
          'id' => '12345',
          'name' => 'test',
          'href' => 'www.test.com',
        },
        {
          'artists' => [
            {
              'name' => 'testy2'
            } 
          ],
          'id' => '54321',
          'name' => 'test2',
          'href' => 'www.test2.com',
        }
      ] 
    }
  end
end
