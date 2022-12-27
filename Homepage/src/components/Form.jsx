import React from "react";

export default function Form() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    const verification = { email, password };
    console.log(verification);
  };
  return (
    <div className="form bg-blue h-[360px]  rounded-2xl ml-20 pl-4 opacity-[0.85] text-lg font-normal">
      <center>
        <h3 className="text-white m-0 pt-4 pb-[10px] pr-5 text-[2rem] ">
          Student Login
        </h3>
      </center>
      <form
        className="form__items ml-[0.3rem] flex flex-col text-orange"
        onSubmit={handleSubmit}
      >
        Email
        <input
          className="form__input w-[380px] h-[50px] rounded-xl mb-2 bg-white focus:outline-none text-xl text-black pl-1"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        Password
        <input
          className="form__input w-[380px] h-[50px] rounded-xl mb-2 bg-white focus:outline-none text-xl  text-black pl-1"
          type="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className="form__newdata flex justify-between mr-4 w-[380px] text-lg">
          <p>
            <a
              className="no-underline text-orange text-lg hover:text-white"
              href="#"
            >
              Forgot password?{" "}
            </a>
          </p>

          <p>
            <a
              className="no-underline text-orange text-lg hover:text-white"
              href="#"
            >
              Not registered?{" "}
            </a>
          </p>
        </div>
        <button
          className="form__input submitbtn w-[380px] h-[50px] rounded-xl mb-2 focus:outline-none m-0 p-0 bg-orange text-white text-2xl border-none mt-3 hover:text-orange hover:bg-white"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
}