
import { useContext, useState } from "react";
import AuthContext from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const [userName, setUserName] = useState("");
  const { updateUser } = useContext(AuthContext);
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if (!userName || userName.length <= 3 || userName.length >= 15) {
      alert("Enter a valid name");
      return;
    }
    
    // Call updateUser with the current value of userName
    updateUser(userName);

    setUserName("");
    navigate("/");
  }

  return (
    <div className="min-h-screen">
      <form
        onSubmit={handleSubmit}
        className="w-[90%] max-w-md mx-auto mt-52 border border-black p-5 flex flex-col rounded-md"
      >
        <input
          type="text"
          placeholder="Enter your name"
          autoComplete="off"
          autoFocus
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          className="px-2 py-3 border border-gray-900 mb-5 rounded-md"
        />
        <input
          type="password"
          placeholder="password"
          autoComplete="off"
          className="px-2 py-3 border border-gray-900 mb-5 rounded-md"
        />
        <button type="submit" className="bg-blue-500 text-white py-3 rounded-md">
          Submit
        </button>
      </form>
    </div>
  );
};

export default SignIn;