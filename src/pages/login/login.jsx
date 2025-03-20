import "./login.css";
import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleOnSubmit = (e) => {
    e.preventDefault();
    
    axios.post("http://localhost:3004/users/login", {
      email: email,
      password: password,
    })
    .then((res) => {
      localStorage.setItem("authToken", res.data.token); // Store the token
      console.log("Login successful");
      toast.success("Login error")
    })
    .catch((err) => {
      console.log(err.response.data); // Display the error message from the server
      toast.error(err.response.data.error)
    });
  };
  

  return (
    <div className="bg-picture w-full h-screen bg-green-800 flex justify-center items-center">
      <form onSubmit={handleOnSubmit}>
        <div className="w-[400px] h-[400px] backdrop-blur-xl rounded-2xl flex justify-center items-center flex-col">
          <img src="/logo.png" alt="logo" className="w-[100px] h-[100px] object-cover" />
          <input
            type="email"
            placeholder="Email"
            className="mt-6 w-[300px] h-[50px] bg-transparent border-b-2 border-white text-white text-xl outline-none"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <input
            type="password"
            placeholder="Password"
            className="mt-6 w-[300px] h-[50px] bg-transparent border-b-2 border-white text-white text-xl outline-none"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <button className="my-8 mt-6 w-[300px] h-[50px] bg-green-800 text-2xl text-white rounded-lg">
            Login
          </button>
        </div>
      </form>
    </div>
  );
}
