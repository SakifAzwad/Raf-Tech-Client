/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import ShowProd from "./ShowProd";

const Products = () => {
  const data = useLoaderData();

  const { name, car1, car2, car3 } = data;

  const [prod, setProd] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:5000/products/${name}`)
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        setProd(data);
      });
  }, []);

  return (
    <div className="bg-col4">
      <div className="h-">
        <div className="carousel w-full h-96">
          <div id="slide1" className="carousel-item relative w-full">
            <img src={car1} className="w-full" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide3" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide2" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide2" className="carousel-item relative w-full">
            <img src={car2} className="w-full" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide1" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide3" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide3" className="carousel-item relative w-full">
            <img src={car3} className="w-full" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide2" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide1" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
        </div>
      </div>

      <div>
        {prod.length ? (
          <>
            <div className="grid lg:grid-cols-3 grid-cols-1 w-4/5 gap-8 mx-auto py-16">
              {prod &&
                prod?.map((pro) => (
                  <ShowProd key={pro.name} pro={pro}></ShowProd>
                ))}
            </div>
          </>
        ) : (
          <>
            {loading ? (
              <>
              <h1 className="text-col1 text-5xl text-center py-36">
                Loading. . . Please Wait.
              </h1>
              </>
            ) : (
              <h1 className="text-col1 text-5xl text-center py-36">
                Sorry No Products are available
              </h1>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Products;
