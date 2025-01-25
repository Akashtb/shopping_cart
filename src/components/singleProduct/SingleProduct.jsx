import { Button, Card } from 'react-bootstrap';
import './singleProduct.css';
import Rating from '../rating/Rating';

const SingleProduct = ({product}) => {
  console.log(product);
  
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
            <Rating rating={product.ratings}></Rating>
            <div className="buttons">
            <Button disabled={!product.inStock}>{!product.inStock ? "Out of stock" :"Add to Cart"}</Button>
            <Button variant="danger">Remove from Cart</Button>
            </div>
          </Card.Body>
        </Card>

    </div>
  );
};

export default SingleProduct;