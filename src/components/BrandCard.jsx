/* eslint-disable no-unused-vars */

import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const BrandCard = ({data}) => {

    const {_id,name,image}=data;
  return (
    <div>
      <Link to={`/products/${_id}`} state={_id}>
      <div  className="card w-full bg-white shadow-xl">
        <figure className="pb-4">
          <img
          className="  h-48"
            src={image}
            alt="Shoes"
          />
        </figure>
        <div className="card-body border-t-4 border-col2">
          <h2 className="text-4xl font-extrabold text-col2 text-center pb-4">{name}</h2> 
        </div>
      </div>
      
      </Link>
    </div>
  );
};

export default BrandCard;
