// import { useState } from "react";
import { Link } from "react-router-dom"
import mockData from "../utils/mockData.js"




const HomePage = () => {
  return (
    <div className="w-screen h-screen">
      
      <h1 className="text-6xl font-poppins py-10 mx-10 font-bold">Welcome to BookSpire</h1>
      <Categorybutton/>
      <PopularBooks/>
      
    </div>
  )
}
export default HomePage




export const Categorybutton = () => {
  const categories = ["All", "Fiction", "Non-Fiction", "Science", "History"];

  return (
    <div className="mx-10">
      {categories.map((cat) => (
        <Link
          key={cat}
          to={`/browsebooks/${cat.toLowerCase()}`}
        >
          <button className="px-4 py-2 rounded-lg m-4 bg-gray-200 text-black hover:bg-sky-600 hover:text-white transition">
            {cat}
          </button>
        </Link>
      ))}
    </div>
  );
};

export const PopularBooks=()=>{
  return(
    <div className="flex flex-col items-center">
      <h1 className="text-3xl font-bold text-center font-poppins p-10 mt-10">
        <i className="fa-solid fa-book"></i> Popular Books
      </h1>
      <ul className="space-y-2  flex flex-wrap gap-5 justify-evenly">
        {mockData.filter((item)=>item.rating>=4.5).map((item, index) => (
          <Link  key={item.id} to={`/book/${item.id}`}>
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
  )
}




