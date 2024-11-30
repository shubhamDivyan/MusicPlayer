import React, { useState, useContext, useEffect } from "react";
import { IoSearch } from "react-icons/io5";
import { SpotifyContext } from "../SpotifyContext";
import Artist from "../../asset/Artist.png";

const MiddleSide = () => {
  const [query, setQuery] = useState(""); // State to track user input
  const { tracks, playTrack, fetchTracks } = useContext(SpotifyContext);

  // Trigger fetching when the query changes
  useEffect(() => {
    fetchTracks(query); // Fetch tracks based on search query
  }, [query, fetchTracks]);

  return (
    <div className="h-screen overflow-y-auto">
      {/* Header Section */}
      <div className="flex mt-6 items-center">
        <ul className="flex m-4 gap-x-8 gap-y-4 font-semibold">
          <li className="hover:text-red-200 cursor-pointer">Music</li>
          <li className="hover:text-red-200 cursor-pointer">Podcast</li>
          <li className="hover:text-red-200 cursor-pointer">Live</li>
          <li className="hover:text-red-200 cursor-pointer">Radio</li>
        </ul>
        <div className="flex-1 flex justify-end">
          <div className="relative w-[60%] mr-10">
            <input
              type="text"
              placeholder="Search Artists or Song Name"
              className="w-full pl-4 pr-10 py-2 text-sm border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 bg-red-900"
              value={query} // Bind input value to the query state
              onChange={(e) => setQuery(e.target.value)} // Update query when input changes
            />
            <IoSearch className="absolute top-1/2 right-3 transform -translate-y-1/2 text-white" />
          </div>
        </div>
      </div>

      {/* Banner */}
      <div className="w-[80%] ml-[10%] mr-[10%]">
        <img src={Artist} alt="artist" />
      </div>

      {/* Song List */}
      <div className="flex flex-row justify-around mt-4  ml-[10%] mr-[10%] ">
      <p className="">#</p>

<p className="w-48 truncate text-white">Name</p>
        <p className="w-20 text-center">popularity</p>
        <p className="w-16 text-center">Duration</p>
        <p className="w-48 truncate text-white">Album</p>
      </div>
      <div className="mt-4 w-[80%] ml-[10%] mr-[10%]">
        {tracks.length > 0 ? (
          tracks.map((track) => (
            <div
              key={track.serial}
              onClick={() => playTrack(track)} // Play the selected track
              className="flex flex-row justify-around items-center py-2 border-b border-gray-300 cursor-pointer hover:bg-gray-700"
            >
              <p className="w-6 text-center">{track.serial}</p>
              <div className="w-12 h-12">
                <img
                  src={track.image}
                  alt={track.name}
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
              <p className="w-48 truncate text-white">{track.name}</p>
              <p className="w-20 text-center">{track.popularity}</p>
              <p className="w-16 text-center">{track.duration} mins</p>
              <p className="w-48 truncate text-white">{track.album}</p>
            </div>
          ))
        ) : (
          <p className="text-white text-center mt-6">No results found</p> // Show message if no tracks are found
        )}
      </div>
    </div>
  );
};

export default MiddleSide;
