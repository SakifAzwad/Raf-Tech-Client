/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { useContext } from "react";
import { AuthCon } from "./Provider/AuthProv";
import Swal from "sweetalert2";

const ShowAProd = ({data}) => {
    const { user} = useContext(AuthCon);
    const {image, name, brand_name, type, price, rating,details}=data;
    const addcart =()=>
    {
        const email=user.email;
        const newprod = {email, image, name, brand_name, type, price, rating};
        console.log(newprod);
        fetch('https://raf-tech-server.vercel.app/usercart',
    {
      method:'POST',
      headers:
      {
        'content-type':'application/json'
      },
      body:JSON.stringify(newprod)
    })
    .then(res=>res.json())
    .then(data=>
      {
        console.log(data);
        if(data.insertedId)
        {
          Swal.fire(
            'Good job!',
            'Product Added to your Cart',
            'success'
          )
        }
      })
    }
    return (
        <div className="bg-col4">
            <div className="lg:flex">
            <div className="lg:w-1/2 w-full p-24">
            <img  src={image} alt="" />
            </div>
            <div className="lg:w-1/2 w-full md:pr-12 md:px-0 px-4">
                <h1 className="text-5xl text-center pb-12 pt-24 font-bold ">{name}</h1>
                <h1 className="text-4xl text-center pb-6 font-bold">{price}$</h1>
                <h1 className="text-center text-2xl pb-8">Details</h1>
                <h1>{details}</h1>
                <button onClick={addcart} className="btn mt-12 w-full bg-col1 border-col2 text-col4 hover:bg-col2 hover:text-col4 mb-12">Add to cart</button>
            </div>
        </div>
        </div>
    );
};

export default ShowAProd;