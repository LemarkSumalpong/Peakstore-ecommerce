import { ShoppingCart } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { use } from 'react';

function Product() {

  const {id} =useParams();
  const dispatch = useDispatch();

  const product = useSelector((state) => {
    state.product.items.find((p) => p.id === parseInt(id));
  });

  if(!product){
    return <div className='container mx-auto px-4 py-8'>
      <div className='text-center'>
        <h2 className='text-5xl font-bold'Product Not Found></h2>
        <Link to='/' className=' text-2xl font-bold text-blue-600 hover:text-blue-800'>Return To Home</Link>

      </div>
    </div>
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div>
        <Link to="/" className="mb-8 inline-block">
          Back
        </Link>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="shadow-md p-4 rounded w-[600px]">
            <img src={''} alt="" />
          </div>
          <div>
            <h1 className="text-3xl font-bold mb-4">Product Name</h1>
            <p className="text-gray-600 mb-6">product description </p>
            <div className="mb-6">
              <span className="text-3xl font-bold ">Product Price</span>
            </div>
            <div className="mb-6">
              <h3 className="font-semibold mb-2 ">Category</h3>
              <span className=" font-semibold mb-2">Category</span>
            </div>
            <button className='w-full md:w-auto bg-orange-500 text-white font-semibold px-8 py-3 rounded-md flex items-center justify-center gap-2 hover:bg-orange-600'>
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
