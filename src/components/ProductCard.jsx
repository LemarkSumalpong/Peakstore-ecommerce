import { Link } from 'react-router-dom';
import { formatPrice } from '../utils/format';

function ProductCard({ product }) {
  return (
    <Link>
      <div className=" w-56 h-72 shadow-lg rounded-md cursor-pointer">
        <div className="w-full h-40 flex items-center justify-center  rounded-md">
          <img
            src={product.image}
            alt={product.name}
            className="max-h-full object-contain"
          />
        </div>
        <div className='p-4'>
          <h3 className="mt-3  font-semibold text-base items-center text-center">
            {product.name}
          </h3>
          <div className="flex justify-between  mt-4">
            <p className='text-yellow-700 font-semibold'>₱{formatPrice(product.price)}</p>
            <p>View Details</p>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default ProductCard;
