import {Link} from 'react-router-dom'
import { formatPrice } from '../utils/format';

function ProductCard({product}) {
  return (
  <Link>
  <div className=' w-56 h-72 shadow-lg rounded-md cursor-pointer'>
    <div className='w-full h-40 flex items-center justify-center  rounded-md'>
    <img src={product.image} alt={product.name} className='max-h-full object-contain' />
  </div>
  <h3 className='mt-3  font-semibold text-base items-center text-center'>{product.name}</h3>
    <p className='text-sm text-gray-600 text-center mt-1'>₱{formatPrice(product.price)}</p>
    <p className='items-center text-center mt-1'>{product.category}</p>
    <p className='items-center text-center font-semibold'>View Details</p>
  </div>
  </Link>
  )
}

export default ProductCard
