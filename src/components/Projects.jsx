import { MdOfflineBolt } from "react-icons/md";
import { SiHackthebox } from "react-icons/si";
import { IoIosArrowUp, IoMdArrowDropright } from "react-icons/io";
import { FaArrowUp, FaStackOverflow } from "react-icons/fa";
import { TbVectorBezierCircle } from "react-icons/tb";
import { BiLoaderCircle } from "react-icons/bi";



const Projects = () => {
  return (
    <div className="relative overflow-hidden bg-[#fff6ed] lg:py-20 py-8">
      <div className="h-[50px] bg-[#003b29] absolute -bottom-7 -left-[30px] -right-[30px] py-3 px-[30px] rounded-[50%]"></div>
      <div className="container mx-auto px-3 pt-8">
        <section className="relative">
          <p className="text-center text-[#fb7a3f]">Our recent works</p>
          <h1 className="text-center text-[#054130] lg:text-4xl text-xl font-semibold">
            Our completed projects
          </h1>
          <div className="md:flex items-center justify-between pt-20">
            <div className="lg:pb-0 pb-4">
              <img
                src="/assets/grid_image1.png"
                alt=""
                className="lg:w-80 md:w-52 mx-auto"
              />
              <div className="flex items-center justify-between md:w-auto w-60 mx-auto">
                <span className="text-[#003b29] pt-2">
                  <p className="text-xl font-medium">CTF Trade Center</p>
                  <p>Raleigh & Durham, NC</p>
                </span>
                <FaArrowUp className="rotate-45 text-2xl" />
              </div>
            </div>
            <div className="lg:pb-0 pb-4">
              <img
                src="/assets/grid_image2.png"
                alt=""
                className="lg:w-80 md:w-52 mx-auto"
              />
              <div className="flex items-center justify-between md:w-auto w-60 mx-auto">
                <span className="text-[#003b29] pt-2">
                  <p className="text-xl font-medium">Guangzhou Tower</p>
                  <p>Portland, ME</p>
                </span>
                <FaArrowUp className="rotate-45 text-2xl" />
              </div>
            </div>
            <div className="lg:pb-0 pb-4">
              <img
                src="/assets/grid_image3.png"
                alt=""
                className="lg:w-80 md:w-52 mx-auto"
              />
              <div className="flex items-center justify-between md:w-auto w-60 mx-auto">
                <span className="text-[#003b29] pt-2">
                  <p className="text-xl font-medium">MK Finance Center</p>
                  <p>Sarasota, FL</p>
                </span>
                <FaArrowUp className="rotate-45 text-2xl" />
              </div>
            </div>
          </div>
          <button className="rounded-full mx-auto mt-12 px-4 py-2 flex items-center text-sm bg-[#fd7b47] text-white gap-2 transition ease-out duration-300 transform hover:scale-110">
            <p className="">Load more</p>
            <IoMdArrowDropright className="text-xl" />
          </button>
          <IoIosArrowUp className="text-[#fb7a3f] text-4xl absolute top-0 left-0 rotate-[315deg]" />
          <IoIosArrowUp className="text-[#fb7a3f] text-4xl absolute top-0 right-0 rotate-45" />
          <IoIosArrowUp className="text-[#fb7a3f] text-4xl absolute bottom-0 left-0 rotate-[225deg]" />
          <IoIosArrowUp className="text-[#fb7a3f] text-4xl absolute bottom-0 right-0 rotate-[134deg]" />
        </section>

        <section className="flex items-center justify-between mt-24 mb-16 gap-2">
          <span className="flex items-center lg:gap-x-2">
            <MdOfflineBolt className="text-3xl" />
            <p className="font-medium text-xl">Boltshift</p>
          </span>
          <span className="flex items-center lg:gap-x-2">
            <SiHackthebox className="text-3xl" />
            <p className="font-medium text-xl">Lightbox</p>
          </span>
          <span className="flex items-center lg:gap-x-2">
            <FaStackOverflow className="text-3xl" />
            <p className="font-medium text-xl">FeatherDev</p>
          </span>
          <span className="flex items-center lg:gap-x-2">
            <BiLoaderCircle className="text-3xl" />
            <p className="font-medium text-xl">Spherule</p>
          </span>
          <span className="flex items-center lg:gap-x-2">
            <TbVectorBezierCircle className="text-3xl" />
            <p className="font-medium text-xl">Nietzsche</p>
          </span>
        </section>

        <section className="lg:flex justify-between items-center relative mt-12 lg:p-8">
          <div className="lg:w-1/2">
            <p className="text-[#fb7a3f]">Our Newsletter</p>
            <h1 className="text-[#054130] lg:text-4xl text-xl font-semibold pt-4 pb-6">
              Subscribe our daily{" "}
              <span className="underline decoration-[#fdca51]">Newsletter</span>{" "}
              for update
            </h1>
            <p className="text-black leading-8">
              Studying Architecture is demanding and is rated as one of the most
              challenging courses at the university. It requires long hours,
              commitment, and a seven-year study period.
            </p>
            <div className="relative flex items-center pt-8">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-white rounded-full w-full md:px-6 px-2 h-16 outline-none"
              />
              <button className="absolute md:right-4 right-1 rounded-full md:px-8 px-3 flex items-center md:text-sm text-xs bg-[#fd7b47] text-white gap-2 transition ease-out duration-300 transform hover:scale-110">
                <p>Subscribe</p>
                <IoMdArrowDropright className="text-xl h-12" />
              </button>
            </div>
          </div>

          <div className="lg:py-0 py-8 flex justify-center">
            <img
              src="/assets/subscribe_image.png"
              alt=""
              className="lg:w-full w-80"
            />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Projects;
