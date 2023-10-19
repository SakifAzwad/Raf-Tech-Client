/* eslint-disable react/prop-types */
import BrandCard from "./BrandCard";


const Data = ({datas}) => {
    return (
        <div>
            <div className="bg-col4">
            <div className="grid lg:grid-cols-3 grid-cols-1 w-4/5 gap-8 mx-auto py-16">
            {
                datas?.map((data)=>(
                    <BrandCard key={data._id} data={data}></BrandCard>
                ))
            }
            </div>
        </div>
        </div>
    );
};

export default Data;