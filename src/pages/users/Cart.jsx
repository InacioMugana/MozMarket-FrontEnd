import { useContext, useEffect } from "react";
import { AppContext } from "../../components/context/AppContext";
import { FaTrash } from "react-icons/fa";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export function Cart() {
  const { addCart, setAddCart } = useContext(AppContext);

  const totalItems = addCart.reduce((acc, item) => acc + item.quantity, 0);
  const total = addCart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const deleteItem = (id) => {
    const itemToRemove = addCart.find((e) => e.id === id);
    const data = addCart.filter((e) => e.id !== id);
    setAddCart(data);
    toast.info(`Removed ${itemToRemove.name} from the cart`);
  };

  const addItem = (item) => {
    const existingItem = addCart.find((e) => e.id === item.id);
    if (existingItem) {
      const updatedCart = addCart.map((e) =>
        e.id === item.id ? { ...e, quantity: e.quantity + 1 } : e
      );
      setAddCart(updatedCart);
    } else {
      setAddCart([...addCart, { ...item, quantity: 1 }]);
    }
    toast.success(`Added ${item.name} to the cart`);
  };

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(addCart));
  }, [addCart]);

  return (
    <div className="w-full max-w-2xl mx-auto px-4 md:px-0 ">
      <div className="grid gap-8">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-bold">Your Cart</h1>
          <div className="text-lg font-semibold">Items: {totalItems}</div>
        </div>
        <div className="grid gap-4">
          <div className="grid gap-4">
            {addCart.map((item) => (
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
                <button
                  onClick={() => deleteItem(item.id)}
                  className="text-red-600 hover:text-red-800 focus:outline-none"
                >
                  <FaTrash size={20} />
                </button>
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
            <button className="bg-blue-600 text-white px-4 py-2 rounded">
              Continue Shopping
            </button>
            <button className="bg-blue-500 text-white px-4 py-2 rounded">
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}
