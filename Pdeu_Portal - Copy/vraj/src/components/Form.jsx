import React from "react";

export default function Form() {
    return (
        <div className="form">
                <center><h3>Student Login</h3></center>
                <form className="form__items">
                    Email
                    <input className="form__input" type="email"/>
                    Password
                    <input className="form__input" type="password"/>
                    <div className="form__newdata">
                        <p>
                            <a href="#">Forgot password? </a>
                        </p>
                        
                        <p>
                            <a href="#">Not registered? </a>
                        </p>

                    </div>
                    <button className="form__input submitbtn" type="submit">Submit</button>
                    </form>

            </div>
    )
}