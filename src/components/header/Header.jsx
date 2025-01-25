import { Badge, Button, Container, Dropdown, FormControl, Nav, Navbar } from 'react-bootstrap';
import './header.css';
import { FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { CartState } from '../../context/Context';
import { AiFillDelete } from 'react-icons/ai';

const Header = () => {
     const {
        state:{cart},
        dispatch,
        filterState : {searchQuery},
        filterDispatch
      } = CartState();


    const handleSearchChange = (e) => {
        filterDispatch({
          type: 'FILTER_BY_SEARCH',
          payload: e.target.value.toLowerCase(),
        });
      };  
  
  return (
    <Navbar bg='dark' variant='dark' style={{height:80}}> 
        <Container>
            <Navbar.Brand>
                <Link to="/">Shopping cart</Link>
            </Navbar.Brand>
            <Navbar.Text className='search'>
                <FormControl style={{width:500}} placeholder='Search a product' className='m-auto'  onChange={handleSearchChange}/>
            </Navbar.Text>
            <Nav>
                <Dropdown align="end">
                    <Dropdown.Toggle variant="success">
                    <FaShoppingCart color='white' fontSize="25px"/>
                        <Badge bg='inherit'>{cart?.length}</Badge>
                    </Dropdown.Toggle>
                    <Dropdown.Menu style={{minWidth:370}}>
                        {
                            cart.length > 0 ? (
                                <>
                                    {cart.map((p)=>( <span className='cartItem'>
                                        <img src={p.image} className='cartItemImg' alt={p.name}/>
                                        <div className='cartItemDetail'>
                                            <span>{p.name}</span>
                                            <span>$ {p.price.split(".")[0]}</span>
                                        </div>
                                        <AiFillDelete fontSize="20px"style={{cursor:'pointer', marginRight:"10px"}} onClick={()=>{
                                            dispatch({
                                                type:"REMOVE_FROM_CART",
                                                payload:p
                                            })
                                        }}/>
                                    </span>))}
                                    <Link to="/cart">
                                        <Button style={{width:"95%", margin:"0 10px"}}>Go to Cart

                                        </Button>
                                    </Link>
                                </>
                            ) : (
                                <span style={{padding:10}}>No items in the cart</span>
                            )
                        }
                        
                    </Dropdown.Menu>
                </Dropdown>
            </Nav>
        </Container>
    </Navbar>
  );
};

export default Header;