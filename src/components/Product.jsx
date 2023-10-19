/* eslint-disable no-unused-vars */
import { useLoaderData, useParams } from "react-router-dom";
import ShowAProd from "./ShowAProd";


const Product = () => {
    const {id}=useParams();
    const datas=useLoaderData();
    const data=datas.find(data=>data._id===id)
    return (
        <div>
            <ShowAProd data={data}></ShowAProd>
        </div>
    );
};

export default Product;