import React, { useState} from "react";
import logo from "../../images/navLogo.png";
import styles from "./Header.module.css";
import './Header.css';
import { Link,useNavigate } from "react-router-dom";
import axios from "axios";

function  Header() {

  const navigate = useNavigate()

  const handleClick = async() => {
    const response = await axios.get(`http://localhost:5000/api/v1/logout`)
    if(response.status == 200){
      localStorage.removeItem('studentId')
      localStorage.removeItem('studentToken')
      navigate("/")
    }
  }

  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
    <div className={styles.container} id = "normal-nav" >
      <div className={styles.left}>
      </div>
      <div className={styles.right}>
        <Link to="/">
          <img src={logo} alt="Resume" />
        </Link>
      </div>
      <div className="nav-links">
        <ul className="nav-links-list">
          <li>
            <Link to="/students/homepage">Home</Link>
          </li>
          <li>
            <Link to="/students/dashboard">Dashboard</Link>
          </li>
          <li>
            <Link to={`/students/profile/${localStorage.getItem('studentId')}`}>Profile</Link>
          </li>
          <li>
            <Link to="/students/resource/process">Resources</Link>
          </li>
          <li>
            <Link to="/students/jobboarding">Apply Now!</Link>
          </li>
          <li>
            <Link to="/students/myapplications">My Applications</Link>
          </li>
          <li>
            <p onClick={handleClick}>Logout</p>
          </li>
        </ul>
      </div>
    </div>
    <nav className="bg-gray-900 text-white py-4 px-6" id="hamburger-nav">
            <div className="container mx-auto flex items-center justify-between">
                <div className="flex items-center">
                    <a href="#" className="font-medium text-xl">Your Brand</a>
                </div>
                <button
                    className={`${isOpen ? "bg-white" : "bg-gray-800"} rounded-full focus:outline-none focus:shadow-outline-indigo p-2`}
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <svg className={`${isOpen ? "hidden" : "block"} w-6 h-6 fill-current text-gray-500`} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                    </svg>
                    <svg className={`${isOpen ? "block" : "hidden"} w-6 h-6 fill-current text-gray-500`} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
                    </svg>
                </button>
            </div>
            <div className={`${isOpen ? "block" : "hidden"} bg-gray-900 text-white py-4 px-6`}>
                <a href="#" className="block px-2 py-1 text-white font-medium rounded-md hover:bg-gray-800">Link 1</a>
                <a href="#" className="block px-2 py-1 text-white font-medium rounded-md hover:bg-gray-800">Link 2</a>
                <a href="#" className="block px-2 py-1 text-white font-medium rounded-md hover:bg-gray-800">Link 3</a>
            </div>
        </nav>
    </>
  );
}

export default Header;