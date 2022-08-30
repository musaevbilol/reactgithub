import Layout from "../../shared_components/Layout";
import { Link } from "react-router-dom";


function Owners() {
    return (
<Layout>

<div className="">
        <img
          src="./media/new3.webp"
          className=" h-max w-full bg-cover bg-center p-6"
        ></img>
      </div>
  {/* ---------image first-------------- */}

  <div className=" max-h-72 text-center py-4 mt-10">
        <h2 className="text-2xl font-semibold  tracking-widest">
        JAGUAR OWNER SUPPORT
        </h2>
        <h3 className="py-8">
        Personalising your Jaguar with accessories. Knowing you’re covered for an accident or breakdown.<br></br> And keeping your car in showroom condition. It’s all part of our support.
        </h3>

        <button className="relative w-52 h-12 overflow-hidden tracking-widest text-sm font-semibold text-white uppercase bg-red-800 group  hover:bg-white shadow-xl trans0 hover:text-black">
          <div className="absolute bottom-0 left-0 h-0 transition-all duration-300 border-l-2 border-black group-hover:h-full"></div>
          <div className="absolute top-0 left-0 w-0 transition-all duration-300 delay-100 border-t-2 border-black group-hover:w-full"></div>
          <div className="absolute top-0 right-0 h-0 transition-all duration-300 delay-200 border-r-2 border-black group-hover:h-full"></div>
          <div className="absolute bottom-0 right-0 w-0 transition-all duration-300 delay-300 border-b-2 border-black group-hover:w-full"></div>
          <span>EXPLORE</span>
        </button>
        {/*button up ------ */}
      </div>

{/*-----------text with button--------- */}

<section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto max-w-7x1 bg-gray-200">
          <div className="flex flex-wrap w-full mb-4 p-4 ">
            <div className="w-full mb-6 lg:mb-0">
              {/* <div className="h-1 w-100 bg-black rounded"></div> */}
            </div>
          </div>
          <div className="flex flex-wrap -m-4">
            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div className="bg-gray-200 p-4 ">
              <img
                  className="lg:h-60 xl:h-56 md:h-64 sm:h-72 xs:h-72 h-72 rounded w-full object-cover object-center mb-6"
                  src="./media/owner4.jpg"
                  alt="Image Size 720x400"
                ></img>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                JAGUAR OWNERSHIP SUPPORT
                </h2>
                <Link
                  className=" text-xs  font-bold underline decoration-transparent hover:decoration-inherit transition duration-300 ease-in-out  text-black hover:text-red-800"
                  to="/home"
                >
                  FIND OUT MORE
                </Link>
              </div>
            </div>
            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div className="bg-gray-200 p-4">
                <img
                  className="lg:h-60 xl:h-56 md:h-64 sm:h-72 xs:h-72 h-72 rounded w-full object-cover object-center mb-6"
                  src="./media/owner5.jpg"
                  alt="Image Size 720x400"
                ></img>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                JAGUAR WHEELS & TYRES
                </h2>
                <Link
                  className=" text-xs font-bold underline decoration-transparent hover:decoration-inherit transition duration-300 ease-in-out text-black hover:text-red-800"
                  to="/home"
                >
                  FIND OUT MORE
                </Link>
              </div>
            </div>
            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div className="bg-gray-200 p-4">
                <img
                  className="lg:h-60 xl:h-56 md:h-64 sm:h-72 xs:h-72 h-72 rounded w-full object-cover object-center mb-6"
                  src="./media/owner6.jpg"
                  alt="Image Size 720x400"
                ></img>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                  JAGUAR CLASSIC
                </h2>
                <Link
                  className=" text-xs font-bold  underline decoration-transparent hover:decoration-inherit transition duration-300 ease-in-out text-black hover:text-red-800"
                  to="/home"
                >
                  FIND OUT MORE
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>


       {/* text */}
       <div className=" max-h-72 text-center py-2 pt-4">
        <h2 className="text-2xl font-semibold text-gray-900  tracking-widest">
          CHARGING YOUR ELECTRIC CAR
        </h2>
      </div>
      {/*  text*/}

      <section className="text-gray-600 body-font">
        <div className="container px-5 py-12 mx-auto max-w-7x1">
          <div className="flex flex-wrap w-full mb-2 p-4">
            <div className="w-full mb-6 lg:mb-0">
            </div>
          </div>
          <div className="flex flex-wrap -m-4">
            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div className="bg-white p-6 rounded-lg">
                <video
                  controls
                  autoPlay
                  muted
                  src="./media/video.mp4"
                  className="lg:h-60 xl:h-56 md:h-64 sm:h-72 xs:h-72 h-72 rounded w-full object-cover object-center mb-6"
                ></video>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                  JAGUAR VERY COMFORTABLE CAR
                </h2>
                <Link
                  className=" text-xs  font-bold  underline decoration-transparent hover:decoration-inherit transition duration-300 ease-in-out text-black hover:text-red-800"
                  to="/home"
                >
                  EXPLORE JAGUAR E-PACE
                </Link>
              </div>
            </div>
            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div className="bg-white p-6 rounded-lg">
                <img
                  className="lg:h-60 xl:h-56 md:h-64 sm:h-72 xs:h-72 h-72 rounded w-full object-cover object-center mb-6"
                  src="./media/left.jpg"
                  alt="Image Size 720x400"
                ></img>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                  PUBLIC CHARGING
                </h2>
                <Link
                  className=" text-xs font-bold  underline decoration-transparent hover:decoration-inherit transition duration-300 ease-in-out text-black hover:text-red-800"
                  to="/home"
                >
                  EXPLORE JAGUAR E-PACE
                </Link>
              </div>
            </div>
            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div className="bg-white p-6 rounded-lg">
                <img
                  className="lg:h-60 xl:h-56 md:h-64 sm:h-72 xs:h-72 h-72 rounded w-full object-cover object-center mb-6"
                  src="./media/left1.webp"
                  alt="Image Size 720x400"
                ></img>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                  HOW TO CHARGE AN ELECTRIC CAR
                </h2>
                <Link
                  className=" text-xs font-bold  underline decoration-transparent hover:decoration-inherit transition duration-300 ease-in-out text-black hover:text-red-800"
                  to="/home"
                >
                  EXPLORE JAGUAR E-PACE
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
{/* --------------------text------------------------ */}
      <div className=" max-h-96 text-left py-4 mt-2 pl-6">
        <h6 className="text-xl font-semibold  tracking-widest">
        Registered Office: Abbey Road, Whitley, Coventry CV3 4LF
Registered in England No: 1672070
        </h6>
        <h6 className="py-2 text-sm">
The fuel consumption figures provided are as a result of official manufacturer's tests in accordance with EU legislation.
A vehicle's actual fuel consumption may differ from that achieved in such tests and these figures are for comparative purposes only.
        </h6>
        <h6 className="py-2 text-sm">Important note on imagery & specification. We are living through exceptional times. Due to the Covid pandemic we have been prevented or delayed in the creation of new images of current model years. Now the global impact of micro-chip shortages is further affecting build specifications, options and launch timings.
          <br></br>
        Jaguar Land Rover Limited is constantly seeking ways to improve the specification, design and production of its vehicles, parts and accessories and alterations take place continually, and we reserve the right to change without notice. Some features may vary between optional and standard for different model years. The information, specification, engines and colours on this website are based on European specification and may vary from market to market and are subject to change without notice. Some vehicles are shown with optional equipment and retailer-fit accessories that may not be available in all markets. Please contact your local retailer for local availability and prices.
          <br></br> Until this unique event settles, please note that many images cannot be updated to 23 model year specifications. Features, options, trim and colour schemes will differ from many images. Customers are urged to consult your local Retailer for detailed 23 model year specifications and do not base an order on marketing imagery and specification alone.</h6>
          <h6 className=" pb-6 text-sm">The mapping on this website is provided by external mapping providers and is for general information purposes only.</h6>
      </div>

{/* ------image last---- */}

</Layout>
      );
}

export default Owners;