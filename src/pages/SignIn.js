import { useContext, useState, useEffect } from "react";
import AuthContext from "../context/AuthContext";

const SignIn = () => {
  const [userName, setUserName] = useState("");
  const [holdUserName, setHoldUserName] = useState("");

  const { updateUser } = useContext(AuthContext);

  useEffect(() => {
    // This useEffect will run whenever `holdUserName` changes
    // so we can call `updateUser` with the updated value.
    updateUser(holdUserName);
  }, [holdUserName]);

  function handleSubmit(e) {
    e.preventDefault();
    if (!userName) return;

    setHoldUserName(userName);
    setUserName("");
  }

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="w-[90%] max-w-md mx-auto mt-52 border border-black p-5 flex flex-col">
        <input
          type="text"
          placeholder="Enter your name"
          autoComplete="off"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          className="px-2 py-3 border border-gray-900 mb-5"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white py-3 rounded-md">
          Submit
        </button>
      </form>
    </div>
  );
};
export default SignIn;
