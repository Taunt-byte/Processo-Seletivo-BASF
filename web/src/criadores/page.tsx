import React from "react";

function Criadores() {
  // Dummy data for Marvel writers
  const writers = [
    {
      name: "Stan Lee",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Stan_Lee_December_2016.jpg/458px-Stan_Lee_December_2016.jpg",
      biography:
        "Stan Lee was an American comic book writer, editor, and executive, and a writer and publicist known for his work with Marvel Comics.",
    },
    {
      name: "Jack Kirby",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Jack-Kirby_art-of-jack-kirby_wyman-skaar.jpg/800px-Jack-Kirby_art-of-jack-kirby_wyman-skaar.jpg",
      biography:
        "Jack Kirby was an American comic book artist, writer, and editor, and is regarded as one of the most important and influential creators in comic book history.",
    },
    {
      name: "Steve Ditko",
      image: "https://upload.wikimedia.org/wikipedia/commons/3/39/Steve_Ditko_HS_Yearbook.jpeg",
      biography:
        "Steve Ditko was an American comic book artist and writer, best known for his work with Marvel Comics, including co-creating Spider-Man and Doctor Strange.",
    },
  ];

  return (
    <div className="bg-gray-100 p-6">
      <h2 className="text-3xl font-semibold mb-4">Top Marvel Writers</h2>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {writers.map((writer, index) => (
          <li key={index} className="bg-slate-900 rounded-lg shadow-md p-4">
            <div className="writer-image">
              <img
                src={writer.image}
                alt={writer.name}
                className="w-36 h-48 mx-auto"
              />
            </div>
            <div className="writer-details text-center mt-4">
              <h3 className="text-xl font-semibold text-slate-100">{writer.name}</h3>
              <p className="text-gray-400">{writer.biography}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Criadores;
