import { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface FormData {
  title: string;
  link: string;
  iconUrl: string;
  tagName: string;
  category: string;
  description: string;
}

const AddItemForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    title: "",
    link: "",
    iconUrl: "",
    tagName: "",
    category: "",
    description: "",
  });

  const handleChange = (field: keyof FormData, value: string) => {
    setFormData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const response = await axios.post(
        "https://media-content.ccbp.in/website/react-assignment/add_resource.json",
        formData
      );
      if (response.status === 200) {
        toast.success("Item created successfully!");
      } else {
        toast.error("Failed to create item. Please try again.");
      }
    } catch (error) {
      console.error("Error posting data:", error);
      toast.error("An error occurred while creating the item.");
    }
  };

  return (
    <div className="w-full">
      <ToastContainer position="bottom-right" />
      <form
        className="flex flex-col gap-4 p-4 bg-white rounded-lg w-full"
        onSubmit={handleSubmit}
      >
        <h1 className="text-xl font-semibold text-center text-indigo-950 mb-4">
          Item Details
        </h1>

        {/* Title */}
        <div>
          <label htmlFor="title" className="block text-sm text-gray-600 mb-1">
            Item Title
          </label>
          <input
            id="title"
            type="text"
            value={formData.title}
            onChange={(e) => handleChange("title", e.target.value)}
            className="w-full p-2 text-gray-800 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Link */}
        <div>
          <label htmlFor="link" className="block text-sm text-gray-600 mb-1">
            Link
          </label>
          <input
            id="link"
            type="url"
            value={formData.link}
            onChange={(e) => handleChange("link", e.target.value)}
            className="w-full p-2 text-gray-800 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Icon URL */}
        <div>
          <label htmlFor="iconUrl" className="block text-sm text-gray-600 mb-1">
            Icon URL
          </label>
          <input
            id="iconUrl"
            type="url"
            value={formData.iconUrl}
            onChange={(e) => handleChange("iconUrl", e.target.value)}
            className="w-full p-2 text-gray-800 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Tag Name */}
        <div>
          <label htmlFor="tagName" className="block text-sm text-gray-600 mb-1">
            Tag Name
          </label>
          <input
            id="tagName"
            type="text"
            value={formData.tagName}
            onChange={(e) => handleChange("tagName", e.target.value)}
            className="w-full p-2 text-gray-800 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Category */}
        <div>
          <label
            htmlFor="category"
            className="block text-sm text-gray-600 mb-1"
          >
            Category
          </label>
          <input
            id="category"
            type="text"
            value={formData.category}
            onChange={(e) => handleChange("category", e.target.value)}
            className="w-full p-2 text-gray-800 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Description */}
        <div>
          <label
            htmlFor="description"
            className="block text-sm text-gray-600 mb-1"
          >
            Description
          </label>
          <textarea
            id="description"
            value={formData.description}
            onChange={(e) => handleChange("description", e.target.value)}
            className="w-full p-2 text-gray-800 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows={3}
          ></textarea>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full p-2 text-white bg-blue-600 rounded hover:bg-blue-700"
        >
          CREATE
        </button>
      </form>
    </div>
  );
};

export default AddItemForm;
