import Image from 'next/image';
import { img1 } from '../assets/Hero';

function Hero() {
  return (
    <div className="flex lg:flex-row lg:items-center flex-col items-start px-4 z-10 relative overflow-hidden md:px-16">
      <div className="flex items-center text-center lg:text-left px-8 md:px-12 lg:w-1/2">
        <div>
          <h2 className=" text-3xl  font-semibold text-gray-800 md:text-7xl">
            <span className="text-blue-600 ">identity</span> Solutions Mode
            Simple
          </h2>
          <p className="mt-2 text-sm font-semibold text-gray-500 md:text-2xl">
            Globeia is your simple and secure background checks and identity
            solution.
          </p>
          <div className="mt-2 text-xl font-bold py-4 px-9 focus:outline-none md:w-2/5 lg:w-1/2 2xl:w-2/5">
            <button className="md:mt-0 mt-2 md:mr-0 mr-2 text-white bg-blue-600 hover:bg-blue-500 hover:text-white  px-5 py-3 rounded-xl text-sm ">
              Get Started
            </button>
          </div>
        </div>
      </div>

      <div className=" lg:-mt-6 relative lg:text-left px-8 md:px-12 pt-20 lg:w-1/2">
        <Image
          src={img1}
          alt="logo"
          style={{ width: '700px', height: '500px' }}
        />
      </div>
    </div>
  );
}

export default Hero;
