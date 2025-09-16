function Cart() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-boldmb-8">Shopping Cart</h2>
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
          <button className="border-orange-500 bg-orange-500 shadow-md px-2 py-1 rounded-md text-white font-semibold uppercase" >Checkout</button>
         </div>
         </div>
      </div>
    </div>
  );
}

export default Cart;
