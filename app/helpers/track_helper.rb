module TrackHelper
    def persist_tracks(user_id, tracks)
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
    end
end
