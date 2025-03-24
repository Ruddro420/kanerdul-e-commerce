import React, { createContext, useState, useEffect } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export const CartContext = createContext(); // ✅ Export Context

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const [user, setUser] = useState(null);
    const [order, setOrder] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
        setCart(storedCart);
    }, []);
    // / ✅ Calculate total price whenever the cart updates
    useEffect(() => {
        const total = cart.reduce((sum, item) => sum + item.selling_price * item.quantity, 0);
        setTotalPrice(total);
    }, [cart]);
    // ✅ Remove item from cart
    const removeFromCart = (id) => {
        const updatedCart = cart.filter(item => item.id !== id);
        setCart(updatedCart);
        localStorage.setItem("cart", JSON.stringify(updatedCart));
    };

    // add to cart
    const addToCart = (product, selectedColor) => {
        let updatedCart = [...cart];
        const existingProduct = updatedCart.find(item => item.id === product.id);
        if (existingProduct) {
            existingProduct.quantity += 1;
            // toast.success("Cart Updated!");
        } else {
            updatedCart.push({ ...product, quantity: 1, selectedColor });
            // toast.success("Product added to cart!");
        }

        setCart(updatedCart);
        localStorage.setItem("cart", JSON.stringify(updatedCart));
    };

    // add Order
    const orderNow = (product,selectedColor) => {
        let updatedCart = [...cart];
        const existingProduct = updatedCart.find(item => item.id === product.id);
        if (existingProduct) {
            existingProduct.quantity += 1;
            toast.success("Cart Updated!");
            navigate('/checkout')
        } else {
            updatedCart.push({ ...product, quantity: 1, selectedColor });
            toast.success("Product added to cart!");
            navigate('/checkout')
        }

        setCart(updatedCart);
        localStorage.setItem("cart", JSON.stringify(updatedCart));
    };

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
    // user login or not
    useEffect(() => {
        const user = JSON.parse(localStorage.getItem("user"));
        setUser(user);
    }, []);
    // user login or not
    useEffect(() => {
        const order = JSON.parse(localStorage.getItem("order"));
        setOrder(order);
    }, []);


    return (
        <CartContext.Provider value={{ order, setCart, setUser, cart, addToCart, totalPrice, removeFromCart, increaseQuantity, decreaseQuantity, orderNow, user }}>
            {children}
        </CartContext.Provider>
    );
};
