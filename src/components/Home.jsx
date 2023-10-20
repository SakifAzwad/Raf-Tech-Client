import { useLoaderData } from "react-router-dom";
import Data from "./Data";
import useRating from "./UserRating";
import ReviewSection from "./ReviewSection";

const Home = () => {
  const datas = useLoaderData();
  const [reviews]=useRating();

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
            <h1 className="mb-5 text-col3 text-5xl md:text-8xl font-extrabold">
              Raf Tech
            </h1>
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
        <h1 className="text-center text-5xl pt-10 text-col1 font-bold">
          Explore Our Featured Brands
        </h1>
      </div>
      <div>
        <Data datas={datas}></Data>
      </div>
      <div className="bg-col4">
        <h1 className="text-center text-4xl text-col1 bg-col4 py-12 font-bold">
          Frequently Asked Questions{" "}
        </h1>
        <div className="text-center  text-col4 px-12 bg-col4">
          <div className="collapse collapse-plus my-4 bg-col1 ">
          <input type="radio" name="my-accordion-3" checked="checked" /> 
            <div className="collapse-title text-xl font-medium">
            How do I place an order on Raf Tech?
            </div>
            <div className="collapse-content">
              <p>To place an order on Raf Tech, simply browse the products, select the item you want, and click the Add to Cart button. Once youve added all the items you wish to purchase, click on the shopping cart icon, review your items, and proceed to the checkout process to complete your order.</p>
            </div>
          </div>
          <div className="collapse collapse-plus my-4 bg-col1 ">
          <input type="radio" name="my-accordion-3"  /> 
            <div className="collapse-title text-xl font-medium">
            What payment methods are accepted on Raf Tech?
            </div>
            <div className="collapse-content">
              <p>Raf Tech accepts a variety of payment methods, including credit/debit cards, PayPal, and other secure online payment options. During the checkout process, you can choose your preferred payment method.</p>
            </div>
          </div>
          <div className="collapse collapse-plus mt-4 bg-col1 ">
          <input type="radio" name="my-accordion-3"  /> 
            <div className="collapse-title text-xl font-medium">
            What is Raf Tech`s return and refund policy?
            </div>
            <div className="collapse-content">
              <p>Raf Tech offers a hassle-free return and refund policy. If youre not satisfied with your purchase, you can return the item within a specified period (usually 30 days) for a refund or exchange. Please review our Return Policy page for detailed information on the return process and any associated fees.</p>
            </div>
          </div>
        </div>
      </div>
      <div  className="bg-col4 pt-4">
            <h1 className="text-center text-5xl font-bold text-col1 pt-4">Customer Reviews</h1>
        </div>
      <div className="bg-col4" >
            <ReviewSection reviews={reviews}></ReviewSection>
        </div>
    </div>
  );
};

export default Home;
