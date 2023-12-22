import { IoMdArrowDropright } from "react-icons/io";

const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-[#003b29] lg:py-20 py-8">
      <div className="h-[50px] bg-[#fff6ed] absolute -bottom-7 -left-[30px] -right-[30px] py-3 px-[30px] rounded-[50%]"></div>
      <div className="container mx-auto px-3 lg:flex items-center justify-between ">
        <div className="text-white lg:w-1/2">
          <h1 className="lg:text-7xl text-2xl pb-8">
            Architects with{" "}
            <span className="underline italic decoration-[#fdca51]">
              different
            </span>{" "}
            approach
          </h1>
          <p className="lg:w-2/3 pb-8">
            Architecture is the art and technique of designing and building, as
            distinguished from the skills
          </p>
          <div className="flex items-center gap-x-2">
            <button className="rounded-full px-3 py-2 flex items-center text-sm bg-[#fd7b47] gap-2 transition ease-out duration-300 transform hover:scale-110">
              <p className="">Our Services</p>
              <IoMdArrowDropright className="text-xl" />
            </button>
            <button className="rounded-full px-3 py-2 flex items-center text-sm gap-2 transition ease-out duration-300 transform hover:scale-110">
              <p className="">View Projects</p>
              <IoMdArrowDropright className="text-xl" />
            </button>
          </div>
        </div>
        <div className="lg:w-[35%] w-80 relative lg:mx-0 mx-auto lg:flex justify-end lg:py-0 py-8">
          <img src="/assets/Main_Image.png" alt="" className="lg:w-full" />
          <img src="/assets/section_two_image.png" alt="" className="lg:w-40 w-1/4 absolute bottom-16 lg:-left-20 -left-10" />
        </div>
      </div>
    </div>
  );
};

export default Hero;