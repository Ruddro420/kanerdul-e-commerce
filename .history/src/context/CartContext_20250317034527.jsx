import React, { createContext, useState, useEffect } from "react";
import toast from "react-hot-toast";

export const CartContext = createContext(); // ✅ Export Context

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    useEffect(() => {
        const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
        setCart(storedCart);
    }, []);

    const addToCart = (product) => {
        let updatedCart = [...cart];
        const existingProduct = updatedCart.find(item => item.id === product.id);
        if (existingProduct) {
            existingProduct.quantity += 1;
            toast.success("Product added to cart!");
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
