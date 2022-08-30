import { Link } from "react-router-dom";

function Card({ title, image, description, price, id }) {
  return (
    <>
      <Link to={`/jaguar/${id}`}>
        <div className="w-full max-w-sm shadow-md dark:bg-gray-800 dark:border-gray-700">
          <div className="p-4">
            <img
              className=" aspect-video object-cover"
              src={image}
              alt="product image"
            />
          </div>
          <div className="px-5 pb-5">
            <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
              {title}
            </h5>
            <p>{description}</p>

            <div className="flex justify-between items-center">
              <span className="text-xl font-bold text-gray-900 dark:text-white">
                {price}
              </span>
              <Link
                to={`/jaguar/${id}`}
                className="text-white bg-red-800 hover:bg-gray-300 hover:text-black font-medium rounded-lg  text-sm px-2 py-2 text-center "
              >
                Find out more
              </Link>
              <Link
                to="/jaguar/create"
                className="text-white bg-black hover:bg-gray-300 hover:text-black font-medium rounded-lg  text-sm px-4 py-2 text-center"
              >
                Create
              </Link>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
}

export default Card;
