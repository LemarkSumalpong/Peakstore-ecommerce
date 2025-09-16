import {Link} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

function Cart() {

  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity, 
    0
  );

  if(cartItems.length === 0){
    return <div className="container mx-auto px-4 py-8 ">
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-4">Your Cart is Empty</h2>
        <p className="text-gray-600 mb-4">Looks like you haven't added anything to your cart yet.
        </p>
        <Link to="/" className="inline-block bg-blue-500 shadow-md px-6 py-2 rounded-lg text-white font-semibold hover:bg-blue-600 uppercase">Start Shopping</Link>
      </div>
    </div>
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-8">Shopping Cart</h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 shadow-md p-4 rounded-md"></div>
        <div className="lg:col-span-1">
          <div className="shadow-md bg-white p-6 rounded-md">
            <h3 className="text-xl font-bold mb-4">Order Summary</h3>
            <div className="space-y-2 mb-4 ">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>Total Amount</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping Fee</span>
                <span>Free</span>
              </div>
              <div className="border-t pt-2 font-bold flex justify-between ">
                <span>Total</span>
                <span>Total Amount</span>
              </div>
            </div>
            <button className="border-orange-500 bg-orange-500 hover:bg-orange-600 shadow-md px-2 py-1 rounded-md text-white font-semibold uppercase cursor-pointer">
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
