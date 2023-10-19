import { useLoaderData } from "react-router-dom";
import Data from "./Data";

const Home = () => {
  const datas = useLoaderData();

  return (
    <div>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage:
            "url(https://i.ibb.co/sVC0zZH/Pngtree-office-essentials-technology-and-gadgets-5591437.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-80"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="">
            <h1 className="mb-5 text-col3 text-5xl md:text-8xl font-extrabold">Raf Tech</h1>
            <p className="mb-5 text-col4 text-2xl md:text-5xl">
              {" "}
              Where Technology Enthusiasts Unite to Explore, Discover, and
              Experience the Latest Innovations in the World of Cutting-Edge
              Tech and Gadgets
            </p>
          </div>
        </div>
      </div>
      <div className="bg-col4">
        <h1 className="text-center text-5xl pt-10 text-col1 font-bold">Explore Our Featured Brands</h1>
      </div>
      <div>
        <Data datas={datas}></Data>
        </div>
    </div>
  );
};

export default Home;
