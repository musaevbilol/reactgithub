import axios from "axios";
import { useEffect, useState } from "react";
import Layout from "../../shared_components/Layout";
import Card from "../components/card";
import { Link } from "react-router-dom";
function PURCHASE() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/Jaguar")
      .then(function (response) {
        setData(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <>
      <Layout>
        <div className="mb-20">
          <img
            src="/media/explore1.jpg"
            className=" h-96 object-cover w-full  bg-center p-6"
          ></img>
        </div>
        {/* image */}
        {/*----------text and button---------------*/}

        <div className=" max-h-72 text-center py-4 mt-10">
          <h2 className="text-2xl font-semibold  tracking-widest">
            CHOOSE YOUR MODEL
          </h2>
          <h3 className="py-8">
            Standard Wheelbase (SWB) or Long Wheelbase (LWB), every XJ is the
            perfect environment for work or leisure.<br></br> LWB models also
            feature over a metre of legroom and a unique 'limousine' ride with
            revised air suspension settings for even greater comfort.
          </h3>

          <button className="relative w-52 h-12 overflow-hidden text-sm font-semibold text-white uppercase bg-red-800 group shadow-md hover:bg-white shadow-xl trans0 hover:text-black">
            <div className="absolute bottom-0 left-0 h-0 transition-all duration-300 border-l-2 border-black group-hover:h-full"></div>
            <div className="absolute top-0 left-0 w-0 transition-all duration-300 delay-100 border-t-2 border-black group-hover:w-full"></div>
            <div className="absolute top-0 right-0 h-0 transition-all duration-300 delay-200 border-r-2 border-black group-hover:h-full"></div>
            <div className="absolute bottom-0 right-0 w-0 transition-all duration-300 delay-300 border-b-2 border-black group-hover:w-full"></div>
            <span className="tracking-widest">EXPLORE</span>
          </button>
        </div>
        {/*button up ------ */}

        {/* --------------------- */}
        <div className="flex justify-between my-8 mx-20 ">
          <h1 className="text-xl md:text-2xl text-gray-700">.</h1>
          <Link
            className="bg-blue-500 px-6 py-2 rounded text-xl text-white"
            to={"/jaguar/create"}
          >
            +
          </Link>
        </div>
        {/********************************/}
        <div className="grid gap-6 md:grid-cols-2  lg:grid-cols-3 xl:grid-cols-3 p-4 justify-center">
          {data.map((Jaguar) => {
            return (
              <Card
                title={Jaguar.title}
                image={Jaguar.imageURL}
                description={Jaguar.description}
                price={Jaguar.price}
                releaseDate={Jaguar.releaseDate}
                id={Jaguar.id}
              />
            );
          })}
        </div>
        <div className=" max-h-96 text-left py-4 mt-8 pl-6 pr-4 mb-1">
          <h6 className="text-xl font-semibold  tracking-widest">
            Jaguar's pinnacle saloon car. The perfect combination of
            cutting-edge technology, sporting vehicle dynamics, and opulent
            luxury.
          </h6>
          <h6 className="py-2 text-sm">
            The figures provided are NEDC2 calculated from official
            manufacturer's WLTP tests in accordance with EU legislation. For
            comparison purposes only. Real world figures may differ. CO2 and
            fuel economy figures may vary according to wheel fitment and
            optional extras fitted. NEDC2 are figures calculated using a
            Government formula from WLTP figures equivalent to what they would
            have been under the old NEDC test. The correct tax treatment can
            then be applied.
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
      </Layout>
    </>
  );
}
export default PURCHASE;
