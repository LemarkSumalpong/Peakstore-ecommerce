import { useDispatch } from 'react-redux';
import Footer from '../components/Footer';
import ProductGrid from '../components/ProductGrid';

const Categories = [
  'All',
  'Mobile Phones & Tablets',
  'Laptops & Computers',
  'Audio & Wearables',
  'Gaming Gears',
  'Smart Home',
  'Accessories',
];

function Home() {

  const dispatch = useDispatch();

  const setSelectedCategory = (category) => {
    dispatch({type: 'products/setSelectedCategory', payload: category});
  }

  return (
    <div>
      <div className="bg"></div>
      <div className="container mx-auto my-10 px-4">
        <div className="flex gap-4 overflow-x-auto srollbar-hide">
          {Categories.map((category) => {
            return (
              <button
                className="bg-gray-300 py-2 px-4 rounded-md text-black  active:scale-105 hover:bg-zinc-400 transition-all ease-in"
                key={category} onClick={() => dispatch(setSelectedCategory(category))}
              >
                {category}
              </button>
            );
          })}
        </div>
        <ProductGrid />
      </div>
      <Footer />
    </div>
  );
}

export default Home;
