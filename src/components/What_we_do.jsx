import { IoMdArrowDropright, IoIosArrowUp } from "react-icons/io";
import { PiDiamondsFourFill, PiLadderSimpleThin } from "react-icons/pi";
import { BiSolidTreeAlt } from "react-icons/bi";
import { SiLinktree, SiIcomoon } from "react-icons/si";
import { TbStackBackward } from "react-icons/tb";

const What_we_do = () => {
  return (
    <div className="relative overflow-hidden bg-[#fff6ed] lg:py-20 py-8">
      <div className="h-[50px] bg-[#003b29] absolute -bottom-7 -left-[30px] -right-[30px] py-3 px-[30px] rounded-[50%]"></div>
      <div className="container mx-auto px-3 pt-8">
        <section className="relative">
          <p className="text-center text-[#fb7a3f]">What we do</p>
          <h1 className="text-center text-[#054130] lg:text-5xl text-xl primary-font">
            Bringing new life to <br /> old{" "}
            <span className="underline decoration-[#fdca51]">processes</span>
          </h1>

          <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-8 pt-8">
            <span className="bg-[#fffaf4] py-8 px-6 hover:bg-white hover:text-[#fb7a3f]">
              <PiDiamondsFourFill className="text-5xl" />
              <p className="text-xl text-[#054130] primary-font font-semibold py-8 pb-4">
                Interior design
              </p>
              <p className="text-black">
                Interior design is the art and science of enhancing
              </p>
            </span>
            <span className="bg-[#fffaf4] py-8 px-6 hover:bg-white hover:text-[#fb7a3f]">
              <TbStackBackward className="text-5xl" />
              <p className="text-xl text-[#054130] primary-font font-semibold py-8 pb-4">
                Construction
              </p>
              <p className="text-black">
                The techniques, procedures, and materials used during.
              </p>
            </span>
            <span className="bg-[#fffaf4] py-8 px-6 hover:bg-white hover:text-[#fb7a3f]">
              <BiSolidTreeAlt className="text-5xl" />
              <p className="text-xl text-[#054130] primary-font font-semibold py-8 pb-4">
                Architectural
              </p>
              <p className="text-black">
                The process of planning, designing and constructing buildings
              </p>
            </span>
            <span className="bg-[#fffaf4] py-8 px-6 hover:bg-white hover:text-[#fb7a3f]">
              <SiLinktree className="text-5xl" />
              <p className="text-xl text-[#054130] primary-font font-semibold py-8 pb-4">
                Decoration
              </p>
              <p className="text-black">
                The gymnasium was adorned with posters and crepe-paper.
              </p>
            </span>
          </div>
          <PiLadderSimpleThin className="text-[#fb7a3f] text-6xl absolute top-0 left-0 opacity-20" />
          <SiIcomoon className="text-[#fb7a3f] text-6xl absolute top-0 right-0 rotate-90 opacity-20" />
        </section>

        <section className="lg:flex justify-between items-center relative mt-12 lg:p-8">
          <div className="flex justify-center">
            <img
              src="/assets/section_two_image.png"
              alt=""
              className="lg:w-full w-80"
            />
          </div>

          <div className="lg:w-1/2 lg:py-0 py-20">
            <p className="text-[#fb7a3f]">Our architects journey</p>
            <h1 className="text-[#054130] lg:text-5xl text-xl primary-font font-semibold pt-4 pb-6">
              Beautiful acoustics &{" "}
              <span className="underline decoration-[#fdca51]">
                Achievements
              </span>
            </h1>
            <p className="text-black leading-8">
              Studying Architecture is demanding and is rated as one of the most
              challenging courses at the university. It requires long hours,
              commitment, and a seven-year study period.
            </p>
            <div className="flex items-center lg:gap-x-8 py-8">
              <button className="rounded-full px-4 py-2 flex items-center text-sm bg-[#fd7b47] text-white gap-2 transition ease-out duration-300 transform hover:scale-110">
                <p className="">Read more</p>
                <IoMdArrowDropright className="text-xl" />
              </button>
              <button className="rounded-full px-4 py-2 flex items-center text-sm gap-2 transition ease-out duration-300 transform hover:scale-110">
                <p className="">View Projects</p>
                <IoMdArrowDropright className="text-xl" />
              </button>
            </div>
            <div className="flex justify-between pt-4 lg:gap-0 gap-2">
              <span>
                <h1 className="text-[#054130] primary-font text-4xl font-semibold">
                  12
                </h1>
                <p className="w-1/2 lg:text-base text-sm">
                  Years of experience
                </p>
              </span>
              <span>
                <h1 className="text-[#054130] primary-font text-4xl font-semibold">
                  246
                </h1>
                <p className="w-1/2 lg:text-base text-sm">Projects completed</p>
              </span>
              <span>
                <h1 className="text-[#054130] primary-font text-4xl font-semibold">
                  42
                </h1>
                <p className="w-1/2 lg:text-base text-sm">Awards gained</p>
              </span>
            </div>
          </div>
          <IoIosArrowUp className="text-[#fb7a3f] text-4xl absolute top-0 left-0 rotate-[315deg]" />
          <IoIosArrowUp className="text-[#fb7a3f] text-4xl absolute top-0 right-0 rotate-45" />
          <IoIosArrowUp className="text-[#fb7a3f] text-4xl absolute bottom-0 left-0 rotate-[225deg]" />
          <IoIosArrowUp className="text-[#fb7a3f] text-4xl absolute bottom-0 right-0 rotate-[134deg]" />
        </section>
      </div>
    </div>
  );
};

export default What_we_do;
