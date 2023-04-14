import React, { useEffect } from "react";
import axios from "axios";
import { Link, useNavigate, useLocation } from "react-router-dom";
import Header from "../components/Header/Header";
// axios.defaults.withCredentials = true
export default function Recruiter_Login() {
  const navigate = useNavigate();

  useEffect(() => {
    try {
      axios
        .get("http://localhost:5000/api/v1/internal/isLoggedIn")
        .then((res) => {
          if (res.data.isLoggedIn) {
            navigate("/students/profile");
          }
          // console.log(res.data.isLoggedIn)
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (err) {
      console.log(err);
    }
  }, []);

  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  // const handleSubmit = async(e) => {
  //   e.preventDefault();
  //   const data = await axios.post("http://localhost:5000/api/v1/login", {email,password})
  //   console.log(data)
  // };

  const handleEmail = (e) => {
    e.preventDefault();
    setEmail(e.target.value);
  };
  const handlePass = (e) => {
    e.preventDefault();
    setPassword(e.target.value);
  };

  const handleLogin = async (email, password, e) => {

    console.log('Submit Button Clicked');
    e.preventDefault();
    JSON.stringify(email);
    JSON.stringify(password);

    if (email === "" || password === "") {
      alert("Please fill the required Field");
    } else if (
      (email.split("@").length != 2 ||
        email.split(".").length != 5 ||
        email.split(" ").length != 1 ||
        email.split("+").length != 1 ||
        email.split("-").length != 1 ||
        email.split("_").length != 1) &&
      email.split("@")[1] !== "sot.pdpu.ac.in"
    ) {
      alert("Please enter a valid PDEU email");
    } else {
      try {
        const data = await axios.post(
          "http://localhost:5000/api/v1/login",
          {
            email,
            password,
          }
          // {
          //   withCredentials: true,
          // }
        );
        console.log(data);
        if (data.status === 200) {
          localStorage.setItem('studentId', data.data.user._id)
          localStorage.setItem('studentToken',data.data.token)
          navigate(`/students/profile/${localStorage.getItem('studentId')}`);
        }
      } catch (error) {
        if (error.response) {
          if (error.response.status === 401) {
            // Handle 401 status code
            console.log("Unauthorized");
            console.log(error.response.data.message);
          } else if (error.response.status === 404) {
            alert(error.response.data.message);
          } else {
            // Handle other status codes
            console.log("Error:", error.response.status);
            alert('Something Went Wrong! Try again later')
          }
        } else {
          // Handle network errors
          console.log("Error: Network Error");
          alert('Something Went Wrong! Try again later');
        }
      }
    }
  };

  const handleLoginClick = () => {
    console.log("Login clicked!");
  };
  return (
    <>
    <Header />
    <div className="login-img">
      <img className="absolute h-[85.5%] opacity-[0.8]" src="https://pdpu.ac.in/infra/3.jpg" alt="" />
      <div className="form float-right bg-[#1F3368] w-[28%] h-[100%]  rounded-2xl  m-20 mr-44 pl-4 opacity-[0.9] text-lg font-normal relative">
        <center>
          <h3 className="text-white m-0 pt-4 pb-[10px] pr-5 text-[2rem] mt-4 ">
            Student Login
          </h3>
        </center>
        <form className="ml-[0.3rem] flex flex-col text-orange-500">
          Email
          <input
            className="form__input w-[95%] h-auto rounded-xl mb-2 bg-white focus:outline-none text-xl text-black pl-1"
            type="email"
            required
            value={email}
            onChange={handleEmail}
          />
          Password
          <input
            className="form__input w-[95%] h-auto rounded-xl mb-2 bg-white focus:outline-none text-xl  text-black pl-1"
            type="password"
            required
            value={password}
            onChange={handlePass}
          />
          <div className="form__newdata flex justify-between mr-4 w-[95%] text-lg">
            <p>
              <a
                className="no-underline text-orange text-lg hover:text-white"
                href="#"
              >
                Forgot password?{" "}
              </a>
            </p>

            <Link to="/students/register">
              <p className="no-underline text-orange text-lg hover:text-white">
                Not registered?
              </p>
            </Link>
          </div>

          
          <button
            className="form__input submitbtn w-[95%] h-[50px] rounded-xl mb-2 focus:outline-none m-0 p-0 bg-orange-500 text-white text-2xl border-none mt-3 hover:text-orange hover:bg-white hover:text-orange-500"
            type="submit"
            onClick={(e) => handleLogin(email, password, e)}
          >
             Submit
          </button>
          <Link to="/students/homepage" className="pb-8 hover:text-white"> Visit Student portal
          </Link>
        </form>
      </div>
      </div>
    </>
  );
}