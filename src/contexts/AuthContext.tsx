import React, { createContext, useState, useContext, useEffect } from 'react';

// Define the User interface based on your actual user data structure
interface User {
  id: number;
  username: string;
  name: string;
  role: 'admin' | 'owner' | 'carer';
}

// Define the shape of the AuthContext
interface AuthContextType {
  isAuthenticated: boolean;
  user: User | null;
  login: (username: string, password: string) => Promise<boolean>;
  logout: () => void;
  loading: boolean;
  switchUser: (username: string) => Promise<boolean>;
}

// Create the AuthContext
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Create the AuthProvider component
export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check for user in sessionStorage on initial load
    try {
      const storedUser = sessionStorage.getItem('currentUser');
      if (storedUser) {
        setUser(JSON.parse(storedUser));
      }
    } catch (error) {
      console.error("Failed to parse user from sessionStorage", error);
      sessionStorage.removeItem('currentUser');
    }
    setLoading(false);
  }, []);

  const login = async (username: string, password: string): Promise<boolean> => {
    setLoading(true);
    // Mock authentication for the "test" user
    if (username === 'mauro' && password === '123456') {
      const mockUser: User = {
        id: 1,
        username: 'mauro',
        name: 'Mauro (Demo)',
        role: 'owner',
      };
      sessionStorage.setItem('currentUser', JSON.stringify(mockUser));
      setUser(mockUser);
      setLoading(false);
      return true;
    }

    // In a real app, you would make an API call to your backend
    // For this mock, any other credentials will fail
    setLoading(false);
    return false;
  };

  const logout = () => {
    sessionStorage.removeItem('currentUser');
    setUser(null);
  };

  const value = {
    isAuthenticated: !!user,
    user,
    login,
    logout,
    loading,
    switchUser: async (username: string) => { 
      console.log(`Switching to ${username} is not supported in demo.`); 
      return false; 
    },
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

// Create a custom hook to use the AuthContext
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
