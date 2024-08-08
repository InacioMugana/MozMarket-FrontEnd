import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export const AddLoja = () => {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    ownerId: '',
    address: ''
  });
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);

    try {
      const response = await fetch('http://localhost:3000/api/shops/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          description: formData.description,
          owner: formData.ownerId,
          address: formData.address
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to add store');
      }

      setSuccess('Store added successfully!');
      setTimeout(() => navigate('/admin/dashboard'), 2000);
    } catch (error) {
      setError('Error adding store. Please try again.');
    
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center relative">
      <Link to="/" className="inline-block absolute top-2 left-2">
        <button className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
          Home Page
        </button>
      </Link>
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-3xl">
        <h2 className="text-2xl font-bold mb-6 text-left">Add Store</h2>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label htmlFor="name" className="block text-gray-700 text-left font-medium">Store Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Name of the store"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-3 focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>
            <div>
              <label htmlFor="ownerId" className="block text-gray-700 text-left font-medium">Owner ID</label>
              <input
                type="text"
                id="ownerId"
                name="ownerId"
                value={formData.ownerId}
                onChange={handleChange}
                placeholder="Owner ID"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-3 focus:ring-blue-500 focus:border-blue-500"
                required
              />
              <label htmlFor="address" className="block text-gray-700 text-left font-medium mt-4">Address</label>
              <input
                type="text"
                id="address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                placeholder="Address of the store"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-3 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>
          <div className="mb-6">
            <label htmlFor="description" className="block text-gray-700 text-left font-medium">Store Description</label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Store Description"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-3 focus:ring-blue-500 focus:border-blue-500 h-32 resize-none"
            ></textarea>
          </div>

          {error && <p className="text-red-500 mb-4">{error}</p>}
          {success && <p className="text-green-500 mb-4">{success}</p>}

          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-6 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddLoja;
