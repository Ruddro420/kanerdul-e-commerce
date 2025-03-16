import React, { createContext, useState, useEffect } from "react";
import toast from "react-hot-toast";

export const CartContext = createContext(); // ✅ Export Context

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0); 

    useEffect(() => {
        const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
        setCart(storedCart);
    }, []);
    // Calculate total price whenever the cart updates
    useEffect(() => {
        const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
        setTotalPrice(total);
    }, [cart]);

    const addToCart = (product) => {
        let updatedCart = [...cart];
        const existingProduct = updatedCart.find(item => item.id === product.id);
        if (existingProduct) {
            existingProduct.quantity += 1;
            toast.success("Cart Updated!");
        } else {
            updatedCart.push({ ...product, quantity: 1 });
            toast.success("Product added to cart!");
        }

        setCart(updatedCart);
        localStorage.setItem("cart", JSON.stringify(updatedCart));
    };

    return (
        <CartContext.Provider value={{ cart, addToCart }}>
            {children}
        </CartContext.Provider>
    );
};
