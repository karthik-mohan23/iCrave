import aboutImg from "../assets/about.png";

const About = () => {
  return (
    <section className=" bg-gray-100 min-h-[80vh] grid place-content-center border border-black">
      <div className="w-[90%] max-w-7xl mx-auto ">
        <img
          src={aboutImg}
          alt=""
          className=" h-full w-full object-cover rounded-md "
        />
      </div>
    </section>
  );
};
export default About;
