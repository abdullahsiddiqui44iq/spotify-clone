// eslint-disable-next-line no-unused-vars
import React from "react";
import Navbar from "../components/Navbar";
import { albumsData } from "../assets/assets";
import { songsData } from "../assets/assets";
import AlbumItem from "./AlbumItem";
function DisplayHome() {
  return (
    <>
      <Navbar />
      <div className="mb-4">
        <h1 className="my-5 font-bold text-2xl">Featured Charts</h1>
        <div className="flex overflow-auto">
          {albumsData.map((item, index) => (
            <AlbumItem
              key={index}
              name={item.name}
              desc={item.desc}
              image={item.image}
            />
          ))}
        </div>
      </div>
      <div className="mb-4">
        <h1 className="my-5 font-bold text-2xl">Today's biggets hits</h1>
        <div className="flex overflow-auto">
          {}
        </div>
      </div>
    </>
  );
}

export default DisplayHome;
