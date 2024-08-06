export function Cart() {
  const cartItems = [
    {
      id: 1,
      image: "img1",
      name: "iphone 12",
      quantity: 2,
      price: 30.0,
    },
    {
      id: 1,
      image: "img1",
      name: "iphone 12",
      quantity: 2,
      price: 30.0,
    },
    {
      id: 1,
      image: "img1",
      name: "iphone 12",
      quantity: 2,
      price: 30.0,
    },
    {
      id: 1,
      image: "img1",
      name: "iphone 12",
      quantity: 2,
      price: 30.0,
    },
  ];

  const total = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="w-full max-w-2xl mx-auto px-4 md:px-0 ">
      <div className="grid gap-8">
        <div className="grid gap-4">
          <h1 className="text-2xl font-bold">Your Cart</h1>
          <div className="grid gap-4">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="grid grid-cols-[80px_1fr_80px] items-center gap-4 border-b"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  width={80}
                  height={80}
                  className="rounded-lg object-cover"
                  style={{ aspectRatio: "80/80", objectFit: "cover" }}
                />
                <div className="grid gap-1">
                  <h3 className="font-semibold">{item.name}</h3>
                  <p className="text-sm text-muted-foreground">
                    Quantity: {item.quantity}
                  </p>
                </div>
                <div className="text-right font-semibold">
                  MT{(item.price * item.quantity).toFixed(2)}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="grid gap-4 border-t pt-4">
          <div className="flex items-center justify-between">
            <p className="text-lg font-semibold">Total</p>
            <p className="text-lg font-semibold">MT{total.toFixed(2)}</p>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <button className="bg-blue-600">Continue Shopping</button>
            <button className="bg-blue-500">Proceed to Checkout</button>
          </div>
        </div>
      </div>
    </div>
  );
}
