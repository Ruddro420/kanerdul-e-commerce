import { createContext, useState } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState(null);
    const [loading, setLoading] = useState(true);
    cost[userLoggedIn, setUserLoggedIn] = useState(false);

}