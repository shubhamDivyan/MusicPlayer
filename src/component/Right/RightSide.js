import React, { useContext, useState, useEffect } from "react";
import { SpotifyContext } from "../SpotifyContext";
import { FaPlay, FaPause, FaStepBackward, FaStepForward, FaRandom, FaRedo } from "react-icons/fa";

const RightSide = () => {
  const { currentTrack, isPlaying, togglePlay } = useContext(SpotifyContext);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let interval;
    if (currentTrack && isPlaying) {
      interval = setInterval(() => {
        setProgress((prev) => {
          const newProgress = prev + (100 / (currentTrack.duration * 60));
          return newProgress < 100 ? newProgress : 100;
        });
      }, 1000);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isPlaying, currentTrack]);

  // Function to format time (minutes:seconds)
  const formatTime = (timeInMinutes) => {
    const minutes = Math.floor(timeInMinutes);
    const seconds = Math.round((timeInMinutes % 1) * 60);
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  const elapsedTime = (progress / 100) * currentTrack?.duration || 0; // Elapsed time in minutes

  return (
    <div className="absolute bottom-0 right-0 m-4 w-[300px] h-[300px] bg-red-800 shadow-lg rounded-2xl">
      {currentTrack ? (
        <>
          <div className="text-center mt-4 font-semibold text-white">
            <p>Now Playing</p>
            <div className="flex justify-center mt-4">
  <img
    src={currentTrack.image}
    alt="track-art"
    className="w-[200px] h-[100px] rounded-lg shadow-md"
  />
</div>
            <p className="mt-2">{currentTrack.name}</p>
            <p className="text-sm text-gray-300">{currentTrack.artist}</p>
          </div>
          

          {/* Progress Bar Section */}
          <div className="mx-4 mt-6 flex items-center gap-4">
            {/* Elapsed Time */}
            <p className="text-xs text-gray-200">
              {formatTime(elapsedTime)} {/* Converts elapsed time to mm:ss */}
            </p>
            
            {/* Progress Bar */}
            <div className="w-full h-2 bg-gray-300 rounded-full flex-1">
              <div
                style={{ width: `${progress}%` }}
                className="h-2 bg-green-500 rounded-full"
              ></div>
            </div>

            {/* Total Duration */}
            <p className="text-xs text-gray-200">
              {formatTime(currentTrack.duration)} {/* Converts total duration to mm:ss */}
            </p>
          </div>

          {/* Controls */}
          <div className="flex justify-center gap-4 mt-[20px]">
            <button className="text-white hover:text-green-400">
              <FaRandom size={24} />
            </button>
            <button className="text-white hover:text-green-400">
              <FaStepBackward size={24} />
            </button>
            <button onClick={togglePlay} className="text-white hover:text-green-400">
              {isPlaying ? <FaPause size={24} /> : <FaPlay size={24} />}
            </button>
            <button className="text-white hover:text-green-400">
              <FaStepForward size={24} />
            </button>
            <button className="text-white hover:text-green-400">
              <FaRedo size={24} />
            </button>
          </div>
        </>
      ) : (
        <p className="text-center text-white mt-16">No song selected</p>
      )}
    </div>
  );
};

export default RightSide;
