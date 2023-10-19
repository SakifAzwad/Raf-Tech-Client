const AddProd = () => {
  return (
    <div className=" min-h-screen" style={{backgroundImage: 'url(https://i.ibb.co/0FMMyB8/pxfuel.jpg)'}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="">
      <div className=" min-h-screen">
        <h1 className="text-5xl text-center font-extrabold text-col4 pt-12">
          Add a Product
        </h1>
        <div className=" flex-col lg:flex-row-reverse pt-12 ">
          <div className="card flex-shrink-0  md:mx-24 bg-col3 bg-opacity-40  shadow-2xl ">
            <form className="card-body">
            <div className="md:flex md:space-x-8">
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text text-col4">Image URL</span>
                  </label>
                  <input
                  name="photo"
                    type="text"
                    placeholder="Image URL"
                    className="input input-bordered text-col4 border-col3  bg-transparent"
                    required
                  />
                </div>
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text text-col4">Name</span>
                  </label>
                  <input
                  name="name"
                    type="text"
                    placeholder="Name"
                    className="input input-bordered text-col4 border-col3  bg-transparent"
                    required
                  />
                </div>
              </div>
              <div className="md:flex md:space-x-8">
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text text-col4">Brand Name</span>
                  </label>
                  <input
                  name="brand"
                    type="text"
                    placeholder="Brand Name"
                    className="input input-bordered text-col4 border-col3  bg-transparent"
                    required
                  />
                </div>
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text text-col4">Type</span>
                  </label>
                  <input
                  name="typ"
                    type="text"
                    placeholder="Type"
                    className="input input-bordered text-col4 border-col3  bg-transparent"
                    required
                  />
                </div>
              </div>
              <div className="md:flex md:space-x-8">
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text text-col4">Price</span>
                  </label>
                  <input
                  name="price"
                    type="text"
                    placeholder="Price"
                    className="input input-bordered text-col4 border-col3  bg-transparent"
                    required
                  />
                </div>
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text text-col4">Rating (0-5)</span>
                  </label>
                  <input
                    name="rate"
                    type="number"
                    placeholder="Rating"
                    className="input input-bordered text-col4 border-col3  bg-transparent"
                    required
                  />
                </div>
              </div>
              <div className="">
                
                <div className="form-control mt-6">
                  <button className="btn bg-col1 border-col2 text-col4 hover:bg-col4 hover:text-col1 w-56 mx-auto">Add</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
</div>
  );
};

export default AddProd;
