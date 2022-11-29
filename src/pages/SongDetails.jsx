import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { playPause, setActiveSong } from '../redux/features/playerSlice';
import { useGetSongDetailsQuery, useGetRelatedSongsQuery } from "../redux/services/shazamCore";
import { DetailsHeader, Error, Loader, RelatedSongs } from "../components";

const SongDetails = () => {
  const dispatch = useDispatch();
  const { activeSong, isPlaying } = useSelector((state) => state.player);
  const { songid } = useParams();
  const { data: songData, isFetching: isFetchingSongDetails, error } = useGetSongDetailsQuery({ songid });
  const { data, isFetching: isFetchingRelatedSongs } = useGetRelatedSongsQuery({ songid });

  const handlePauseClick = () => {
    dispatch(playPause(false));
  };

  const handlePlayClick = (song, i) => {
    dispatch(setActiveSong({ song, data, i }));
    dispatch(playPause(true));
  };

  if (isFetchingSongDetails || isFetchingRelatedSongs) return <Loader title="Searching song details." />;

  if (error) return <Error />;

  return (
    <div className="flex flex-col">
      <DetailsHeader
        artistId=""
        songData={songData}
      />
      <div className="mb-10">
        <h2 className="text-white font-bold text-3xl">Lyrics:</h2>
        <div className="mt-5">
          {songData?.sections[1].type === 'LYRICS'
            ? songData?.sections[1].text.map((line) => (
              <p className="text-gray-400 text-base my-1">{line}</p>
            )) : (
              <p className="text-gray-400 text-base my-1">Sorry, no lyrics found.</p>
            )}
        </div>
      </div>
      <RelatedSongs
        data={data}
        isPlaying={isPlaying}
        activeSong={activeSong}
        handlePauseClick={handlePauseClick}
        handlePlayClick={handlePlayClick}
      />
    </div>
  );
};

export default SongDetails;