import React, { useState, useEffect } from "react";
import SingleAnnouncement from "../single-announcement";
import Container from "../../common/containerClass";

// React icons
import { IoChevronUp } from "react-icons/io5";
import { IoChevronDown } from "react-icons/io5";

const MainAnnouncements = ({ searchTerm }) => {
  const [announcements, setAnnouncements] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [sortedAnnouncements, setSortedAnnouncements] = useState([]);
  const [sortCriteria, setSortCriteria] = useState(null);

  // Fetch announcements (simulating fetching from a db.json file)
  useEffect(() => {
    const fetchAnnouncements = async () => {
      try {
        const response = await fetch(`http://localhost:3000/announcements`);
        const data = await response.json();
        setAnnouncements(data);
        setSortedAnnouncements(data); // Initialize sortedAnnouncements with the fetched data
      } catch (error) {
        console.error("Error fetching announcements:", error);
      }
    };

    fetchAnnouncements();
  }, []);

  const toggleDown = () => {
    setIsOpen(!isOpen);
  };

  // Apply search and sorting in the same useEffect
  useEffect(() => {
    let filtered = [...announcements];

    if (searchTerm) {
      filtered = filtered.filter((announcement) =>
        announcement.description
          .toLowerCase()
          .includes(searchTerm.toLowerCase())
      );
    }

    // Sorting logic
    switch (sortCriteria) {
      case "new-buildings":
        filtered = filtered.filter(
          (announcement) => announcement.newBuildings === true
        );
        break;
      case "old-buildings":
        filtered = filtered.filter(
          (announcement) => announcement.oldBuildings === true
        );
        break;
      case "cottages":
        filtered = filtered.filter(
          (announcement) => announcement.cottages === true
        );
        break;
      case "high-to-low":
        filtered = filtered.sort((a, b) => b.price - a.price); // Sort by price descending
        break;
      case "low-to-high":
        filtered = filtered.sort((a, b) => a.price - b.price); // Sort by price ascending
        break;
      default:
      // Do nothing, no sorting applied
    }

    // Update the state with the filtered and sorted announcements
    setSortedAnnouncements(filtered);
  }, [announcements, searchTerm, sortCriteria]); // Add searchTerm, sortCriteria, and announcements as dependencies

  const handleSort = (criteria) => {
    setSortCriteria(criteria);
    setIsOpen(false); // Close the dropdown after sorting
  };

  return (
    <Container>
      <div className="p-6">
        <div className="flex flex-row justify-between">
          <h1 className="text-3xl font-bold mb-6">Announcements</h1>
          <div className="w-[140px] relative">
            <button
              onClick={toggleDown}
              className="border border-[#D0D0D0] rounded-[8px] w-full py-[6px] pl-[19px] pr-[13px] 
            flex justify-between items-center drop-shadow"
            >
              <h2 className="text-[16px] text-[#212121E5]">Sort</h2>
              {isOpen ? <IoChevronDown /> : <IoChevronUp />}
            </button>

            {isOpen && (
              <div className="absolute top-[calc(100%_+_5px)] z-20 drop-shadow overflow-hidden">
                <button
                  onClick={() => handleSort("new-buildings")}
                  className="flex justify-between items-center py-[6px] pl-[19px] 
                pr-[13px] bg-white cursor-pointer w-[140px]"
                >
                  New buildings
                </button>

                <button
                  onClick={() => handleSort("old-buildings")}
                  className="flex justify-between items-center py-[6px] pl-[19px] 
                pr-[13px] bg-white cursor-pointer w-[140px]"
                >
                  Old buildings
                </button>

                <button
                  onClick={() => handleSort("cottages")}
                  className="flex justify-between items-center py-[6px] pl-[19px] 
                pr-[13px] bg-white cursor-pointer w-[140px]"
                >
                  Cottages
                </button>

                <button
                  onClick={() => handleSort("high-to-low")}
                  className="flex justify-between items-center py-[6px] pl-[19px] 
                pr-[13px] bg-white cursor-pointer w-[140px]"
                >
                  High-to-low
                </button>

                <button
                  onClick={() => handleSort("low-to-high")}
                  className="flex justify-between items-center py-[6px] pl-[19px] 
                pr-[13px] bg-white cursor-pointer w-[140px]"
                >
                  Low-to-high
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Rendering all the announcements */}
        <div className="grid grid-cols-3 auto-rows-auto gap-5">
          {sortedAnnouncements &&
            sortedAnnouncements.map((announcement) => (
              <SingleAnnouncement
                key={announcement.id}
                announcement={announcement}
              />
            ))}
        </div>
      </div>
    </Container>
  );
};

export default MainAnnouncements;
