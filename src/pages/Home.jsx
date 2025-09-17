import { useDispatch, useSelector } from 'react-redux';
import Footer from '../components/Footer';
import ProductGrid from '../components/ProductGrid';

const Categories = [
  'All',
  'Mobile Phones & Tablets',
  'Laptops & Computers',
  'Audio & Wearables',
  'Gaming Console',
  'Smart Home',
  'Accessories',
];

function Home() {
  const dispatch = useDispatch();
  
  const setSelectedCategory = useSelector(
    (state) => state.products?.setSelectedCategory || 'All'
  );

  const handleCategoryClick = (category) => {
    dispatch({ type: 'products/setSelectedCategory', payload: category });
  };

  return (
    <div>
      <div className="bg"></div>
      <div className="container mx-auto my-10 px-4">
        <div className="flex gap-3 overflow-x-auto scrollbar-hide py-2">
          {Categories.map((category) => {
            const isActive = setSelectedCategory === category;
            return (
              <button
                key={category}
                onClick={() => handleCategoryClick(category)}
                className={`
                  flex-shrink-0 px-4 py-2 rounded-full text-sm sm:text-base font-medium transition-all
                  ${isActive ? 'bg-orange-500 text-white' : 'bg-gray-200 text-gray-800 hover:bg-gray-300'}
                `}
              >
                {category}
              </button>
            );
          })}
        </div>
        <div className="mt-6">
          <ProductGrid />
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Home;
