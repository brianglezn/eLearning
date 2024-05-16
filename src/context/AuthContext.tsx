import { createContext, useState, ReactNode } from 'react';

export interface AuthContextType {
    authToken: string | null;
    login: (token: string) => void;
    logout: () => void;
}

export const AuthContext = createContext<AuthContextType>({
    authToken: null,
    login: () => { },
    logout: () => { },
});

interface AuthProviderProps {
    children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
    const [authToken, setAuthToken] = useState<string | null>(localStorage.getItem("token"));

    const login = (token: string) => {
        console.log('Saving token:', token);
        localStorage.setItem("token", token);
        setAuthToken(token);
    };

    const logout = () => {
        localStorage.removeItem("token");
        setAuthToken(null);
    };

    return (
        <AuthContext.Provider value={{ authToken, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
