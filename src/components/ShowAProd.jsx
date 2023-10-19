/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

const ShowAProd = ({data}) => {

    const {image,name,details,price}=data;
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
                <button className="btn mt-12 w-full btn-secondary mb-12">Add to cart</button>
            </div>
        </div>
        </div>
    );
};

export default ShowAProd;