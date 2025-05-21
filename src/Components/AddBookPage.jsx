import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addbook } from "../utils/addBook";

const AddBookPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [description, setDescription] = useState("");
  const [rating, setRating] = useState("");
  const [imgurl, setImgurl] = useState("");
  const [error, setError] = useState(""); // For error messages

  function addBookToList(e) {
    e.preventDefault();

    if (!title || !author || !description || !rating || !imgurl) {
      setError("All fields are required!");
      return;
    }

    setError("");

    dispatch(
      addbook({
        title,
        author,
        description,
        rating,
        img: imgurl,
      })
    );

    navigate("/browsebooks/all");
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-100 to-blue-50 px-6 py-12">
      <form
        onSubmit={addBookToList}
        className="bg-white rounded-xl shadow-xl w-full max-w-3xl p-10 flex flex-col gap-8 font-poppins"
      >
        <h2 className="text-4xl font-bold text-black mb-4 text-center">
          Add a New Book
        </h2>

        {/* Title */}
        <div className="flex flex-col md:flex-row md:items-center gap-3">
          <label
            htmlFor="titleText"
            className="w-full md:w-32 text-lg font-semibold text-sky-600"
          >
            Title:
          </label>
          <input
            id="titleText"
            type="text"
            className="flex-1 px-5 py-3 border-2 border-indigo-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-600"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            placeholder="Enter book title"
          />
        </div>

        {/* Author */}
        <div className="flex flex-col md:flex-row md:items-center gap-3">
          <label
            htmlFor="authorText"
            className="w-full md:w-32 text-lg font-semibold text-sky-600"
          >
            Author:
          </label>
          <input
            id="authorText"
            type="text"
            className="flex-1 px-5 py-3 border-2 border-indigo-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-600"
            onChange={(e) => setAuthor(e.target.value)}
            value={author}
            placeholder="Enter author's name"
          />
        </div>

        {/* Description */}
        <div className="flex flex-col md:flex-row md:items-center gap-3">
          <label
            htmlFor="descriptionText"
            className="w-full md:w-32 text-lg font-semibold text-sky-600"
          >
            Description:
          </label>
          <textarea
            id="descriptionText"
            className="flex-1 px-5 py-3 border-2 border-indigo-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-sky-600"
            onChange={(e) => setDescription(e.target.value)}
            value={description}
            rows={4}
            placeholder="Write a brief description"
          />
        </div>

        {/* Rating */}
        <div className="flex flex-col md:flex-row md:items-center gap-3">
          <label
            htmlFor="ratingText"
            className="w-full md:w-32 text-lg font-semibold text-sky-600"
          >
            Rating:
          </label>
          <input
            id="ratingText"
            type="number"
            min="0"
            max="5"
            step="0.1"
            className="flex-1 px-5 py-3 border-2 border-indigo-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-600"
            onChange={(e) => setRating(e.target.value)}
            value={rating}
            placeholder="Rate 0 to 5"
          />
        </div>

        {/* Image URL */}
        <div className="flex flex-col md:flex-row md:items-center gap-3">
          <label
            htmlFor="imgurlText"
            className="w-full md:w-32 text-lg font-semibold text-sky-600"
          >
            Image URL:
          </label>
          <input
            id="imgurlText"
            type="text"
            className="flex-1 px-5 py-3 border-2 border-indigo-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-600"
            onChange={(e) => setImgurl(e.target.value)}
            value={imgurl}
            placeholder="Enter image URL"
          />
        </div>

        {/* Error message */}
        {error && (
          <p className="text-center text-red-600 font-semibold">{error}</p>
        )}

        <button
          type="submit"
          className="self-center bg-gray-200 hover:bg-sky-600 hover:text-white text-black font-bold px-12 py-3 rounded-lg shadow-md transition"
        >
          Add Book
        </button>
      </form>
    </div>
  );
};

export default AddBookPage;
