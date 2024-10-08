import React, { useEffect, useState } from 'react'
import Container from "../../common/containerClass"

import heroImage from "../../../assets/home/images/realestate.avif"
import { IoSearch } from "react-icons/io5";




const HeroSection = ({ onSearch }) => {

  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) => {
    const word = e.target.value.trim();

    console.log(word)
    setSearchTerm(word);
    onSearch(word); // Pass search term to parent
  };


  return (
    <div
      style={{
        backgroundImage: `url(${heroImage})`,
        backgroundSize: "cover",
        width: "100%",
        height: "70vh",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      className="py-10"
    >
      <Container>
        <div className="flex flex-col items-center justify-center text-white gap-44">
          <h1 className="text-[60px] w-[60%] font-bold text-center leading-tight">
            The #1 site real estate professionals trust*
          </h1>

          <div className="bg-white px-4 py-2 items-center rounded-3xl w-[40%] text-black flex flex-row justify-between">
            <div>
              <input
                onChange={handleSearch}
                type="text"
                placeholder="Enter an adress"
                className="outline-none"
              />
            </div>

            <button className="bg-black p-3 rounded-full ">
              <IoSearch className="text-white" />
            </button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default HeroSection