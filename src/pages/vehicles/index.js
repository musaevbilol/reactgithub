import { Link } from "react-router-dom";
import Layout from "../../shared_components/Layout";

function VEHICLES() {
  return (
    <Layout>
      <Link to="/vehicles">
        <div className="">
          <img
            src="./media/purchase0.png"
            className=" h-max w-full bg-cover bg-center p-6"
          ></img>
        </div>

        {/* text */}
        <div className=" max-h-72 text-center py-4 mt-10 mb-10 ">
          <h2 className="text-2xl font-semibold text-gray-900  tracking-widest">
            CHOOSE YOUR VEHICLE
          </h2>
        </div>
        {/* grid image */}
        <div className="px-3 py-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-10 gap-y-4">
            <a
              href="https://www.kindacode.com"
              className="flex flex-col bg-white drop-shadow hover:drop-shadow-lg rounded-md"
            >
              <img
                src="./media/model2.webp"
                alt="Fiction Product"
                className="h-36 object-cover rounded-tl-md rounded-tr-md"
              />

              <div className="px-3 py-2">
                <h1 className="font-semibold">Product One</h1>
                <p className="text-sm">$69.69</p>
              </div>
            </a>

            <a
              href="https://www.kindacode.com"
              className="flex flex-col bg-white drop-shadow hover:drop-shadow-lg rounded-md"
            >
              <img
                src="./media/ipace.png"
                alt="Fiction Product"
                className="h-36 object-cover rounded-tl-md rounded-tr-md"
              />

              <div className="px-3 py-2">
                <h1 className="font-semibold">Product Two</h1>
                <p className="text-sm">$69.69</p>
              </div>
            </a>

            <a
              href="https://www.kindacode.com"
              className="flex flex-col bg-white drop-shadow hover:drop-shadow-lg rounded-md"
            >
              <img
                src="./media/e-pace.jpg"
                alt="Fiction Product"
                className="h-36 object-cover rounded-tl-md rounded-tr-md"
              />

              <div className="px-3py-2">
                <h1 className="font-semibold">Product Three</h1>
                <p className="text-sm">$69.69</p>
              </div>
            </a>

            <a
              href="https://www.kindacode.com"
              className="flex flex-col bg-white drop-shadow hover:drop-shadow-lg rounded-md"
            >
              <img
                src="./media/fpase1.jpg"
                alt="Fiction Product"
                className="h-36 object-cover rounded-tl-md rounded-tr-md"
              />

              <div className="px-3 py-2">
                <h1 className="font-semibold">Product Five</h1>
                <p className="text-sm">$69.69</p>
              </div>
            </a>

            <a
              href="https://www.kindacode.com"
              className="flex flex-col bg-white drop-shadow hover:drop-shadow-lg rounded-md"
            >
              <img
                src="./media/infocar4.webp"
                alt="Fiction Product"
                className="h-36 object-cover rounded-tl-md rounded-tr-md"
              />

              <div className="px-3 py-2">
                <h1 className="font-semibold">Product Six</h1>
                <p className="text-sm">$69.69</p>
              </div>
            </a>

            <a
              href="https://www.kindacode.com"
              className="flex flex-col bg-white drop-shadow hover:drop-shadow-lg rounded-md"
            >
              <img
                src="./media/new.jpg"
                alt="Fiction Product"
                className="h-36 object-cover rounded-tl-md rounded-tr-md"
              />

              <div className="px-3 py-2">
                <h1 className="font-semibold">Product Six</h1>
                <p className="text-sm">$69.69</p>
              </div>
            </a>
          </div>
        </div>

        {/* //////////////////////purchase//////////////////////// */}
        <section className="relative pt-4 pb-5 bg-gray-200">
          <div className="items-center flex flex-wrap">
            <div className="w-full md:w-6/12 ml-auto mr-auto px-4">
              <img
                alt="..."
                className="max-w-full rounded-lg shadow-lg"
                src="./media/infocar1.jpg"
              />
            </div>
            <div className="w-full md:w-5/12 ml-auto mr-auto px-4">
              <div className="md:pr-12">
                <div className="text-blue-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-black mt-8">
                  <i className="fas fa-rocket text-xl"></i>
                </div>
                <h3 className="text-3xl font-semibold">JAGUAR I‑PACE</h3>
                <p className="mt-4 text-lg leading-relaxed text-blueGray-500">
                  Winner of World Car of the Year, World Car Design of the Year
                  and World Green Car*. Designed as an electric car and one that
                  defies EV conventions, Jaguar I-PACE is one of the most
                  desirable models on the road today.
                </p>
                <ul className="list-none mt-6">
                  <li className="py-2">
                    <div className="flex items-center">
                      <div>
                        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-white bg-black mr-3">
                          <i className="fas fa-fingerprint"></i>
                        </span>
                      </div>
                      <div>
                        <h4 className="text-blueGray-500">EXTERIOR DESIGN</h4>
                      </div>
                    </div>
                  </li>
                  <li className="py-2">
                    <div className="flex items-center">
                      <div>
                        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full  text-white bg-black mr-3">
                          <i className="fab fa-html5"></i>
                        </span>
                      </div>
                      <div>
                        <h4 className="text-blueGray-500">INTERIOR DESIGN</h4>
                      </div>
                    </div>
                  </li>
                  <li className="py-2">
                    <div className="flex items-center">
                      <div>
                        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full  text-white bg-black mr-3">
                          <i className="far fa-paper-plane"></i>
                        </span>
                      </div>
                      <div>
                        <h4 className="text-blueGray-500">CHOOSE YOUR MODEL</h4>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        {/* enteriror design */}
        <div className=" max-h-72 text-center py-4 mt-10 mb-10 ">
          <h2 className="text-2xl font-semibold text-gray-900  tracking-widest">
            EXTERIOR DESIGN
          </h2>
          <h3 className="py-8">
            Elegant and aerodynamic. The striking result of Jaguar DNA, FIA
            Formula E Racing technology and contemporary British design.
          </h3>
        </div>

        <div className="">
          <img
            src="./media/ipace.png"
            className=" h-max w-full bg-cover bg-center p-6"
          ></img>
        </div>

        <div className=" max-h-72 text-center py-4 mt-10 mb-10 ">
          <h2 className="text-2xl font-semibold text-gray-900  tracking-widest">
            INTERIOR DESIGN
          </h2>
          <h3 className="py-8">
            I-PACE reimagines the classic Jaguar balance of sports car focus and
            luxury craftsmanship, creating a spacious cabin with beautifully
            integrated technology.
          </h3>
        </div>

        <div className="">
          <img
            src="./media/ipaceenterior.webp"
            className=" h-max w-full bg-cover bg-center p-6"
          ></img>
        </div>
        {/*----------text and button---------------*/}

        <div className=" max-h-72 text-center py-4 mt-10">
          <h2 className="text-2xl font-semibold  tracking-widest">
            CHOOSE YOUR MODEL
          </h2>
          <h3 className="py-8">
            A choice of models to suit your needs, including the I-PACE Black.
          </h3>

          <button className="relative w-40 h-12 overflow-hidden text-sm font-semibold text-white uppercase bg-red-800 group shadow-md hover:bg-white shadow-xl trans0 hover:text-black">
            <div className="absolute bottom-0 left-0 h-0 transition-all duration-300 border-l-2 border-black group-hover:h-full"></div>
            <div className="absolute top-0 left-0 w-0 transition-all duration-300 delay-100 border-t-2 border-black group-hover:w-full"></div>
            <div className="absolute top-0 right-0 h-0 transition-all duration-300 delay-200 border-r-2 border-black group-hover:h-full"></div>
            <div className="absolute bottom-0 right-0 w-0 transition-all duration-300 delay-300 border-b-2 border-black group-hover:w-full"></div>
            <span className="tracking-widest">I-PACE</span>
          </button>
          {/*button up ------ */}
        </div>

        <section className="text-gray-600 body-font bg-gray-200">
          <div className="container px-5 py-24 mx-auto max-w-7x1">
            <div className="flex flex-wrap w-full mb-4 p-4">
              <div className="w-full mb-6 lg:mb-0 "></div>
            </div>
            <div className="flex flex-wrap -m-4 ">
              <div className="xl:w-1/3 md:w-1/2 p-4 ">
                <div className="p-6 rounded-lg ">
                  <img
                    className="lg:h-60 xl:h-56 md:h-64 sm:h-72 xs:h-72 h-72  rounded w-full object-cover object-center mb-6"
                    src="./media/ipacemodel.webp"
                    alt="Image Size 720x400"
                  ></img>
                  <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
                    Jaguar XJ 2009
                  </h2>
                  <p className="leading-relaxed text-base">LED headlights</p>
                  <p className="leading-relaxed text-base">
                    18" Style 1022 wheels
                  </p>
                  <p className="leading-relaxed text-base">
                    Luxtec sport seats
                  </p>
                  <p className="leading-relaxed text-base">
                    Leather steering wheel
                  </p>
                </div>
              </div>
              <div className="xl:w-1/3 md:w-1/2 p-4">
                <div className="p-6 rounded-lg">
                  <img
                    className="lg:h-60 xl:h-56 md:h-64 sm:h-72 xs:h-72 h-72 rounded w-full object-cover object-center mb-6"
                    src="./media/model2.webp"
                    alt="Image Size 720x400"
                  ></img>
                  <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                    I-PACE SE
                  </h2>
                  <p className="leading-relaxed text-base">
                    Premium LED headlights with signature
                  </p>
                  <p className="leading-relaxed text-base">
                    20" Style 6007 wheels
                  </p>
                  <p className="leading-relaxed text-base">
                    DuoLeather sport seats
                  </p>
                  <p className="leading-relaxed text-base">Powered tailgate</p>
                </div>
              </div>
              <div className="xl:w-1/3 md:w-1/2 p-4">
                <div className="p-6 rounded-lg">
                  <img
                    className="lg:h-60 xl:h-56 md:h-64 sm:h-72 xs:h-72 h-72 rounded w-full object-cover object-center mb-6"
                    src="./media/model3.webp"
                    alt="Image Size 720x400"
                  ></img>
                  <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                    I-PACE HSE
                  </h2>
                  <p className="leading-relaxed text-base">
                    Matrix LED headlights with signature DRL
                  </p>
                  <p className="leading-relaxed text-base">
                    Windsor leather sport seats
                  </p>
                  <p className="leading-relaxed text-base">
                    MeridianTM 3D Surround Sound System
                  </p>
                  <p className="leading-relaxed text-base">
                    Online Pack with Data Plan2
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===================================== */}
        <section className="relative pt-4 pb-6 bg-gray-200">
          <div className="items-center flex flex-wrap">
            <div className="w-full md:w-6/12 ml-auto mr-auto px-4">
              <img
                alt="..."
                className="max-w-full rounded-lg shadow-lg"
                src="./media/infocar2.webp"
              />
            </div>
            <div className="w-full md:w-5/12 ml-auto mr-auto px-4">
              <div className="md:pr-12">
                <div className="text-blue-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-black mt-8">
                  <i className="fas fa-rocket text-xl"></i>
                </div>
                <h3 className="text-3xl font-semibold">JAGUAR F-PACE</h3>
                <p className="mt-4 text-lg leading-relaxed text-blueGray-500">
                  Our luxury performance SUV brings together award-winning
                  design, Jaguar performance and intuitive technologies to make
                  every journey feel extraordinary. Now available as Plug-in
                  Hybrid. 
                </p>
                <ul className="list-none mt-6">
                  <li className="py-2">
                    <div className="flex items-center">
                      <div>
                        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-white bg-black mr-3">
                          <i className="fas fa-fingerprint"></i>
                        </span>
                      </div>
                      <div>
                        <h4 className="text-blueGray-500">EXTERIOR DESIGN</h4>
                      </div>
                    </div>
                  </li>
                  <li className="py-2">
                    <div className="flex items-center">
                      <div>
                        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full  text-white bg-black mr-3">
                          <i className="fab fa-html5"></i>
                        </span>
                      </div>
                      <div>
                        <h4 className="text-blueGray-500">INTERIOR DESIGN</h4>
                      </div>
                    </div>
                  </li>
                  <li className="py-2">
                    <div className="flex items-center">
                      <div>
                        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full  text-white bg-black mr-3">
                          <i className="far fa-paper-plane"></i>
                        </span>
                      </div>
                      <div>
                        <h4 className="text-blueGray-500">CHOOSE YOUR MODEL</h4>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/*----------text f-pace-------- */}
        <div className=" max-h-72 text-center py-4 mt-10 mb-10 ">
          <h2 className="text-2xl font-semibold text-gray-900  tracking-widest">
            EXTERIOR DESIGN
          </h2>
          <h3 className="py-8">
            A seamless bonnet, deep grille, double ‘J’ blade signature
            headlights and wider vents all add to Jaguar F-PACE’s dynamic
            stance.
          </h3>
        </div>

        {/* -------------------------------- */}
        <div className="">
          <img
            src="./media/fpasefirst.png"
            className=" h-max w-full bg-cover bg-center p-6"
          ></img>
        </div>

        {/* ------------------------------- */}

        <div className=" max-h-72 text-center py-4 mt-10 mb-10 ">
          <h2 className="text-2xl font-semibold text-gray-900  tracking-widest">
            KEEP EXPLORING
          </h2>
        </div>
        {/* text f-pace */}

        <section className="text-gray-600 body-font">
          <div className="container px-5 py-15 mx-auto max-w-7x1">
            <div className="flex flex-wrap w-full mb-4 p-4">
              <div className="w-full mb-6 lg:mb-0"></div>
            </div>
            <div className="flex flex-wrap -m-4">
              <div className="xl:w-1/3 md:w-1/2 p-4">
                <div className="bg-white p-6 rounded-lg">
                  <img
                    className="lg:h-60 xl:h-56 md:h-64 sm:h-72 xs:h-72 h-72 rounded w-full object-cover object-center mb-6"
                    src="./media/fpase1.jpg"
                    alt="Image Size 720x400"
                  ></img>
                  <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                    JAGUAR F-PACE MODELS
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
                    src="./media/fpase2.jpg"
                    alt="Image Size 720x400"
                  ></img>
                  <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                    SPECIFICATIONS
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
                    src="./media/fpase3.jpg"
                    alt="Image Size 720x400"
                  ></img>
                  <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                    GALLERY
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
      </Link>
    </Layout>
  );
}
export default VEHICLES;
