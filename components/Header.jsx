// import { useState } from 'react';

// import { MenuIcon, XIcon } from '@heroicons/react/24/outline';
// let [open, setOpen] = useState(false);
//   const toggleMenu = () => {
//     setOpen(!open);
//   };
// const Header = () => {
//   let Links = [
//     { name: 'Home', link: '/' },
//     { name: 'Service', link: '/' },
//     { name: 'Resource', link: '/' },
//     { name: 'About Us', link: '/' },
//     { name: 'Contact', link: '/' },
//   ];

//   return (
//     <div>
//       <div className="hover:shadow-md shadow-gray-400 text-gray-600 body-font">
//         <div className="md:flex items-center justify-between bg-white py-4 md:px-10 px-7">
//           <div className="font-bold text-2xl cursor-pointer flex items-center gap-1">
//             <span className="text-blue-600">GLOBEIA</span>
//           </div>

//           {/* <div
//             onClick={() => setOpen(!open)}
//             className="absolute right-8 top-6 cursor-pointer md:hidden w-7 h-7"
//           >
//             {open ? <XMarkIcon /> : <Bars3BottomRightIcon />}
//           </div> */}
//           <div className="md:hidden">
//             <button
//               type="button"
//               className="text-white hover:text-gray-400 focus:outline-none"
//               onClick={toggleMenu}
//             >
//               {open ? (
//                 <XIcon className="h-6 w-6" />
//               ) : (
//                 <MenuIcon className="h-6 w-6" />
//               )}
//             </button>
//           </div>

//           <ul
//             className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
//               open ? 'top-12' : 'top-[-490px]'
//             }`}
//           >
//             {Links.map((item) => (
//               <li className="md:ml-8 md:my-0 my-7 font-semibold">
//                 <a
//                   href={item.link}
//                   className="text-gray-800 hover:text-blue-400 duration-500"
//                 >
//                   {item.name}
//                 </a>
//               </li>
//             ))}
//             <button className="btn border-2 rounded-lg border-solid border-blue-600  text-blue-600 md:ml-8 font-semibold px-3 py-1  duration-500 md:static">
//               Book a Free Consultation
//             </button>
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Header;

import Image from 'next/image';
import React, { useState } from 'react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-md ">
      <div className="max-w-9xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="flex items-center justify-between h-16">
          <div className="font-bold text-2xl cursor-pointer flex items-center gap-1 flex-shrink-0">
            <a href="/">
              <Image
                width={48}
                height={48}
                className=" h-8 w-auto"
                src="https://tailwindui.com/img/logos/workflow-mark-blue-600.svg"
                alt="Workflow"
              />
            </a>
            <a href="">
              <span className="text-blue-600">GLOBEIA</span>
            </a>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-10">
              <a
                href="#"
                className="text-gray-700 hover:bg-blue-400 hover:text-white  px-3 py-2 rounded-md text-sm font-medium"
              >
                Home
              </a>
              <a
                href="#"
                className="text-gray-700 hover:bg-blue-400 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Services
              </a>
              <a
                href="#"
                className="text-gray-700 hover:bg-blue-400 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Resource
              </a>
              <a
                href="#"
                className="text-gray-700 hover:bg-blue-400 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                About Us
              </a>

              <a
                href="#"
                className="text-gray-700 hover:bg-blue-400 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Contact
              </a>
              <button className="btn border-2  border-solid hover:bg-blue-400 hover:text-white rounded-md border-blue-600  text-blue-600  font-semibold px-3 py-1   duration-500 ">
                Book a Free Consultation
              </button>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={toggleNavbar}
              className="bg-gray-700 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-blue-800 focus:ring-white"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a
              href="#"
              className="text-gray-700 hover:bg-blue-400 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Home
            </a>
            <a
              href="#"
              className="text-gray-900 hover:bg-blue-400 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Services
            </a>
            <a
              href="#"
              className="text-gray-700 hover:bg-blue-400 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            >
              Resources
            </a>
            <a
              href="#"
              className="text-gray-700 hover:bg-blue-400 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              About Us
            </a>

            <a
              href="#"
              className="text-gray-900 hover:bg-blue-400 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Contact
            </a>
            <button className="btn border-2  border-solid hover:bg-blue-400 hover:text-white rounded-md border-blue-600  text-blue-600  font-semibold px-3 py-1   duration-500 ">
              Book a Free Consultation
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;
