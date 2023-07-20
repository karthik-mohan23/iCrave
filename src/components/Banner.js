const bannerImage = [
  "pneknawbadtvceqzwiep",
  "lori508m4xps01tnywxf",
  "zpkkdkmvlj5cuvqbc50t",
  "s5ug2key6e2sptaxku5v",
];

const Banner = () => {
  return (
    <div className="bg-[#171a29]">
      <div className="w-[90%] max-w-7xl mx-auto py-9 flex items-center justify-between gap-16">
        {bannerImage.map((image) => (
          <div className="max-w-[260px] hover:scale-105 duration-700">
            <img
              src={
                "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_520,h_520/rng/md/carousel/production/" +
                image
              }
              alt="offers"
              className="w-full block"
            />
          </div>
        ))}
      </div>
    </div>
  );
};
export default Banner;
