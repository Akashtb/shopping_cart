import { CartState } from '../../../../context/Context';
import Filter from '../../../Filter/Filter';
import SingleProduct from '../../../singleProduct/SingleProduct';
import './home.css';

const Home = () => {
    const {
        state : {products}
    } = CartState()

    console.log(products);
    
  return (
    <div className='home'>
        <Filter/>
        <div className="productContainer">
            {
                products.map((product)=>{
                  return  <SingleProduct product={product} key={product.id}/>
                })
            }
        </div>
    </div>
  );
};

export default Home;