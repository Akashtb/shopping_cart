import { CartState } from '../../../../context/Context';
import Filter from '../../../Filter/Filter';
import SingleProduct from '../../../singleProduct/SingleProduct';
import './home.css';

const Home = () => {
    const {
        state : {products},
        filterState : {byStock,byFastDelivery,byRating,sort}
    } = CartState()

  
    const transformProducts = () => {
      let sortedProducts = products;
  
      if (sort) {
        sortedProducts = sortedProducts.sort((a, b) =>
          sort === "lowToHigh" ? a.price - b.price : b.price - a.price
        );
      }
  
      if (!byStock) {
        sortedProducts = sortedProducts.filter((prod) => prod.inStock);
      }
  
      if (byFastDelivery) {
        sortedProducts = sortedProducts.filter((prod) => prod.fastDelivery);
      }
  
      if (byRating) {
        sortedProducts = sortedProducts.filter(
          (prod) => prod.ratings >= byRating
        );
      }
  
      return sortedProducts;
    };    

    const prod = transformProducts();
   
    
  return (
    <div className='home'>
        <Filter/>
        <div className="productContainer">
            {
                prod.map((product)=>{
                  return  <SingleProduct product={product} key={product.id}/>
                })
            }
        </div>
    </div>
  );
};

export default Home;