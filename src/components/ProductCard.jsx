import { Link } from 'react-router-dom';
import { formatPrice } from '../utils/format';

function ProductCard({ product }) {
  return (
    <Link to={`/product/${product.id}`}>
      <div className="w-full max-w-xs sm:max-w-sm md:max-w-[14rem] lg:max-w-[16rem] h-auto shadow-lg rounded-md cursor-pointer flex flex-col">
        {/* Image */}
        <div className="w-full h-40 flex items-center justify-center rounded-t-md bg-white">
          <img
            src={product.image}
            alt={product.name}
            className="max-h-full object-contain"
          />
        </div>

        {/* Details */}
        <div className="p-4 flex flex-col justify-between flex-1">
          <h3 className="mt-2 text-sm font-medium line-clamp-2 h-10 text-center">
            {product.name}
          </h3>

          <div className="flex justify-between items-center mt-4">
            <p className="text-yellow-700 font-semibold">
              ₱{formatPrice(product.price)}
            </p>

            <button className="px-2 py-1 text-xs sm:text-sm bg-orange-500 text-white rounded-md hover:bg-orange-600 transition shadow-md">
              View Details
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default ProductCard;
