import { useEffect, useState } from "react";
import { BiArea } from "react-icons/bi";

const FormData = ({ isModalOpen, onClose , onSuccess, editData}) => {

    const handleBackgroundClick = (e) => {
        // Close the modal if the user clicks outside the form
        if (e.target === e.currentTarget) {
          onClose();
        }
      };


  // State to handle form data
  const [formData, setFormData] = useState({
    id: String(Math.random()),
    I: '',
    city: '',
    area: '',
    description: '',
    price: '',
    region: '',
    settlement: '',
    images: '',
    name: '',
    email: '',
    phone: '',
    agent: false, // Initially false for agent checkbox
    forSale: false,
    rent: false,
    dailyRent: false,
    newBuildings: false,
    oldBuildings: false,
    cottages: false,
    date: '',
    userId: JSON.parse(localStorage.getItem("userId"))
  });

  // State to track if submission was successful
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (editData) {
      setFormData(editData); // Pre-fill form with the selected announcement's data
    }
  }, [editData]);



  // Handle form inputs
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

 // Handle form submission
 const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const url = editData
      ? `http://localhost:3000/announcements/${formData.id}`
      : 'http://localhost:3000/announcements';

    const method = editData ? 'PUT' : 'POST';

    await fetch(url, {
      method: method,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    onSuccess(); // Refresh the announcements list and close the modal
    onClose()
  } catch (error) {
    console.error('Error submitting form:', error);
  }
}

  return (

  
    <div>

      {/* Render Header */}

      <div className="p-6">
        {isSubmitted && (
          <div className="bg-green-500 text-white p-4 mb-6 rounded-lg">
            You successfully posted your announcement!
          </div>
        )}

        {isModalOpen && (
          <div
          onClick={handleBackgroundClick}
           className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-6 rounded-lg shadow-lg w-3/4 max-w-2xl relative">
            <h2 className="text-2xl font-semibold mb-6">{editData ? 'Edit Announcement' : 'Add New Announcement'}</h2>
              <form onSubmit={handleSubmit} className="space-y-6">

                {/* First Row: Men and City */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block mb-2 font-medium">I*</label>
                    <select
                      name="I"
                      value={formData.I}
                      onChange={handleChange}
                      className="border p-2 w-full rounded-md"
                      required
                    >
                      <option value="">Choose</option>
                      <option value="oz">I am adding my own announcement</option>
                      <option value="agent">I am an agent</option>
                    </select>
                  </div>

                  <div>
                    <label className="block mb-2 font-medium">City*</label>
                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      className="border p-2 w-full rounded-md"
                      required
                    />
                  </div>
                </div>
                   
                  <div className="flex flex-row items-center gap-4">
                  {/* ForSale */}
                  <div className="flex items-center mt-4">
                  <input
                    type="checkbox"
                    name="forSale"
                    checked={formData.forSale}
                    onChange={handleChange}
                    className="mr-2"
                  />
                  <label className="block font-medium">For Sale</label>
                </div>

                  {/* For rent */}
                  <div className="flex items-center mt-4">
                  <input
                    type="checkbox"
                    name="rent"
                    checked={formData.rent}
                    onChange={handleChange}
                    className="mr-2"
                  />
                  <label className="block font-medium">Rent</label>
                </div>

                  {/* For dailyRent */}
                  <div className="flex items-center mt-4">
                  <input
                    type="checkbox"
                    name="dailyRent"
                    checked={formData.dailyRent}
                    onChange={handleChange}
                    className="mr-2"
                  />
                  <label className="block font-medium">Daily Rent</label>
                </div>
                </div>


                {/* Field and Additional Info */}
                <div>
                  <label className="block mb-2 font-medium">Area*</label>
                  <input
                    type="text"
                    name="area"
                    value={formData.area}
                    onChange={handleChange}
                    className="border p-2 w-full rounded-md"
                    required
                  />
                </div>

                <div>
                  <label className="block mb-2 font-medium">Additional Information</label>
                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    className="border p-2 w-full rounded-md text-[16px]"
                    maxLength="3000"
                  />
                </div>

                {/* Price and Rayon */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block mb-2 font-medium">Price*</label>
                    <input
                      type="number"
                      name="price"
                      value={formData.price}
                      onChange={handleChange}
                      className="border p-2 w-full rounded-md"
                      required
                    />
                  </div>

                  <div>
                    <label className="block mb-2 font-medium">Region*</label>
                    <input
                      type="text"
                      name="region"
                      value={formData.region}
                      onChange={handleChange}
                      className="border p-2 w-full rounded-md"
                      required
                    />
                  </div>
                </div>

                {/* Settlement */}
                <div>
                  <label className="block mb-2 font-medium">Settlement*</label>
                  <input
                    type="text"
                    name="settlement"
                    value={formData.settlement}
                    onChange={handleChange}
                    className="border p-2 w-full rounded-md"
                    required
                  />
                </div>
                 

                <div className="flex flex-row items-center gap-4">
                  {/* New buildings */}
                  <div className="flex items-center mt-4">
                  <input
                    type="checkbox"
                    name="newBuildings"
                    checked={formData.newBuildings}
                    onChange={handleChange}
                    className="mr-2"
                  />
                  <label className="block font-medium">New Buildings</label>
                </div>

                  {/* Old buildings */}
                  <div className="flex items-center mt-4">
                  <input
                    type="checkbox"
                    name="oldBuildings"
                    checked={formData.oldBuildings}
                    onChange={handleChange}
                    className="mr-2"
                  />
                  <label className="block font-medium">Old Buildings</label>
                </div>

                  {/* Cottages */}
                  <div className="flex items-center mt-4">
                  <input
                    type="checkbox"
                    name="cottages"
                    checked={formData.cottages}
                    onChange={handleChange}
                    className="mr-2"
                  />
                  <label className="block font-medium">Cottages</label>
                </div>
                </div>

                {/* Images */}
                <div>
                  <label className="block mb-2 font-medium">Images*</label>
                  <input
                    type="text"
                    name="images"
                    onChange={handleChange}
                    className="border p-2 w-full rounded-md"
                    required
                  />
                </div>

                {/* Name, Email, Phone */}
                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <label className="block mb-2 font-medium">Your Name*</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="border p-2 w-full rounded-md"
                      required
                    />
                  </div>

                  <div>
                    <label className="block mb-2 font-medium">E-mail*</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="border p-2 w-full rounded-md"
                      required
                    />
                  </div>

                  <div>
                    <label className="block mb-2 font-medium">Cell-Phone*</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="border p-2 w-full rounded-md"
                      required
                    />
                  </div>
                </div>

                {/* Agent Checkbox */}
                <div className="flex items-center mt-4">
                  <input
                    type="checkbox"
                    name="agent"
                    checked={formData.agent}
                    onChange={handleChange}
                    className="mr-2"
                  />
                  <label className="block font-medium">I am an agent</label>
                </div>

                {/* Submit and Cancel Buttons */}
                <div className="flex justify-end space-x-4">
                  <button
                    type="button"
                    onClick={onClose}
                    className="py-2 px-4 bg-gray-500 text-white rounded-md"
                  >
                    Cancel
                  </button>
                  <button type="submit" className="py-2 px-4 bg-blue-500 text-white rounded-md">
                  {editData ? 'Update' : 'Submit'}
                </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default FormData;   