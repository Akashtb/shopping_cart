import './singleProduct.css';

const SingleProduct = ({product}) => {
  return (
    <div className='singleProduct'>
        <span className="title">{product.name}</span>
    </div>
  );
};

export default SingleProduct;