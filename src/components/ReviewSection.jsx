/* eslint-disable react/prop-types */
import Review from "./Review";


const ReviewSection=({reviews}) => {
  

  return (
    <div className="bg-col4">
    <div className="grid lg:grid-cols-3 grid-cols-1 lg:w-4/5 gap-3 ml-5 lg:mx-auto py-16">
    {
        reviews?.map((review)=>(
            <Review key={review.id} review={review}></Review>
        ))
    }
    </div>
</div>
  );
}

export default ReviewSection;