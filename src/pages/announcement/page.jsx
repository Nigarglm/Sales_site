import React, { useEffect, useState } from 'react';
import dateFormat from 'dateformat';
import Container from '../../components/common/containerClass';
import { useParams } from 'react-router-dom';

const DetailsPage = () => {

const formattedDate = dateFormat(2017, 'fullDate');

const handleContactClick = () => {
window.location.href = 'mailto:seller@example.com?subject=Interested%20in%20your%20listing&body=Hello,%20I%20am%20interested%20in%20your%20property...';
};

const { id } = useParams();
const [announcement, setAnnouncement] = useState(null);

useEffect(() => {
  const fetchAnnouncement = async () => {
    try {
      const response = await fetch(`http://localhost:3000/announcements/${id}`);
      const data = await response.json();
      setAnnouncement(data);
    } catch (error) {
      console.error('Error fetching announcement:', error);
    }
  };

  fetchAnnouncement();
}, [id]);

if (!announcement) {
  return <div>Loading...</div>;
}


  return (
    <Container>
      <div className='py-10 my-10 max-w-6xl mx-auto'>
        {/* Announcement Wrapper */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden mb-6">

          {/* Image Section */}
          <div className="relative">
            <img
              src={announcement?.images}
              alt='announcement'
              className="w-full h-[400px] object-cover"
            />
            <div className="absolute top-0 left-0 bg-green-500 text-white px-4 py-2 rounded-br-lg">
              <span>For Sale</span>
            </div>
          </div>

          {/* Announcement Details */}
          <div className="p-8">
            <h2 className="text-3xl font-semibold mb-4 text-gray-800">House for Sale</h2>
            </div>

  {/* Location Info Section */}
<div className="grid grid-cols-2 gap-6 mb-6 mx-7">
  <div className="flex items-center">
    <span className="font-semibold text-gray-700 mr-2">🌆 City:</span>
    <span className="text-lg text-gray-900 font-medium">{announcement?.city}</span>
  </div>
  <div className="flex items-center">
    <span className="font-semibold text-gray-700 mr-2">📏 Area:</span>
    <span className="text-lg text-gray-900 font-medium">{announcement?.area} sqm</span>
  </div>
  <div className="flex items-center">
    <span className="font-semibold text-gray-700 mr-2">🌍 Region:</span>
    <span className="text-lg text-gray-900 font-medium">{announcement?.region}</span>
  </div>
</div>

{/* Additional Info */}
<div className="mb-6 mx-7">
  <h3 className="font-semibold text-gray-700 mb-2">📝 Additional Info:</h3>
  <textarea 
    className="w-full h-28 p-3 text-lg border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none" 
    readOnly
  >
    {announcement?.description}
  </textarea>
</div>

{/* Price Info */}
<div className="mb-6 text-3xl font-bold text-green-600 flex items-center mx-7">
   <span className="ml-2">${announcement?.price}</span>
</div>

{/* Contact Info */}
<div className="mb-6 flex items-center mx-7">
  <span className="font-semibold text-gray-700 mr-2">📞 Contact Number:</span>
  <span className="text-lg text-gray-900 font-medium">+{announcement?.phone}</span>
</div>

{/* Date Info */}
<div className="mb-6 flex items-center mx-7">
  <span className="font-semibold text-gray-700 mr-2">📅 Date:</span>
  <span className="text-lg text-gray-900 font-medium">{formattedDate}</span>
</div>


            {/* Call to Action Button */}
            <div 
            onClick={handleContactClick}
            className="text-center mb-7">
              <button className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-400">
                Contact Seller
              </button>
            </div>
          </div>
        </div>

    </Container>
  );
};

export default DetailsPage;
