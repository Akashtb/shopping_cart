import { Button, Card } from 'react-bootstrap';
import './singleProduct.css';
import Rating from '../rating/Rating';
import { CartState } from '../../context/Context';

const SingleProduct = ({product}) => {
  const {
    state:{cart},
    dispatch
  } = CartState();

  
  
  return (
    <div className='singleProduct'>
        <Card>
          <Card.Img variant="top" src={product?.image} alt={product?.name} />
          <Card.Body>
            <Card.Title>{product?.name}</Card.Title>
            <Card.Subtitle style={{padding:10}}>${product?.price}</Card.Subtitle>
            {product?.fastDelivery ? (
              <div>Fast Delivery</div>
            ) : (
              <div>4 days minimum</div>
            )}
            <Rating rating={product?.ratings}></Rating>
            <div className="buttons">
              {
                cart.some((p)=>p.id === product.id) ? (
                  <Button variant="danger" onClick={()=>{
                    dispatch({
                      type:"REMOVE_FROM_CART",
                      payload:product
                    })
                  }}>Remove from Cart</Button>
                ):(
                  <Button disabled={!product?.inStock} onClick={()=>{
                    dispatch({
                      type:"ADD_TO_CART",
                      payload:product
                    })
                  }}>{!product?.inStock ? "Out of stock" :"Add to Cart"}</Button>
                )
              }
            </div>
          </Card.Body>
        </Card>

    </div>
  );
};

export default SingleProduct;