/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */

import { Link } from "react-router-dom";

const ShowProd = ({ pro }) => {
  const { _id,name, image, brand_name, type, price, rating, details } = pro;
  return (
    <div>
      <div className="card w-96 bg-green-100 shadow-xl">
        <figure>
          <img src={image} className="h-36 pt-2" alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="text-2xl font-bold text-center">{name}</h2>

            <div className="flex justify-evenly text-xl  space-x-4">
            <div>
                <h1>Brand Name </h1>
                <h1>Type </h1>
                <h1>Price </h1>
                <h1>Rating </h1>
            </div>
            <div>
                <h1>:{brand_name}</h1>
                <h1>:{type}</h1>
                <h1>:{price}$</h1>
                <h1>:{rating}/5</h1>
            </div>
            </div>

            <div className="flex space-x-2 w-full">
            <Link className="w-full" to={`/product/${_id}`}><button className="btn bg-col1 border-col2 text-col4 hover:bg-col4 hover:text-col1 w-full hover:border hover:border-slate-400">Details</button></Link>
            <Link className="w-full" to={`/updateprod/${_id}`}><button className="btn bg-col1 border-col2 text-col4 hover:bg-col4 hover:text-col1 w-full  hover:border hover:border-slate-400">Update</button></Link>
            </div>

        </div>
      </div>
    </div>
  );
};

export default ShowProd;
