/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 3,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 2,
  },
  module: {
    breakpoint: { max: 768, min: 0 },
    items: 1,
  },
};

const What_our_clients_say = () => {
  const ButtonGroup = ({ next, previous }) => {
    return (
      <div className="carousel-bottom-group mb-4 gap-4 flex justify-end items-center w-full absolute lg:top-0 top-8">
        <button
          className="block p-3 bg-slate-300 rounded-full focus:bg-[#fd7b47] hover:bg-[#fd7b47] border border-white"
          onClick={() => previous()}
        >
          <FaArrowLeft />
        </button>
        <button
          className="block p-3 bg-slate-300 rounded-full focus:bg-[#fd7b47] hover:bg-[#fd7b47] border border-white"
          onClick={() => next()}
        >
          <FaArrowRight />
        </button>
      </div>
    );
  };
  return (
    <div className="relative overflow-hidden bg-[#003b29] lg:py-24 py-8">
      <div className="h-[50px] bg-[#fff6ed] absolute -bottom-7 -left-[30px] -right-[30px] py-3 px-[30px] rounded-[50%]"></div>
      <div className="container text-white mx-auto px-3 ">
        <p>Testimonial</p>

        <div className="relative lg:pb-0 pb-8">
          <h1 className="lg:text-4xl primary-font text-xl">
            What our{" "}
            <span className="underline decoration-[#fdca51]">client</span> say's
          </h1>
          <Carousel
            swipeable={true}
            draggable={false}
            responsive={responsive}
            arrows={false}
            renderButtonGroupOutside={true}
            customButtonGroup={<ButtonGroup />}
            ssr={true}
            infinite
            autoPlay={true}
          >
            <div className="bg-[#06412f] w-80 relative flex justify-center z-20 p-8 mt-40">
              <button className="rounded-full bg-[#06412f] absolute -top-20 h-32 w-64 rounded-b-none"></button>
              <div className="relative z-20 text-center">
                <img
                  src="/assets/Main_Image.png"
                  alt=""
                  className="w-20 h-20 rounded-full -mt-8 mx-auto"
                />
                <p className="text-xl primary-font font-semibold pt-4 pb-2">Wade Warren</p>
                <p className="font-light pb-4">Co-founder At Attalo</p>
                <hr />
                <p className="pt-4">
                  "We would like to take the opportunity to express our delights
                  with the ways things are progressing"
                </p>
              </div>
            </div>
            <div className="bg-[#06412f] w-80 relative flex justify-center z-20 p-8 mt-40">
              <button className="rounded-full bg-[#06412f] absolute -top-20 h-32 w-64 rounded-b-none"></button>
              <div className="relative z-20 text-center">
                <img
                  src="/assets/Main_Image.png"
                  alt=""
                  className="w-20 h-20 rounded-full -mt-8 mx-auto"
                />
                <p className="text-xl primary-font font-semibold pt-4 pb-2">Jenny Wilson</p>
                <p className="font-light pb-4">Project Manager At Nokaso</p>
                <hr />
                <p className="pt-4">
                  "When I saw the design had strong capabilities for both
                  in-person and virtual audiences, it was a major factor in our
                  decision"
                </p>
              </div>
            </div>
            <div className="bg-[#06412f] w-80 relative flex justify-center z-20 p-8 mt-40">
              <button className="rounded-full bg-[#06412f] absolute -top-20 h-32 w-64 rounded-b-none"></button>
              <div className="relative z-20 text-center">
                <img
                  src="/assets/Main_Image.png"
                  alt=""
                  className="w-20 h-20 rounded-full -mt-8 mx-auto"
                />
                <p className="text-xl primary-font font-semibold pt-4 pb-2">Floyd Miles</p>
                <p className="font-light pb-4">Co-founder At Rajuna</p>
                <hr />
                <p className="pt-4">
                  "Connection was the major theme at INBOUND. That's why we were
                  super excited to hear about Arco.io wearable tech"
                </p>
              </div>
            </div>
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default What_our_clients_say;
