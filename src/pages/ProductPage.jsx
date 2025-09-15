import { Link } from 'react-router-dom';

function Product() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div>
        <Link to="/" className="mb-8 inline-block">
          Back
        </Link>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className='shadow-md p-4 rounded w-[600px]'>
            <img src={""} alt='' />
          </div>
          <div>
            <h1 className='text-3xl font-bold mb-4'>Product Name</h1>
            <p className='text-gray-600 mb-6'>product description </p>
            <div className='mb-6'>
              <span className='text-3xl font-bold '>Product Price</span>
            </div>
             <div className='mb-6'>
              <h3 className='font-semibold mb-2 '>Category</h3>
              <span className=' font-semibold mb-2'>Category</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
