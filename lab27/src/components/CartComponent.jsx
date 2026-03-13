import { useState } from 'react';
import { useCart } from '../context/CartContext';
import './CartComponent.css';

const PRODUCTS = [
  { id: 1, name: 'Laptop', price: 999.99, description: 'High-performance laptop' },
  { id: 2, name: 'Phone', price: 699.99, description: 'Latest smartphone' },
  { id: 3, name: 'Headphones', price: 199.99, description: 'Wireless headphones' },
  { id: 4, name: 'Tablet', price: 399.99, description: 'Portable tablet device' },
  { id: 5, name: 'Watch', price: 299.99, description: 'Smart watch' },
  { id: 6, name: 'Camera', price: 799.99, description: 'Digital camera' }
];

export function CartComponent() {
  const { cartItems, totalPrice, addToCart, removeFromCart, updateQuantity, clearCart, getCartCount } = useCart();
  const [showCart, setShowCart] = useState(false);

  return (
    <div className="cart-container">
      <div className="products-section">
        <h2>Products</h2>
        <div className="products-grid">
          {PRODUCTS.map(product => (
            <div key={product.id} className="product-card">
              <h3>{product.name}</h3>
              <p className="description">{product.description}</p>
              <p className="price">${product.price.toFixed(2)}</p>
              <button 
                onClick={() => addToCart(product)}
                className="add-to-cart-btn"
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className="cart-section">
        <div className="cart-header">
          <h2>Shopping Cart</h2>
          <button 
            onClick={() => setShowCart(!showCart)}
            className="toggle-cart-btn"
          >
            {showCart ? 'Hide' : 'Show'} Cart ({getCartCount()} items)
          </button>
        </div>

        {showCart && (
          <div className="cart-details">
            {cartItems.length === 0 ? (
              <p className="empty-cart">Your cart is empty</p>
            ) : (
              <>
                <div className="cart-items">
                  {cartItems.map(item => (
                    <div key={item.id} className="cart-item">
                      <div className="item-info">
                        <h4>{item.name}</h4>
                        <p>${item.price.toFixed(2)}</p>
                      </div>
                      <div className="item-controls">
                        <button 
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="qty-btn"
                        >
                          -
                        </button>
                        <span className="quantity">{item.quantity}</span>
                        <button 
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="qty-btn"
                        >
                          +
                        </button>
                      </div>
                      <div className="item-total">
                        <p>${(item.price * item.quantity).toFixed(2)}</p>
                      </div>
                      <button 
                        onClick={() => removeFromCart(item.id)}
                        className="remove-btn"
                      >
                        Remove
                      </button>
                    </div>
                  ))}
                </div>
                <div className="cart-summary">
                  <h3>Total: ${totalPrice.toFixed(2)}</h3>
                  <button onClick={clearCart} className="clear-cart-btn">
                    Clear Cart
                  </button>
                </div>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
