"use client";

import { useState } from "react";
import axios from "axios";

const publicKey = "6769f87e1fa3ac21db5b1430d6d7412c";
const privateKey = "21938c6e0f7825e615535b7f1a8abe06d0ebb8f2";
const timestamp = new Date().getTime().toString();
const hash = require("crypto")
  .createHash("md5")
  .update(timestamp + privateKey + publicKey)
  .digest("hex");

export default function Home() {
  const [characterName, setCharacterName] = useState("");
  const [characterData, setCharacterData] = useState(null);

  const searchCharacter = async () => {
    try {
      const response = await axios.get(
        `https://gateway.marvel.com/v1/public/characters?name=${characterName}&ts=${timestamp}&apikey=${publicKey}&hash=${hash}`
      );

      const character = response.data.data.results[0];
      if (character) {
        setCharacterData({
          name: character.name,
          description: character.description,
          thumbnail: `${character.thumbnail.path}.${character.thumbnail.extension}`,
        });
      } else {
        setCharacterData(null);
      }
    } catch (error) {
      console.error("Error fetching character data:", error);
    }
  };

  return (
    <div id="herois" className="p-6 bg-gray-100 bg-slate-900 text-slate-100">
      <div className="w-full sm:w-1/2">
        <h1 className="text-2xl sm:text-3xl font-semibold mb-4">Marvel Character Search</h1>
        <div className="flex space-x-4">
          <input
            type="text"
            placeholder="Enter character name"
            className="px-4 py-2 border rounded-lg w-full text-slate-900"
            value={characterName}
            onChange={(e) => setCharacterName(e.target.value)}
          />
          <button
            onClick={searchCharacter}
            className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
          >
            Search
          </button>
        </div>
      </div>
      <div className="flex items-center justify-center mt-4 sm:mt-6">
        {characterData && (
          <>
            <img
              src={characterData.thumbnail}
              alt={characterData.name}
              className="w-32 sm:w-48 h-auto mx-4 rounded-lg"
            />
            <div className="p-8 rounded-lg shadow-lg">
              <h2 className="text-xl font-semibold mt-4 sm:mt-6">
                {characterData.name}
              </h2>
              <p className="mt-2">{characterData.description}</p>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
