import ProductGrid from "../components/ProductGrid";

const Categories = [
  'ALL',
  'Mobile Phones & Tablets',
  'Laptops & Computers',
  'Audio & Wearables',
  'Gaming Gears',
  'Smart Home',
  'Accessories',
];

function Home() {
  return (
    <div>
      <div className="bg"></div>
      <div className="container mx-auto my-10 px-4">
        <div className="flex gap-4 overflow-x-auto srollbar-hide">
          {Categories.map((category) =>{
            return (
              <button className="bg-gray-300 py-2 px-4 rounded-md text-black  active:scale-105 hover:bg-zinc-400 transition-all ease-in" key={category}>
            {category}
          </button>
            )
          })}
        </div>
        <ProductGrid />
      </div>
    </div>
  );
}

export default Home;
