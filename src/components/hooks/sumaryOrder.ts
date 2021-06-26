import { useEffect, useState } from "react";

const useSumaryOder = (products: any) => {
    const [total, setTotal] = useState(0)
    useEffect(() => {
      const result = products.reduce( ( sum:number, { price}:any) => sum + parseInt(price)  , 0)
    setTotal(result)
        return () => {
           
        }
    }, [total,setTotal,products])
    
   return [total];
}
export default useSumaryOder;