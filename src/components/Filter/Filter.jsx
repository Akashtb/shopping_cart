import { Button, Form } from 'react-bootstrap';
import './filter.css';
import Rating from '../rating/Rating';
import { useState } from 'react';

const Filter = () => {
    const [rating,setRating] = useState(3);


  return (
    <div className='filters'>
        <span className="title">Filter Products</span>
        <span>
            <Form.Check 
            inline
            label="Ascending"
            name="group1"
            type="radio"
            id={`inline-1`}
            />
        </span>
        <span>
            <Form.Check 
            inline
            label="Descending"
            name="group1"
            type="radio"
            id={`inline-2`}
            />
        </span>
        <span>
            <Form.Check 
            inline
            label="Include out of stock"
            name="group1"
            type="checkbox"
            id={`inline-2`}
            />
        </span>
        <span>
            <Form.Check 
            inline
            label="Fast delivery only"
            name="group1"
            type="checkbox"
            id={`inline-2`}
            />
        </span>
        <span>
            <label style={{paddingRight:10}}>Rarting:</label>
            <Rating rating={rating} onClick={(i)=>setRating(i)} style={{cursor:"pointer"}}/>
        </span>
        <Button variant='light'>Clear Filters</Button>
    </div>
  );
};

export default Filter;