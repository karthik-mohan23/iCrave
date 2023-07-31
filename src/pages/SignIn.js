import { useContext, useState, useEffect } from "react";
import AuthContext from "../context/AuthContext";

const SignIn = () => {
  const [userName, setUserName] = useState("");
  const [holdUserName, setHoldUserName] = useState("");

  const { updateUser } = useContext(AuthContext);

  useEffect(() => {
    // state might not have been updated yet because setState is asynchronous
    // To fix this issue, you can use the useEffect hook to handle the update
    // This useEffect will run whenever `holdUserName` changes
    // so we can call `updateUser` with the updated value.
    updateUser(holdUserName);
  }, [holdUserName]);

  function handleSubmit(e) {
    e.preventDefault();
    if (!userName || userName.length <= 3 || userName.length >= 15) {
      alert("Enter a valid name");
    }
    setHoldUserName(userName);
    setUserName("");
  }

  return (
    <div className="min-h-screen">
      <form
        onSubmit={handleSubmit}
        className="w-[90%] max-w-md mx-auto mt-52 border border-black p-5 flex flex-col">
        <input
          type="text"
          placeholder="Enter your name"
          autoComplete="off"
          autoFocus
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          className="px-2 py-3 border border-gray-900 mb-5 rounded-md"
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
