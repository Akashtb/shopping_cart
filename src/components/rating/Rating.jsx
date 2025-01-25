import { AiFillStar } from 'react-icons/ai';
import './rating.css';

const Rating = ({ rating, onClick, style }) => {
  return (
    <div className="rating">
      {Array.from({ length: 5 }).map((_, i) => (
        <span
          key={i}
          onClick={() => onClick(i+1)}
          style={style}
        >
          {rating > i ? (
            <AiFillStar fontSize="15px" />
          ) : (
            <AiFillStar fontSize="15px" style={{ color: "lightgray" }} />
          )}
        </span>
      ))}
    </div>
  );
};

export default Rating;
