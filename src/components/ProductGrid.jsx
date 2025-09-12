import Product from '../../Product';
import ProductCard from './ProductCard';

function ProductGrid() {
  console.log(Product);
  return (
   <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4'>
    {Product.map ((product) => {
      return <ProductCard key={product.id} product={product}/>
    })}
   </div>
  )
}

export default ProductGrid
