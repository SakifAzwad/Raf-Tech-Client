import { useEffect, useState } from "react";


const useRating = () => {
    const [review,setData] = useState()

    useEffect(()=>{

        fetch('/reviews.json')
        .then(res=>res.json())
        .then(data => setData(data))

    },[])
    
    return [review];
};

export default useRating;