import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { formatPrice } from '../utils/format';
import { Minus, Plus, Trash2 } from 'lucide-react';
import { updateQuantity } from '../features/cart/CartSlice';

function Cart() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  if (cartItems.length === 0) {
    return (
      <div className="container mx-auto px-4 py-8 ">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Your Cart is Empty</h2>
          <p className="text-gray-600 mb-4">
            Looks like you haven't added anything to your cart yet.
          </p>
          <Link
            to="/"
            className="inline-block bg-blue-500 shadow-md px-6 py-2 rounded-lg text-white font-semibold hover:bg-blue-600 uppercase"
          >
            Start Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-8">Shopping Cart</h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 shadow-md p-4 rounded-md">
          {cartItems.map((item) => {
            return (
              <div
                key={item.id}
                className="flex items-center gap-4 py-4 border-b"
              >
                <Link to={`/product/${item.id}`}>
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-24 h-24 object-cover rounded"
                  />
                </Link>
                <div className="flex-1">
                  <Link
                    to={`/product/${item.id}`}
                    className="font-semibold hover:underline"
                  >
                    {item.name}
                  </Link>
                  <p className=" text-gray-700 font-semibold">
                    ₱{formatPrice(item.price)}
                  </p>
                  <div className="flex items-center gap-2 mt-2">
                    <div className="flex items-center border border-gray-300  rounded-md overflow-hidden">
                      <button
                        className="px-2 py-1 border-r border-gray-300 hover:bg-gray-100"
                        onClick={() =>
                          dispatch(
                            updateQuantity({
                              id: item.id,
                              quantity: Math.max(0, item.quantity - 1),
                            })
                          )
                        }
                      >
                        <Minus size={16} />
                      </button>
                      <span className="px-3 py-1 text-sm">{item.quantity}</span>
                      <button
                        className="px-2 py-1 border-l border-gray-300 hover:bg-gray-100"
                        onClick={() =>
                          dispatch(
                            updateQuantity({
                              id: item.id,
                              quantity: Math.max(0, item.quantity + 1),
                            })
                          )
                        }
                      >
                        <Plus size={16} />
                      </button>
                    </div>
                    <div
                      className="ml-4 text-red-500 hover:underline cursor-pointer"
                      onClick={() =>
                        dispatch({
                          type: `cart/removeFromCart`,
                          payload: item.id,
                        })
                      }
                    >
                      <Trash2 size={24} />
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-bold">
                    ₱{formatPrice(item.price * item.quantity)}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
        <div className="lg:col-span-1">
          <div className="shadow-md bg-white p-6 rounded-md">
            <h3 className="text-xl font-bold mb-4">Order Summary</h3>
            <div className="space-y-2 mb-4 ">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>₱{formatPrice(total)}</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping Fee</span>
                <span>₱0.00</span>
              </div>
              <div className="border-t pt-2 font-bold flex justify-between ">
                <span>Total</span>
                <span className="font-semibold">₱{formatPrice(total)}</span>
              </div>
            </div>
            <button className="w-full bg-orange-500 hover:bg-orange-600 shadow-md px-2 py-2 rounded-md text-white font-semibold uppercase cursor-pointer">
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
