import { Link, useNavigate } from "react-router-dom";
import { HiOutlineUser, HiOutlineShoppingCart } from "react-icons/hi";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const UserActions = () => {
  const navigate = useNavigate();
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));


  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cartItems")) || [];
    setCartCount(storedCart.length);
  }, []);

  c

  const handleLogout = () => {
    localStorage.removeItem("currentUser");
    navigate("/login");
  };

  return (
    <div className="flex items-center gap-4 text-sm">
      <Link
        to="/cartpage"
        className="relative flex items-center hover:text-orange-500"
        aria-label="View cart"
      >
        <HiOutlineShoppingCart className="text-stone-800 text-3xl" />
        {cartCount > 0 && (
          <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
            {cartCount}
          </span>
        )}
      </Link>

      {currentUser?.loggedIn ? (
        <>
          <div className="flex items-center gap-2 hover:bg-stone-100 p-2 rounded-full cursor-pointer">
            <HiOutlineUser className="text-stone-900 text-2xl" />
            <span className="text-sm font-medium">
              {currentUser.phone || "User"}
            </span>
          </div>

          <button
            onClick={handleLogout}
            className="bg-red-700 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-full transition-colors"
          >
            Logout
          </button>
        </>
      ) : (
   
        <div className="relative group">
          <div className="flex items-center gap-2 hover:bg-stone-100 p-2 rounded-full cursor-pointer">
            <HiOutlineUser className="text-stone-900 text-xl" />
            <span>Account</span>
          </div>

          <div className="absolute top-full left-0 mt-2 w-48 bg-white border rounded-lg shadow-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-20">
            <Link to="/login" className="block px-4 py-2 text-sm text-gray-700 hover:bg-stone-100 uppercase">
              Login
            </Link>
            <Link to="/signup" className="block px-4 py-2 text-sm text-gray-700 hover:bg-stone-100 uppercase">
              Sign Up
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserActions;