import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import img1 from '../assets/images/img1.png';
import img2 from '../assets/images/img2.png';
import img3 from '../assets/images/img3.png';

import Image from 'next/image';

const locations = [
  {
    name: 'Industry Leader',
    desc: 'Globeia is a leader in document and identity screening, offering fbi & rcmp fingerpirnting for police clearance, employee screening, notarization, translation, and apostilization services.',
    image: img1,
  },
  {
    name: 'Reliable Yet Affordable',
    desc: 'We believe that everyone deserves a screening service they can trust. this is exactly why we aim to equip you with the most powerful and relibale identity solutions. reliability and affordability go hand in hand at Globeia.',
    image: img2,
  },
  {
    name: 'Fast & Accurate',
    desc: 'Screening and document verification don`t have to be complex. we take the uncertainty out of these procedures and offer one of the fastest turnaround timesin the industry, with the highest accuracy all of Globeia`s staff. ',
    image: img3,
  },
];

const FeaturedLocations = ({ setSectionInView }) => {
  return (
    <section className="bg-base-200 -10" id="feature">
      <h6 className="text-center text-blue-900  text-2xl mt-10 ">
        <span className="bg-gray-200 rounded-xl ">
          Fast, Accurate & Affordable
        </span>
      </h6>
      <h4 className=" text-center text-blue-900  font-semibold  text-2xl mt-10 pb-10">
        <span className="font-bold  "> Simplify Your Background Checks </span>&
        Document Verification
      </h4>
      <div className="grid grid-cols-1 md:grid-col-2 lg:grid-cols-3 gap-10 bg-gray-100 justify-center  mx-auto  shadow-xl rounded-xl p-5">
        {locations.map((loc, index) => (
          <div key={index} className="card bg-white  rounded-xl shadow-xl">
            <figure>
              <Image
                className="w-auto h-10 mx-auto"
                src={loc.image}
                alt={loc.name}
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title text-accent lg:text-2xl font-bold text-blue-900 ">
                {loc.name}
              </h2>
              <p className="text-xs sm:text-base text-blue-800 pt-2 pb-4 px-5 w-auto inline-block border-b-2 ">
                {loc.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedLocations;
