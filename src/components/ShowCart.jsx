/* eslint-disable react/prop-types */

import Swal from "sweetalert2";


const ShowCart = ({pro ,alldata,setalldata}) => {
    const {_id, name, image, brand_name, type, price, rating } = pro;

    const handel = _id =>
  {
    Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {

          fetch(`https://raf-tech-server.vercel.app/usercart/${_id}`,
          {
            method:'DELETE'
          })
          .then(res=>res.json())
          .then(data=>
            {
                console.log(data);
                if(data.deletedCount>0)
                {
                    Swal.fire(
                        'Deleted!',
                        'Your Product has been removed.',
                        'success'
                      )
                      const rem=alldata.filter(pr=>pr._id!==_id);
                      setalldata(rem);
                }
            })
        }
      })
  }
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
              <button onClick={()=>handel(_id)} className="btn bg-col1 border-col2 text-col4 hover:bg-col4 hover:text-col1 w-full hover:border hover:border-slate-400">Remove</button>
          </div>
        </div>
      </div>
    );
};

export default ShowCart;