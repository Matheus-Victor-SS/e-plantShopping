import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, updateQuantity } from './CartSlice';
import './CartItem.css';

const CartItem = ({ onContinueShopping }) => {
  const cart = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  // Calculate total amount for all products in the cart
  const calculateTotalAmount = () => {
    let total = 0;
    cart.forEach(item => {
      total += parseFloat(item.cost.substring(1)) * item.quantity;
    });
    return total.toFixed(2);
  };

  const handleContinueShopping = (e) => {
    onContinueShopping(e);
  };

  const handleCheckoutShopping = (e) => {
    alert('🛍️ Checkout functionality will be available soon!');
  };

  const handleIncrement = (item) => {
    dispatch(updateQuantity({ name: item.name, quantity: item.quantity + 1 }));
  };

  const handleDecrement = (item) => {
    if (item.quantity > 1) {
      dispatch(updateQuantity({ name: item.name, quantity: item.quantity - 1 }));
    } else {
      dispatch(removeItem(item.name));
    }
  };

  const handleRemove = (item) => {
    if (window.confirm(`Remove ${item.name} from cart?`)) {
      dispatch(removeItem(item.name));
    }
  };

  const calculateTotalCost = (item) => {
    return (parseFloat(item.cost.substring(1)) * item.quantity).toFixed(2);
  };

  if (cart.length === 0) {
    return (
      <div className="cart-container">
        <div className="empty-cart">
          <div className="empty-cart-icon">🛒</div>
          <h3>Your cart is empty</h3>
          <p>Looks like you haven't added any plants yet</p>
          <button className="continue-shopping-btn" onClick={handleContinueShopping}>
            Continue Shopping
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="cart-container">
      <div className="cart-header">
        <h2>Shopping Cart</h2>
        <div className="cart-summary">
          <span>Total Amount:</span>
          <strong>${calculateTotalAmount()}</strong>
        </div>
      </div>

      <div className="cart-items-list">
        {cart.map(item => (
          <div className="cart-item" key={item.name}>
            <img className="cart-item-image" src={item.image} alt={item.name} />
            
            <div className="cart-item-details">
              <div className="cart-item-info">
                <h3 className="cart-item-name">{item.name}</h3>
                <span className="cart-item-cost">{item.cost}</span>
              </div>
              
              <div className="cart-item-quantity">
                <button 
                  className="quantity-btn quantity-dec" 
                  onClick={() => handleDecrement(item)}
                  aria-label="Decrease quantity"
                >
                  −
                </button>
                <span className="quantity-value">{item.quantity}</span>
                <button 
                  className="quantity-btn quantity-inc" 
                  onClick={() => handleIncrement(item)}
                  aria-label="Increase quantity"
                >
                  +
                </button>
              </div>
              
              <div className="cart-item-total">
                <span>Total:</span>
                <strong>${calculateTotalCost(item)}</strong>
              </div>
              
              <button className="delete-btn" onClick={() => handleRemove(item)}>
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="cart-footer">
        <div className="cart-grand-total">
          <span>Grand Total:</span>
          <strong>${calculateTotalAmount()}</strong>
        </div>
        
        <div className="cart-actions">
          <button className="continue-shopping-btn" onClick={handleContinueShopping}>
            ← Continue Shopping
          </button>
          <button className="checkout-btn" onClick={handleCheckoutShopping}>
            Checkout →
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;