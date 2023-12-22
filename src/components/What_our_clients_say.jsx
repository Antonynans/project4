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

  const Card = ({ img, name, title, desc }) => {
    return (
      <div className="bg-[#06412f] w-80 relative flex justify-center z-20 p-8 mt-40">
        <button className="rounded-full bg-[#06412f] absolute -top-20 h-32 w-64 rounded-b-none"></button>
        <div className="relative z-20 text-center">
          <img
            src={img}
            alt=""
            className="w-20 h-20 rounded-full -mt-8 mx-auto"
          />
          <p className="text-xl primary-font font-semibold pt-4 pb-2">{name}</p>
          <p className="font-light pb-4">{title}</p>
          <hr />
          <p className="pt-4">{desc}</p>
        </div>
      </div>
    );
  };

  return (
    <div className="relative overflow-hidden bg-[#003b29] lg:py-24 py-8">
      <div className="h-[50px] bg-[#fff6ed] absolute -bottom-7 -left-[30px] -right-[30px] py-3 px-[30px] rounded-[50%]"></div>
      <div className="xl:w-[1200px] text-white mx-auto px-3 ">
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
            <Card
              img={"/assets/Main_Image.png"}
              name={"Wade Warren"}
              title={"Co-founder At Attalo"}
              desc={
                '"We would like to take the opportunity to express our delights with the ways things are progressing"'
              }
            />
            <Card
              img={"/assets/Main_Image.png"}
              name={"Jenny Wilson"}
              title={"Project Manager At Nokaso"}
              desc={
                ' "When I saw the design had strong capabilities for both in-person and virtual audiences, it was a major factor in our decision"'
              }
            />
            <Card
              img={"/assets/Main_Image.png"}
              name={"Floyd Miles"}
              title={"Co-founder At Rajuna"}
              desc={`"Connection was the major theme at INBOUND. That's why we were super excited to hear about Arco.io wearable tech"`}
            />
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default What_our_clients_say;
