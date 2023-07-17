import Banner from "../components/Banner";
import { BsSearch } from "react-icons/bs";
const Home = () => {
  return (
    <div>
      <Banner />
      <section className="w-[90%] max-w-7xl mx-auto py-10">
        <div className="flex items-center justify-between">
          <h4>5 restaurants</h4>
          <div className="flex items-center border border-gray-400 rounded-full ">
            <input
              type="text"
              placeholder="Restaurant name.."
              className=" rounded-full px-3 py-2 outline-none w-96 "
            />
            <button className="px-3 py-2 border-l border-gray-400">
              <BsSearch />
            </button>
          </div>
          <div>
            <button>Relevant</button>
            <button>Rating</button>
            <button>Delivery Time</button>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Home;
