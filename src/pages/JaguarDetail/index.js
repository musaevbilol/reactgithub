import Layout from "../../shared_components/Layout";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function JaguarDetail() {
  let params = useParams();
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/Jaguar/${params.id}`)
      .then(function (response) {
        setData(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <Layout>
      <>
        {data && (
          <section className="relative pt-4 pb-6 bg-gray-200">
            <div className="items-center flex flex-wrap">
              <div className="w-full md:w-6/12 ml-auto mr-auto px-4">
                <img
                  className="max-w-full rounded-lg shadow-lg"
                  src={data.imageURL}
                />
              </div>
              <div className="w-full md:w-5/12 ml-auto mr-auto px-4">
                <div className="md:pr-12">
                  <div className="text-blue-600 p-3 text-center inline-flex items-center justify-center">
                    <i className="fas fa-rocket text-xl"></i>
                  </div>
                  <h3 className="text-3xl font-semibold">{data.title}</h3>
                  <p className="mt-4 text-lg leading-relaxed text-blueGray-500">
                    {data.description}
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
                          <h4 className="text-blueGray-500 font-semibold text-xl">
                            {data.developer}
                          </h4>
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
                          <h4 className="text-blueGray-500 font-semibold text-xl">
                            {data.releaseDate}
                          </h4>
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
                          <h4 className="text-blueGray-500 font-semibold text-xl">
                            {data.price}
                          </h4>
                        </div>
                      </div>
                    </li>
                  </ul>
                  <div className="flex justify-center bg-blue-600 mx-48 text-white rounded-lg hover:bg-white shadow-xl  hover:text-black font-semibold">
                    <Link to={`/jaguar/update/${params.id}`} className=" my-2">
                      Update
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}
      </>
    </Layout>
  );
}

export default JaguarDetail;
