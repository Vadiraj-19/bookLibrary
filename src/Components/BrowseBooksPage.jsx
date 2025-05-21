
import { useParams } from "react-router-dom";
// import mockData from "../utils/mockData.js"
import { Categorybutton } from "./HomePage.jsx";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useState } from "react";
const BrowseBooksPage = () => {
  const [inp, setInp] = useState("")
  const books = useSelector((state) => state.items);
  console.log(books) // get array from Redux store
  const [arr, setArr] = useState(books);

  console.log(arr)
  const { category } = useParams();
  function textSetter(e) {
    setInp(e.target.value)

  }
  function filterer() {
    let c = books.filter(
      (item) =>
        item.author.toLowerCase().includes(inp.toLowerCase()) ||
        item.title.toLowerCase().includes(inp.toLowerCase())
    );
    setArr(c);
    // ✅ Use 'c' instead of 'arr' for accurate log
  }

  return (
    <div className="p-10">
      <div className="flex items-center">
        <input
          type="text"
          className="border-2 rounded-full px-4 py-2 border-black text-xl w-96 shadow-sm "
          placeholder="⌕  Search you favourite books" onChange={(e) => textSetter(e)}
          value={inp}
        />
        <button onClick={filterer} className="ml-4 bg-sky-600 text-white p-3 rounded-full flex items-center justify-center  ">
          <i className="fa-solid fa-magnifying-glass" ></i>
        </button>
      </div>
      <h1 className="text-3xl font-bold my-8">Books</h1>
      <Categorybutton />
      <ul className="space-y-2  flex flex-wrap gap-5 justify-evenly">
        {arr
          .filter((item) =>
            category.toLowerCase() === "all"
              ? true
              : item.category.toLowerCase() === category.toLowerCase()
          )
          .map((item, index) => (
            <Link key={item.id} to={`/book/${item.id}`}>
              <li
                key={index}
                className="border   p-4 rounded-lg flex flex-col justify-center items-center shadow-lg w-60 h-96"
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-44 h-60 mb-2 object-contain"
                />
                <h2 className="text-xl font-semibold">{item.title}</h2>
                <p className="text-gray-600">by {item.author}</p>
              </li>
            </Link>

          ))}

      </ul>
    </div>
  );
};

export default BrowseBooksPage;
