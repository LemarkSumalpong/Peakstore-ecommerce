import { Link } from 'react-router-dom';
import { formatPrice } from '../utils/format';

function ProductCard({ product }) {
  console.log(product.id);
  return (
    <Link to={`/product/${product.id}`}>
      <div className=" w-56 h-72 shadow-lg rounded-md cursor-pointer">
        <div className="w-full h-40 flex items-center justify-center  rounded-md">
          <img
            src={product.image}
            alt={product.name}
            className="max-h-full object-contain"
          />
        </div>
        <div className='p-4'>
          <h3 className="mt-3  text-sm font-medium line-clamp-2 items-center text-center">
            {product.name}
          </h3>
          <div className="flex justify-between  mt-4 items-center">
            <p className='text-yellow-700 font-semibold'>₱{formatPrice(product.price)}</p>
  
            <p className='px-2 border-1 bg-orange-500 text-white rounded-md hover:bg-orange-600 transition shadow-md'>View Details</p>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default ProductCard;
