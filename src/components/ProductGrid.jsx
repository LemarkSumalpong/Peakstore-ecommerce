import Product from '../../Product';
import ProductCard from './ProductCard';

function ProductGrid() {
  console.log(Product);
  return (
   <div className='grid grid-col-1 md:grid-cols2 lg:grid-cols-3 xl:grid-cols-4 '>
    {Product.map ((product) => {
      return <ProductCard/>
    })}
   </div>
  )
}

export default ProductGrid
