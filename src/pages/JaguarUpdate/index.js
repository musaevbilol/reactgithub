import { useEffect, useState } from "react";
import Layout from "../../shared_components/Layout";
import axios from "axios";
import MyInput from "../components/myInput";
import { useNavigate, useParams } from "react-router-dom";

function JaguarUpdate() {
  const [titleInp, settitleInp] = useState("");
  const [capacityInp, setcapacityInp] = useState("");
  const [locationInp, setlocationInp] = useState("");
  const [imageInp, setImageInp] = useState("");
  const [developerInp, setDeveloperInp] = useState("");
  const [priceInp, setPriceInp] = useState("");
  const [ratingErr, setratingErr] = useState("");

  let navigate = useNavigate();
  let params = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:3000/Jaguar/${params.id}`)
      .then(function (response) {
        settitleInp(response.data.title);
        setcapacityInp(response.data.capacity);
        setlocationInp(response.data.location);
        setImageInp(response.data.imageURL);
        setDeveloperInp(response.data.developer);
        setPriceInp(response.data.price);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  const onCreate = (e) => {
    e.preventDefault();
    if (capacityInp > 10000 || capacityInp < 1) {
      setratingErr("10 and 100 between");
      return;
    }

    axios
      .put(`http://localhost:3000/Jaguar/${params.id}`, {
        title: titleInp.trim(),
        capacity: capacityInp.trim(),
        location: locationInp.trim(),
        imageURL: imageInp.trim(),
        developer: developerInp.trim(),
        price: priceInp.trim(),
      })
      .then(function (response) {
        navigate(`/jaguar/${params.id}`);
      })
      .catch(function (error) {
        alert("something went wrong please try again");
      });
  };

  return (
    <Layout>
      <form class="max-w-3xl mx-auto shadow boder p-4 space-y-6">
        <MyInput
          labelText={"Title"}
          myValue={titleInp}
          mySetValueChange={settitleInp}
          type={"text"}
        />
        <div>
          <MyInput
            labelText={"Capacity"}
            myValue={capacityInp}
            mySetValueChange={setcapacityInp}
            type={"number"}
          />
          {ratingErr && <p className="text-red-700">{ratingErr}</p>}
        </div>
        <MyInput
          labelText={"Location"}
          myValue={locationInp}
          mySetValueChange={setlocationInp}
          type={"text"}
        />
        <MyInput
          labelText={"Image URL"}
          myValue={imageInp}
          mySetValueChange={setImageInp}
          type={"text"}
        />
        <MyInput
          labelText={"Developer"}
          myValue={developerInp}
          mySetValueChange={setDeveloperInp}
          type={"text"}
        />
        <MyInput
          labelText={"Price"}
          myValue={priceInp}
          mySetValueChange={setPriceInp}
          type={"number"}
        />
        <div className="flex justify-end  ">
          <button
            onClick={onCreate}
            className="mx-2 my-2 hover:bg-white hover:text-black transition duration-150 ease-in-out bg-blue-500 text-white rounded border border-gray-600  px-6 py-2 text-lg font-semibold focus:outline-none focus:ring-2 focus:ring-offset-2"
          >
            Update
          </button>
        </div>
      </form>
    </Layout>
  );
}

export default JaguarUpdate;
