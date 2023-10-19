/* eslint-disable no-unused-vars */

import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const BrandCard = ({data}) => {

    const {_id,name,image}=data;
  return (
    <div>
      <Link to={`/products/${_id}`} state={_id}>
      <div  className="card w-full bg-white shadow-xl">
        <figure>
          <img
          className="  h-48"
            src={image}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="text-4xl font-extrabold text-col2 text-center pb-4">{name}</h2>
          
          <div className="card-actions justify-end">
            <button className="btn bg-col1  text-col4 hover:bg-col3 hover:text-col4 w-full">Learn More</button>
          </div>
        </div>
      </div>
      
      </Link>
    </div>
  );
};

export default BrandCard;
