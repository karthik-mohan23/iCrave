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
    <div className="w-full h-full overflow-x-scroll overflow-y-hidden  whitespace-nowrap scroll-smooth lg:mx-auto lg:flex lg:justify-between lg:max-w-7xl xl:overflow-x-hidden ">
      {bannerImage.map((item) => (
        <img
          onClick={() => navigate("/offers")}
          key={item}
          className="w-[288px] inline-block p-2 cursor-pointer hover:scale-105 ease-in-out duration-300"
          src={
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_520,h_520/rng/md/carousel/production/" +
            item
          }
          alt="offers"
        />
      ))}
    </div>
  );
};

export default Banner;
