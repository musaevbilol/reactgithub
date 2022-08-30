import { Link } from "react-router-dom";
import Layout from "../shared_components/Layout";

function Home() {
  return (
    <>
      <Layout>
        <div className="">
          <img
            src="./media/new2.jpg"
            className=" h-max w-full bg-cover bg-center p-6"
          ></img>
        </div>
        {/* text */}
        <div className=" max-h-72 text-center py-2 pt-4">
          <h2 className="text-2xl font-semibold text-gray-900  tracking-widest">
            CHARGING YOUR ELECTRIC CAR
          </h2>
        </div>
        {/*  text*/}

        <section className="text-gray-600 body-font">
          <div className="container px-5 py-24 mx-auto max-w-7x1">
            <div className="flex flex-wrap w-full mb-4 p-4">
              <div className="w-full mb-6 lg:mb-0">
                <div className="h-1 w-100 bg-black rounded"></div>
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
                    className="lg:h-60 xl:h-56 md:h-64 sm:h-72 xs:h-72 h-72 rounded w-full object-cover object-center mb-6 "
                  ></video>
                  <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                    JAGUAR VERY COMFORTABLE CAR
                  </h2>
                  <Link
                    className=" text-xs  font-bold text-black underline decoration-transparent 0 transition duration-300 ease-in-out"
                    to="/home"
                  >
                    EXPLORE JAGUAR E-PACE
                  </Link>
                </div>
              </div>
              <div className="xl:w-1/3 md:w-1/2 p-4 ">
                <div className="bg-white p-6 rounded-lg">
                  <img
                    className="lg:h-60 xl:h-56 md:h-64 sm:h-72 xs:h-72 h-72 rounded w-full object-cover object-center mb-6 hover:bg-black"
                    src="./media/left.jpg"
                    alt="Image Size 720x400"
                  ></img>
                  <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                    PUBLIC CHARGING
                  </h2>
                  <Link
                    className=" text-xs font-bold text-black underline decoration-transparent 0 transition duration-300 ease-in-out"
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
                    className=" text-xs font-bold text-black underline decoration-transparent 0 transition duration-300 ease-in-out"
                    to="/home"
                  >
                    EXPLORE JAGUAR E-PACE
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* text  */}
        <div className=" max-h-72 text-center py-4">
          <h2 className="text-2xl font-semibold text-gray-900  tracking-widest">
            THE ART OF PERFORMANCE
          </h2>
          <h3 className="py-8">
            Life. It’s not about figures. It’s about feelings. The moments that
            feed your soul.<br></br> The occasions that take your breath away.
            The instances that leave you speechless. These are the moments we
            live for.
          </h3>
          <h3 className="py-2">
            That’s why our designers and engineers at Jaguar develop a blend of
            responsive performance that gets your pulse racing.
          </h3>
          <h3 className="py-2">
            Our cars are a manifestation of our passion. Performance that cannot
            be measured, only felt. That’s why we call it art.
          </h3>
        </div>
        {/* text up  */}
        <section className="text-gray-600 body-font">
          <div className="container px-5 py-24 mx-auto max-w-7x1">
            <div className="flex flex-wrap w-full mb-4 p-4">
              <div className="w-full mb-6 lg:mb-0">
                <div className="h-1 w-100 bg-indigo-900 rounded"></div>
              </div>
            </div>
            <div className="flex flex-wrap -m-4">
              <div className="xl:w-1/3 md:w-1/2 p-4">
                <div className="bg-white p-6 rounded-lg">
                  <img
                    className="lg:h-60 xl:h-56 md:h-64 sm:h-72 xs:h-72 h-72  rounded w-full object-cover object-center mb-6  hover:opacity-80 transition duration-300 ease-in-out bg-white"
                    src="https://avatars.mds.yandex.net/get-autoru-vos/2058179/79677dec06bd24a5cb651e2d96814f3d/1200x900n"
                    alt="Image Size 720x400"
                  ></img>

                  <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
                    Jaguar XJ 2009
                  </h2>
                  <p className="leading-relaxed text-base">
                    Fingerstache flexitarian street art 8-bit waistcoat.
                    Distillery hexagon disrupt edison bulbche.
                  </p>
                  <br></br>
                  <Link
                    className=" text-xs text-red-900 underline decoration-transparent hover:decoration-inherit transition duration-300 ease-in-out"
                    to="/home"
                  >
                    EXPLORE JAGUAR E-PACE
                  </Link>
                </div>
              </div>
              <div className="xl:w-1/3 md:w-1/2 p-4">
                <div className="bg-white p-6 rounded-lg">
                  <img
                    className="lg:h-60 xl:h-56 md:h-64 sm:h-72 xs:h-72 h-72 rounded w-full object-cover object-center mb-6 hover:opacity-80 transition duration-300 ease-in-out bg-white"
                    src="./media/f-pace.webp"
                    alt="Image Size 720x400"
                  ></img>
                  <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                    JAGUAR F‑PACE
                  </h2>
                  <p className="leading-relaxed text-base">
                    Luxury performance SUV offering practicality and efficiency.
                  </p>
                  <br></br>
                  <Link
                    className=" text-xs text-red-900 underline decoration-transparent hover:decoration-inherit transition duration-300 ease-in-out"
                    to="/"
                  >
                    EXPLORE JAGUAR E-PACE
                  </Link>
                </div>
              </div>
              <div className="xl:w-1/3 md:w-1/2 p-4">
                <div className="bg-white p-6 rounded-lg">
                  <img
                    className="lg:h-60 xl:h-56 md:h-64 sm:h-72 xs:h-72 h-72 rounded w-full object-cover object-center mb-6 hover:opacity-80 transition duration-300 ease-in-out bg-white"
                    src="./media/e-pace.jpg"
                    alt="Image Size 720x400"
                  ></img>
                  <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                    JAGUAR E-PACE
                  </h2>
                  <p className="leading-relaxed text-base">
                    Jaguar’s first compact is a unique combination of looks
                  </p>
                  <br></br>
                  <Link
                    className=" text-xs text-red-900 underline decoration-transparent hover:decoration-inherit transition duration-300 ease-in-out"
                    to="/"
                  >
                    EXPLORE JAGUAR E-PACE
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/*------------blue page down-------- */}

        <div>
          <section className=" text-gray-100 bg-gray-900">
            <div className="max-w-6xl mx-auto px-5 py-24 ">
              <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
                <h1 className=" title-font mb-2 text-4xl font-extrabold leading-10 tracking-tight text-center sm:text-2xl sm:leading-none md:text-4xl">
                  {" "}
                  STAY CONNECTED WITH JAGUAR
                </h1>
                <p className="lg:w-1/2 w-full leading-relaxed text-base">
                  Get all the latest updates from the Jaguar family, as they
                  happen.
                </p>
              </div>
              <div className="flex flex-wrap -m-4">
                <div className="xl:w-1/3 md:w-1/2 p-4">
                  <div className="border border-gray-200 p-6 rounded-lg  hover:bg-white hover:text-black">
                    <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-gray-200 text-indigo-800 mb-4"></div>
                    <h2 className="text-lg font-medium title-font mb-2">
                      {" "}
                      Going elecectric with Jaguar
                    </h2>
                    <p className="leading-relaxed text-base">
                      Experience Jaguar's world of electrifying performance and
                      very cheep
                    </p>

                    <div className="text-center mt-2 leading-none flex justify-between w-full">
                      <span className=" mr-3 inline-flex items-center leading-none text-sm  py-1 ">
                        <Link className="hover:text-red-900" to="/">
                          FIND OUT MORE
                        </Link>
                      </span>
                    </div>
                  </div>
                </div>

                <div className="xl:w-1/3 md:w-1/2 p-4">
                  <div className="border border-gray-300 p-6 rounded-lg  hover:bg-white hover:text-black">
                    <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4 italic"></div>
                    <h2 className="text-lg  font-medium title-font mb-2">
                      Select up three vehicles
                    </h2>
                    <p className="leading-relaxed text-base">
                      A quick and simple guide the new fuel effiency,this car
                      comfortable all people
                    </p>

                    <div className="text-center mt-2 leading-none flex justify-between w-full">
                      <span className=" mr-3 inline-flex items-center leading-none text-sm  py-1 ">
                        <Link to="/">FIND OUT MORE</Link>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="xl:w-1/3 md:w-1/2 p-4 ">
                  <div className="border border-gray-300 p-6 rounded-lg  hover:bg-white hover:text-black">
                    <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4"></div>
                    <h2 className="text-lg  font-medium title-font mb-2">
                      Jaguar reliability
                    </h2>
                    <p className="leading-relaxed text-base">
                      Jaguar is going to extraordianry lengths to deliver the
                      world's
                    </p>

                    <div className="text-center mt-2 leading-none flex justify-between w-full ">
                      <span className=" mr-3 inline-flex items-center leading-none text-sm  py-1 ">
                        <Link to="/">FIND OUT MORE</Link>
                      </span>
                      <span className=" inline-flex items-center leading-none text-sm"></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </Layout>
    </>
  );
}

export default Home;
