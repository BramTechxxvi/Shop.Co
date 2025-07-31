import React from 'react'

const CartItem = ({item, onIncrese, onDecrease, onRemove}) => {
  return (
    <div>

    </div>
  )
}

const CartItem = ({ item, onIncrease, onDecrease, onRemove }) => {
  return (
    <div className="flex items-center justify-between bg-stone-100 p-4 rounded-lg mb-3">
      {/* Product Image */}
      <img
        src={item.image}
        alt={item.title}
        className="w-16 h-16 object-contain rounded-md"
      />

      {/* Product Details */}
      <div className="flex-1 px-4">
        <h3 className="font-semibold text-gray-800">{item.title}</h3>
        <p className="text-gray-600 text-sm">${item.price}</p>
      </div>

      {/* Quantity Controls */}
      <div className="flex items-center gap-2">
        <button
          className="px-2 bg-gray-300 rounded-full"
          onClick={() => onDecrease(item.id)}
        >
          -
        </button>
        <span className="font-medium">{item.quantity}</span>
        <button
          className="px-2 bg-gray-300 rounded-full"
          onClick={() => onIncrease(item.id)}
        >
          +
        </button>
      </div>

      {/* Remove Button */}
      <button
        className="ml-4 text-red-500 hover:text-red-700"
        onClick={() => onRemove(item.id)}
      >
        ✕
      </button>
    </div>
  );
};

export default CartItem;
