import { useSelector, useDispatch } from "react-redux";
import { MdDelete } from "react-icons/md";
import { removeFromCart, incrementQuantity, decrementQuantity } from "../api/cartSlice";
import { Link } from "react-router-dom";

const CartModal = ({ isOpen, onClose }) => {
  const cartItems = useSelector((state) => state.cart.cartItems || []);
  const dispatch = useDispatch();

  if (!isOpen) return null;

  const visibleItems = cartItems.slice(0, 4);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 z-50 flex items-center justify-center">
      <div className="bg-white rounded-xl shadow-lg max-w-3xl w-full max-h-[80vh] overflow-y-auto">
        <div className="flex justify-between items-center px-4 py-3 border-b">
          <h2 className="text-lg font-semibold">Cart Preview</h2>
          <button onClick={onClose} className="text-gray-600 text-xl hover:text-black">&times;</button>
        </div>

        <div className="p-4 space-y-4">
          {visibleItems.map((item) => (
            <div key={item.id} className="flex items-center gap-4 border-b pb-2">
              <img src={item.thumbnail} alt={item.title} className="w-16 h-16 object-cover rounded" />
              <div className="flex-1">
                <h3 className="font-medium">{item.title}</h3>
                <p className="text-sm text-gray-600">${item.price.toFixed(2)}</p>
                <div className="flex items-center gap-2 mt-1">
                  <button onClick={() => dispatch(decrementQuantity(item.id))} className="w-6 h-6 border rounded">−</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => dispatch(incrementQuantity(item.id))} className="w-6 h-6 border rounded">+</button>
                </div>
              </div>
              <button onClick={() => dispatch(removeFromCart(item.id))} className="text-red-600"><MdDelete /></button>
            </div>
          ))}
        </div>

        <div className="p-4 border-t text-center">
          {cartItems.length > 50 && (
            <p className="text-sm text-gray-500 mb-2">
              Only first 50 items shown
            </p>
          )}
          <Link
            to="/cartpage"
            onClick={onClose}
            className="inline-block bg-black text-white px-6 py-2 rounded-full hover:opacity-90 transition"
          >
            View All ({cartItems.length})
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CartModal;