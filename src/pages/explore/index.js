import Layout from "../../shared_components/Layout";
import { Link } from "react-router-dom";
function Explore() {
  return (
    <>
      <Layout>
        <div class="relative h-72 m-8 overflow-hidden">
          <div class="absolute z-30 flex w-full h-full">
            <div class="relative z-30 w-5/6 px-6 py-8 text-white font-bold  md:py-10 md:w-1/2">
              <h2 class="text-2xl">EXPLORE JAGUAR</h2>
              <span></span>
            </div>
            <div class="absolute top-0 right-0 flex w-full h-full">
              <div class="w-1/4 h-full bg-gray-900"></div>
              <div class="relative w-1/3">
                <svg
                  fill="currentColor"
                  viewBox="0 0 100 100"
                  class="absolute inset-y-0 z-20 h-full text-gray-900"
                >
                  <polygon
                    id="diagonal"
                    points="0,0 100,0 50,100 0,100"
                  ></polygon>
                </svg>
                <svg
                  fill="currentColor"
                  viewBox="0 0 100 100"
                  class="absolute inset-y-0 z-10 h-full ml-6 text-white opacity-50"
                >
                  <polygon points="0,0 100,0 50,100 0,100"></polygon>
                </svg>
              </div>
            </div>
          </div>
          <div class="absolute top-0 right-0 block w-9/12 h-full">
            <img
              alt="S"
              class="object-cover h-full min-w-full"
              src="./media/explore1.jpg"
            />
          </div>
        </div>

        {/* --------------------text------------------------ */}
        <div className=" max-h-96 text-left py-4 mt-2 pl-6 pr-4">
          <h6 className="text-xl font-semibold  tracking-widest">
            Jaguar's pinnacle saloon car. The perfect combination of
            cutting-edge technology, sporting vehicle dynamics, and opulent
            luxury.
          </h6>
          <h6 className="py-2 text-sm">
            The fuel consumption figures provided are as a result of official
            manufacturer's tests in accordance with EU legislation. A vehicle's
            actual fuel consumption may differ from that achieved in such tests
            and these figures are for comparative purposes only.
          </h6>
          <h6 className="py-2 text-sm">
            Important note on imagery & specification. We are living through
            exceptional times. Due to the Covid pandemic we have been prevented
            or delayed in the creation of new images of current model years. Now
            the global impact of micro-chip shortages is further affecting build
            specifications, options and launch timings.
            <br></br> Until this unique event settles, please note that many
            images cannot be updated to 23 model year specifications. Features,
            options, trim and colour schemes will differ from many images.
            Customers are urged to consult your local Retailer for detailed 23
            model year specifications and do not base an order on marketing
            imagery and specification alone.
          </h6>
          <h6 className=" pb-6 text-sm">
            The mapping on this website is provided by external mapping
            providers and is for general information purposes only.
          </h6>
        </div>
        {/* ------------------------------- */}
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
                    src="/media/xj1.jpg"
                    alt="Image Size 720x400"
                  ></img>
                  <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                    JAGUAR XJ
                  </h2>
                  <Link
                    className=" text-xs  font-bold  underline decoration-transparent hover:decoration-inherit transition duration-300 ease-in-out text-black hover:text-red-800"
                    to="/home"
                  >
                    EXPLORE JAGUAR
                  </Link>
                </div>
              </div>
              <div className="xl:w-1/3 md:w-1/2 p-4">
                <div className="bg-white p-6 rounded-lg">
                  <img
                    className="lg:h-60 xl:h-56 md:h-64 sm:h-72 xs:h-72 h-72 rounded w-full object-cover object-center mb-6"
                    src="./media/xj3.webp"
                    alt="Image Size 720x400"
                  ></img>
                  <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                  FLAWLESS CRAFTSMANSHIP
                  </h2>
                  <Link
                    className=" text-xs font-bold  underline decoration-transparent hover:decoration-inherit transition duration-300 ease-in-out text-black hover:text-red-800"
                    to="/"
                  >
                    EXPLORE JAGUAR
                  </Link>
                </div>
              </div>
              <div className="xl:w-1/3 md:w-1/2 p-4">
                <div className="bg-white p-6 rounded-lg">
                  <img
                    className="lg:h-60 xl:h-56 md:h-64 sm:h-72 xs:h-72 h-72 rounded w-full object-cover object-center mb-6"
                    src="./media/xj5.jpg"
                    alt="Image Size 720x400"
                  ></img>
                  <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                  EVERY DETAIL CONSIDERED
                  </h2>
                  <Link
                    className=" text-xs font-bold  underline decoration-transparent hover:decoration-inherit transition duration-300 ease-in-out text-black hover:text-red-800"
                    to="/home"
                  >
                    EXPLORE JAGUAR
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/*---------------------- */}
      </Layout>
    </>
  );
}

export default Explore;
