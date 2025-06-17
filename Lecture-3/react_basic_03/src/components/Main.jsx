import Product1 from "./Product1";
import Product2 from "./Product2";

function Main({product1 , product2}) {
    console.log(product1 , product2);
    
  return (
    <div>
        <Product1 product1={product1}/>
        <Product2 product2={product2}/>
    </div>
  )
}

export default Main