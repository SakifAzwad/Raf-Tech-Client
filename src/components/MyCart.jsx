import { useContext, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthCon } from "./Provider/AuthProv";
import ShowCart from "./ShowCart";


const MyCart = () => {
 const {user}=useContext(AuthCon);
    const datas = useLoaderData();
    const xs = datas.filter((x) => x.email === user.email);
    const [alldata, setalldata] = useState(xs);
   
    

    return (
        <div>
            {
                <div className="grid lg:grid-cols-3 grid-cols-1 md:mx-auto md:w-4/5 gap-8 ml-4 py-16">
                {alldata &&
                  alldata?.map((pro) => (
                    <ShowCart key={pro._id} pro={pro} alldata={alldata} setalldata={setalldata}></ShowCart>
                  ))}
              </div>
            }
        </div>
    );
};

export default MyCart;