import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillTwitterCircle,
} from "react-icons/ai";
const About = () => {
  return (
    <div className="min-h-screen">
      <div className="w-[90%] max-w-7xl mx-auto">
        <h2 className="text-center text-xl mt-24 mb-8">About </h2>
        <h1 className="text-center text-2xl text-orange-400 mb-6">
          Karthik Mohan
        </h1>
        <div className="w-40 h-40 border mx-auto border-black rounded-full mb-5"></div>
        <h3 className="text-center mb-5">A Passionate Full Stack Developer</h3>
        <div className="flex max-w-[160px] mx-auto justify-evenly items-center">
          <a href="#" className="hover:text-orange-600">
            <AiFillGithub size={25} />
          </a>
          <a href="#" className="hover:text-orange-600">
            <AiFillLinkedin size={25} />
          </a>
          <a href="#" className="hover:text-orange-600">
            <AiFillTwitterCircle size={25} />
          </a>
        </div>
      </div>
    </div>
  );
};
export default About;
