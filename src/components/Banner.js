import { useNavigate } from "react-router-dom";

const bannerImage = [
  "pneknawbadtvceqzwiep",
  "lori508m4xps01tnywxf",
  "zpkkdkmvlj5cuvqbc50t",
  "s5ug2key6e2sptaxku5v",
];

const Banner = () => {
  // navigate
  const navigate = useNavigate();
  return (
    <div className="bg-[#171a29] ">
      <div className=" flex  py-9 w-[90%] max-w-7xl mx-auto  justify-between items-center gap-4">
        {bannerImage.map((image, index) => (
          <div
            onClick={() => navigate("/offers")}
            key={index}
            className="w-72 hover:scale-105 duration-700 cursor-pointer">
            <img
              src={
                "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_520,h_520/rng/md/carousel/production/" +
                image
              }
              alt="offers"
              className="w-full h-full"
            />
          </div>
        ))}
      </div>
    </div>
  );
};
export default Banner;
