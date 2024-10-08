import React from 'react';
import { Link } from 'react-router-dom';
import dateFormat, { masks } from "dateformat";



const SingleAnnouncement = ({ announcement }) => {



const formattedDate = dateFormat(announcement.date, "fullDate");

  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden mb-6 w-[500px] h-[660px] mr-5">
      {/* Image */}
      <Link to={`/announcements/${announcement.id}`}>
        <div className="h-64 bg-gray-200">
          <img
            src={announcement?.images}
            alt={announcement?.description}
            className="w-full h-full object-cover"
          />
        </div>
      </Link>

      {/* Announcement Details */}
      <div className="p-6">
        <div className="w-full h-[150px] overflow-y-scroll">
          <p className="text-xl font-semibold mb-4 ">
            {announcement?.description}
          </p>
        </div>

        {/* Location Info */}
        <div className="mt-2">
          <span className="font-medium">City: </span>
          <span>{announcement?.city}</span>
        </div>

        <div className="mb-2">
          <span className="font-medium">Area: </span>
          <span>{announcement?.area}</span>
        </div>

        <div className="mb-2">
          <span className="font-medium">Region: </span>
          <span>{announcement?.region}</span>
        </div>

        {/* Price */}
        <div className="text-xl font-bold text-green-600 mb-4">
          ${announcement?.price}
        </div>

        {/* Contact */}
        <div>
          <span className="font-medium">Contact Number: </span>
          <span>{announcement?.phone}</span>
        </div>

        {/* Date */}
        <div>
          <span className="font-medium">Date: </span>
          <span>{formattedDate}</span>
        </div>
      </div>
    </div>
  );
};

export default SingleAnnouncement;
