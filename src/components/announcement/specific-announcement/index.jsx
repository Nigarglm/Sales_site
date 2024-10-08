import React from 'react'; 
import dateFormat from "dateformat";

const SpecificAnnouncement = ({ specificAnnouncement, deleteAnnounce, onEdit }) => {
  const formattedDate = dateFormat(specificAnnouncement?.date || new Date(), "fullDate");

  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden mb-6">
      {/* Image */}
      <div className="h-64 bg-gray-200">
        <img
          src={specificAnnouncement?.images} 
          alt='announcement'
          className="w-full h-full object-cover"
        />
      </div>

      {/* Announcement Details */}
      <div className="p-6">
        <h2 className="text-2xl font-semibold mb-4">{specificAnnouncement?.description}</h2>

        {/* Location Info */}
        <div className="mb-2">
          <span className="font-medium">City: </span>
          <span>{specificAnnouncement?.city}</span>
        </div>

        <div className="mb-2">
          <span className="font-medium">Area: </span>
          <span>{specificAnnouncement?.area}</span>
        </div>

        <div className="mb-2">
          <span className="font-medium">Region: </span>
          <span>{specificAnnouncement?.region}</span>
        </div>

        {/* Price */}
        <div className="text-xl font-bold text-green-600 mb-4">
          {specificAnnouncement?.price}
        </div>

        {/* Contact */}
        <div>
          <span className="font-medium">Contact Number: </span>
          <span>{specificAnnouncement?.phone}</span>
        </div>

        {/* Date */}
        <div>
          <span className="font-medium">Date: </span>
          <span>{formattedDate}</span>
        </div>
      </div>
      
      <div>
        {/* Edit Button */}
        <button onClick={() => onEdit(specificAnnouncement)}>Edit</button>
        
        {/* Delete Button */}
        <button onClick={() => deleteAnnounce(specificAnnouncement?.id)}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default SpecificAnnouncement;
