import Sound from 'react-sound';
import React from 'react';
import Song from '../music/harryPotterMusic.mp3';

const SoundMusic = (
  handleSongLoading,
  handleSongPlaying,
  handleSongFinishedPlaying
) => {
  return (
    <div>
      <Sound
        url={Song}
        playStatus={Sound.status.PLAYING}
        onLoading={handleSongLoading}
        //  onPlaying={handleSongPlaying}
        onFinishedPlaying={handleSongFinishedPlaying}
      />
    </div>
  );
};

export default SoundMusic;
