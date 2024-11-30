import React, { createContext, useState } from "react";
import { Howl } from "howler";
import songs from "./song"; // Import the song list

export const SpotifyContext = createContext();

const SpotifyProvider = ({ children }) => {
  const [tracks, setTracks] = useState(songs); // Use the song list as initial data
  const [currentTrack, setCurrentTrack] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [howl, setHowl] = useState(null);

  // Play the selected track
  const playTrack = (track) => {
    if (howl) howl.stop(); // Stop the currently playing track

    if (track.previewUrl) {
      const newHowl = new Howl({
        src: [track.previewUrl],
        html5: true,
        onend: () => setIsPlaying(false),
      });

      newHowl.play();
      setHowl(newHowl);
      setCurrentTrack(track);
      setIsPlaying(true);
    }
  };

  // Toggle play/pause
  const togglePlay = () => {
    if (howl) {
      if (isPlaying) {
        howl.pause();
      } else {
        howl.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  // Filter tracks based on search query
  const fetchTracks = (query) => {
    if (!query) {
      setTracks(songs); // Reset to the full song list if the query is empty
    } else {
      const filteredTracks = songs.filter(
        (track) =>
          track.name.toLowerCase().includes(query.toLowerCase()) ||
          track.artist.toLowerCase().includes(query.toLowerCase())
      );
      setTracks(filteredTracks);
    }
  };

  return (
    <SpotifyContext.Provider
      value={{
        tracks,
        currentTrack,
        isPlaying,
        playTrack,
        togglePlay,
        fetchTracks, // Provide fetchTracks for search functionality
      }}
    >
      {children}
    </SpotifyContext.Provider>
  );
};

export default SpotifyProvider;
