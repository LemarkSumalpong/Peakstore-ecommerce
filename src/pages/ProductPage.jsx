import { ArrowBigLeft, ChevronLeft, ShoppingCart } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { formatPrice } from '../utils/format';

function Product() {
  const { id } = useParams();
  const dispatch = useDispatch();

  const product = useSelector((state) =>
    state.product.items.find((p) => p.id === parseInt(id))
  );

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold">Product Not Found</h2>
          <Link
            to="/"
            className=" text-2xl font-bold text-blue-600 hover:text-blue-800"
          >
            Return To Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div>
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border bg-orange-400 border-gray-300 shadow-md hover:bg-orange-600  transition-colors mb-8"
        >
          <ChevronLeft size={20} className="text-white" />
          <span className="text-white ">Back to Products</span>
        </Link>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="shadow-md p-4 rounded w-[500px] h-[400px] flex justify-center items-center">
            <img
              src={product.image}
              alt={product.name}
              className="max-h-full max-w-full object-contain"
            />
          </div>
          <div>
            <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
            <p className="text-gray-600 mb-6">{product.description}</p>
            <div className="mb-6">
              <span className="text-3xl font-semibold ">
                ₱{formatPrice(product.price)}
              </span>
            </div>
            <div className="mb-6">
              <h3 className="font-bold mb-2 ">CATEGORY</h3>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm">
                {product.category}
              </span>
            </div>
            <button
              className="w-full md:w-auto bg-orange-500 text-white font-semibold px-8 py-3 rounded-md flex 
            items-center justify-center gap-2 hover:bg-orange-600"
              onClick={() =>
                dispatch({ type: 'cart/addToCart', payload: product })
              }
            >
              <ShoppingCart />
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
