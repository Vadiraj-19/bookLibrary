import Gitlogo from '../assets/git.png'
import logo from '../assets/logo.png';
import { Link } from "react-router-dom";
 const Nav = () => {
  return (
    <div className="flex justify-between items-center font-poppins py-2 mx-10">
      <div className="flex items-center gap-4">
        <div className="flex items-center">

          
          <img src={logo} className="w-16 h-16 object-contain" />
          <h1 className="text-2xl font-bold">BookSpire</h1>
        </div>

      </div>

      <div className="flex gap-8 m-4 text-xl font-normal">
        <a className="flex items-start" href="https://github.com/Vadiraj-19/Amazon-clone"><img src={Gitlogo} className='w-14 h-7 object-contain ' alt="git"/></a>
        <Link to="/" ><button className="flex justify-center items-center"><i className="fa-solid fa-house text-sm px-2"></i>Home</button></Link>
        <Link to="/browsebooks/all"><button className="flex justify-center items-center"><i className="fa-solid fa-address-card text-sm px-2 "></i> Browse Books</button></Link>
        <Link to="/addbook"><button className="flex justify-center items-center"><i className="fa-solid fa-plus text-sm px-2"></i> Add book</button></Link>
      </div>

    </div>

  );

}

export default Nav;