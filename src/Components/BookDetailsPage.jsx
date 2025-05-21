import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const BookDetailsPage = () => {
  const { id } = useParams();

  const books = useSelector((state) => state.items);
  const arr = [...books];

  const book = arr.find((item) => item.id === Number(id));

  if (!book) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-red-500 text-2xl font-semibold">Book not found</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center px-8 py-12">
      <div className="max-w-6xl bg-white rounded-xl shadow-lg overflow-hidden flex flex-col md:flex-row">
        <img
          src={book.img}
          alt={book.title}
          className="w-full md:w-1/2 h-[24rem] object-contain bg-gray-100 p-8"
        />
        <div className="p-12 flex flex-col justify-center space-y-6 md:w-1/2">
          <h1 className="text-5xl font-extrabold text-indigo-900">{book.title}</h1>
          <h2 className="text-2xl text-indigo-700 font-semibold">By {book.author}</h2>
          <p className="text-gray-700 text-lg leading-relaxed">{book.description}</p>
          <div className="mt-6 flex items-center space-x-3">
            <span className="inline-block bg-yellow-400 text-yellow-900 font-semibold px-4 py-2 rounded-full shadow-md text-xl">
              Rating: {book.rating} ⭐
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetailsPage;
