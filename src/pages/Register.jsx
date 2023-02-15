import React, {useState, useEffect} from "react"
import img from "./BackImg.png"
import Header from "../components/Header/Header"
import axios from "axios"
import {Link, useNavigate, useLocation} from "react-router-dom"

const Register = () => {
  const navigate = useNavigate()
  useEffect(() => {
    try {
      axios
        .get("http://localhost:5000/api/v1/internal/isLoggedIn")
        .then((res) => {
          if (res.data.isLoggedIn) {
            navigate("/students/profile")
          }
          // console.log(res.data.isLoggedIn)
        })
        .catch((err) => {
          console.log(err)
        })
    } catch (err) {
      console.log(err)
    }
  }, []);
  const [email, setEmail] = React.useState("")
  const [password, setPassword] = React.useState("")
  const [name, setName] = React.useState("")
  // const [form,setForm] = React.useState({
  //     email : "",
  //     password : ""
  // });

  const handleClick = async (event) => {
    // event.preventDefault();
    JSON.stringify(email)
    JSON.stringify(password)
    JSON.stringify(name)
    console.log(email, password, name)
    try {
      // const {data} = await axios.post("http://localhost:5000/api/v1/login", {email,password})
      const data = await axios.post("http://localhost:5000/api/v1/Register", {email, password, name})
      if(data.status === 200)
        alert("Registered Successfully");
      else{
        alert(data.data.message);
      }
      console.log(data)
    } catch (error) {
      console.log(error)
    }
  }

  const handleEmail = (e) => {
    e.preventDefault()
    setEmail(e.target.value)
  }

  const handleName = (e) => {
    e.preventDefault()
    setName(e.target.value)
  }

  const handlePassword = (e) => {
    e.preventDefault()
    setPassword(e.target.value)
  }

  return (
    <>
      <Header />
      <div className="LoginTechnicalquiz">
        <p className="new">Register</p>
        <img src={img} className="ClassroomPicture" />

        <div className="loginbox">
          <label htmlFor="email">Email Address</label>
          <br />
          <input type="text" id="email" onChange={handleEmail} name="email" />
          <div className="topicinput">
            <label htmlFor="password">password</label>
            <br />
            <input
              type="text"
              id="password"
              onChange={handlePassword}
              name="password"
            />
          </div>
          <div className="submitbutton">
            <button type="button">
              <a onClick={(e) => handleClick("", "", e)}>Submit</a>
            </button>
          </div>
        </div>
        <div className="name">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" onChange={handleName} name="name" />
        </div>
      </div>
    </>
  )
}

export default Register
