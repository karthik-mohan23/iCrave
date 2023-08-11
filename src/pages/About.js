import aboutImg from "../assets/about.png";
import { Link } from "react-router-dom";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillTwitterCircle,
} from "react-icons/ai";
const About = () => {
  return (
    <section className="min-h-screen bg-gray-100">
      <div className=" pt-14 max-w-4xl mx-auto ">
        <div className="w-[90%] mb-10 max-w-3xl mx-auto ">
          <img
            src={aboutImg}
            alt=""
            className="block h-full w-full object-cover rounded-md "
          />
        </div>

        <div className="pb-10">
          <h3 className=" text-xl text-center  mb-3 md:text-2xl font-medium">
            Developed by
          </h3>
          <h1 className=" text-2xl text-center text-orange-400 mb-3 md:text-5xl font-medium">
            Karthik Mohan
          </h1>
          <h3 className=" mb-5 text-center">
            A Passionate Full Stack Developer
          </h3>
          <div className="flex max-w-[160px] mx-auto justify-evenly items-center">
            <Link>
              <AiFillGithub size={25} className="hover:text-orange-600" />
            </Link>
            <Link>
              <AiFillLinkedin size={25} className="hover:text-orange-600" />
            </Link>
            <Link>
              <AiFillTwitterCircle
                size={25}
                className="hover:text-orange-600"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
