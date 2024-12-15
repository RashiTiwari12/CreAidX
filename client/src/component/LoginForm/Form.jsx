import { useState } from "react";
import { useNavigate } from "react-router-dom";

import api from "../../assets/Api";
import {
  ACCESS_TOKEN,
  localStorageData,
  REFRESH_TOKEN,
  ID,
} from "../../assets/Constant";

function Form({ route, method }) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const name = method === "login" ? "Login" : "Register";

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();

    try {
      const res = await api.post(route, { username, password, email });
      if (method === "register") {
        // localStorage.setItem("localStorageData", JSON.stringify(res.data));
        console.log(res);

        navigate("/expertform");
      } else {
        navigate("/expertform");
      }
    } catch (error) {
      if (error.response && error.response.data) {
        // Display error message from backend
        alert(error.response.data.message);
      } else {
        // Display generic error message if backend response is not available
        alert("An error occurred. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-gradient-to-b from-cyan-950 via-black to-cyan-900 min-h-screen flex items-center justify-center p-4 text-white">
      <div className="w-full max-w-md p-8 space-y-6 bg-cyan-900 rounded-lg border border-blue-300 shadow-lg shadow-blue-500">
        <form onSubmit={handleSubmit} className="form-container space-y-4">
          <h1 className="text-3xl font-extrabold text-center text-cyan-100">
            {name}
          </h1>
          {method === "register" && (
            <input
              className="w-full p-2 rounded-lg bg-white text-black placeholder-black border border-cyan-800 focus:outline-none focus:ring-2 focus:ring-blue-600"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Username"
            />
          )}

          <input
            className="w-full p-2 rounded-lg bg-white text-black placeholder-black border border-cyan-800 focus:outline-none focus:ring-2 focus:ring-blue-600"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
          />

          <input
            className="w-full p-2 rounded-lg bg-white text-black placeholder-black border border-cyan-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
          <button
            className="w-full p-3 bg-cyan-700 rounded-lg text-white font-semibold hover:bg-cyan-600 hover:ring-2 hover:ring-cyan-400 transition-all duration-300"
            type="submit"
          >
            {name}
          </button>
        </form>
        <p className="text-center text-cyan-400">
          {method === "login" ? (
            <button
              onClick={(e) => {
                navigate("/register");
              }}
              className="hover:text-cyan-300 underline transition duration-200"
            >
              New to Creatify? Signup here
            </button>
          ) : (
            <button
              onClick={(e) => {
                navigate("/login");
              }}
              className="hover:text-blue-300 underline transition duration-200"
            >
              Already registered? Login now
            </button>
          )}
        </p>
      </div>
    </div>
  );
}

export default Form;
