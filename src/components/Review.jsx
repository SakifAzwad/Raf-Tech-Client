/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

const Review = ({ review }) => {
    const { name, location, comment } = review;
    return (
      <div data-aos="fade-up" className="card w-96 bg-base-100 shadow-xl">
        
        <div  className="card-body">
          <p>{comment}</p>
          
        </div>
        <div className="mb-2">
        <p className="text-xl font-bold pl-7">{name}</p>
        <p className="pl-7">{location}</p>
        </div>
        
      </div>
    );
  };
  
  export default Review;