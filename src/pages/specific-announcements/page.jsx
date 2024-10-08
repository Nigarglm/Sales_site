import React, { useEffect, useState } from 'react';
import Container from '../../components/common/containerClass';
import SpecificAnnouncement from '../../components/announcement/specific-announcement';
import { useNavigate } from 'react-router-dom';
import FormData from "../../pages/form-data/page"

const SpecificAnnouncementsPage = () => {
  const navigate = useNavigate();
  const [specificAnnouncements, setSpecificAnnouncements] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editAnnouncement, setEditAnnouncement] = useState(null);

  const userId = JSON.parse(localStorage.getItem("userId"));

  const fetchSpecificAnnouncements = async () => {
    try {
      const response = await fetch(`http://localhost:3000/announcements?userId=${userId}`);
      const data = await response.json();
      setSpecificAnnouncements(data);
    } catch (error) {
      console.error('Error fetching announcements:', error);
    }
  };

  if (!userId) {
    navigate("/sign-in");
  }

  useEffect(() => {
    fetchSpecificAnnouncements();
  }, []);

  // Delete announcement
  const deleteAnnounce = async (id) => {
    await fetch(`http://localhost:3000/announcements/${id}`, {
      method: "DELETE",
    });
    fetchSpecificAnnouncements();
  };

  // Open modal for editing
  const handleEdit = (announcement) => {
    setEditAnnouncement(announcement); // Pass the current announcement to the form
    setIsModalOpen(true); // Open modal
  };

  // Close modal and refresh announcements after edit
  const handleSuccess = () => {
    setIsModalOpen(false);
    setEditAnnouncement(null); // Reset after editing
    fetchSpecificAnnouncements(); // Refresh the list after edit
  };

  return (
    <div>
      <Container>
        <div className="p-6">
          <h1 className="text-3xl font-bold mb-6">Announcements</h1>

          <div className="grid grid-cols-4 grid-rows-2 gap-6 ">
            {specificAnnouncements &&
              specificAnnouncements.map((specificAnnouncement) => (
                <SpecificAnnouncement
                  key={specificAnnouncement.id}
                  specificAnnouncement={specificAnnouncement}
                  deleteAnnounce={deleteAnnounce}
                  onEdit={handleEdit}
                />
              ))}
          </div>
        </div>

        {isModalOpen && (
          <FormData
            isModalOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            onSuccess={handleSuccess}
            editData={editAnnouncement} // Pass the current announcement to the form
          />
        )}
      </Container>
    </div>
  );
};

export default SpecificAnnouncementsPage;
