import { FaPlay } from "react-icons/fa";

const Hero = () => {
  return (
    <div
      className="w-full h-full md:h-[600px] rounded-md bg-cover bg-center flex items-center"
      style={{
        backgroundImage: 'url("https://i.ibb.co/x1rvpZs/0f-Y6ep3cd1c.png")',
      }}
    >
      <div className="w-full px-6 md:px-12 lg:px-24 py-10  backdrop-blur-sm rounded-md">
        <div className="text-center lg:text-left max-w-4xl mx-auto">
          <h1 className="text-[32px] md:text-[42px] lg:text-[60px] font-semibold leading-tight text-[#1f1f1f]">
            Manage Your Books <br className="hidden md:block" /> Effortlessly
          </h1>
          <p className="text-[15px] md:text-[16px] text-[#444] mt-4">
            Track, organize, and borrow books with ease using our smart and
            simple platform built for readers, librarians, and book lovers.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mt-6">
            <button className="py-2 px-6 bg-[#3B9DF8] text-white rounded-full hover:bg-blue-500 transition-all duration-200">
              Explore Library
            </button>

            <button className="bg-gray-200 rounded-full py-2 px-4 flex items-center gap-3">
              <FaPlay className="text-white bg-[#3B9DF8] rounded-full p-2 text-[2rem]" />
              How It Works
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
