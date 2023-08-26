"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import "./Revista.css"; // Importe o arquivo CSS

const publicKey = "6769f87e1fa3ac21db5b1430d6d7412c";
const privateKey = "21938c6e0f7825e615535b7f1a8abe06d0ebb8f2";
const timestamp = new Date().getTime().toString();
const hash = require("crypto")
  .createHash("md5")
  .update(timestamp + privateKey + publicKey)
  .digest("hex");

export default function Revista() {
  const [comics, setComics] = useState([]);

  useEffect(() => {
    // Faz a solicitação à API da Marvel para obter informações sobre revistas
    const fetchComics = async () => {
      try {
        const response = await axios.get(
          `https://gateway.marvel.com/v1/public/comics?limit=10&ts=${timestamp}&apikey=${publicKey}&hash=${hash}`
        );

        const comicsData = response.data.data.results;

        // Filtra apenas as revistas com imagens
        const comicsWithImages = comicsData.filter((comic) => {
          return comic.thumbnail && comic.thumbnail.path && comic.thumbnail.extension;
        });

        // Limita a exibição a apenas 4 revistas
        setComics(comicsWithImages.slice(0, 4));
      } catch (error) {
        console.error("Error fetching comic data:", error);
      }
    };

    fetchComics();
  }, []);

  return (
    <div id="revista"className="w-full max-w-screen-xl mx-auto py-8">
      <h2 className="text-2xl font-semibold mb-4">New Marvel Comics</h2>
      <div className="comic-carousel flex flex-wrap justify-center">
        {comics.map((comic) => (
          <div key={comic.id} className="comic-card w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 p-2">
            <img
              src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
              alt={comic.title}
              className="mx-auto mb-2 sm:w-32 md:w-48 lg:w-64 xl:w-96 h-auto block"
            />
            <h3 className="text-lg font-semibold mt-2 text-center">{comic.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
