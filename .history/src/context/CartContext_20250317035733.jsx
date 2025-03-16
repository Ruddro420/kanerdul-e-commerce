import { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);

    // Load cart from localStorage
    useEffect(() => {
        const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
        setCart(storedCart);
    }, []);

    // Calculate total price whenever the cart updates
    useEffect(() => {
        const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
        setTotalPrice(parseFloat(total.toFixed(2))); // ✅ Ensure 2 decimal places
    }, [cart]);

    // ✅ Increase item quantity
    const increaseQuantity = (id) => {
        const updatedCart = cart.map(item =>
            item.id === id ? { ...item, quantity: item.quantity + 1 } : item
        );
        setCart(updatedCart);
        localStorage.setItem("cart", JSON.stringify(updatedCart));
    };

    // ✅ Decrease item quantity
    const decreaseQuantity = (id) => {
        const updatedCart = cart
            .map(item => item.id === id ? { ...item, quantity: item.quantity - 1 } : item)
            .filter(item => item.quantity > 0); // Remove if quantity reaches 0

        setCart(updatedCart);
        localStorage.setItem("cart", JSON.stringify(updatedCart));
    };

    // ✅ Remove item from cart
    const removeFromCart = (id) => {
        const updatedCart = cart.filter(item => item.id !== id);
        setCart(updatedCart);
        localStorage.setItem("cart", JSON.stringify(updatedCart));
    };

    return (
        <CartContext.Provider value={{ cart, totalPrice, increaseQuantity, decreaseQuantity, removeFromCart }}>
            {children}
        </CartContext.Provider>
    );
};
