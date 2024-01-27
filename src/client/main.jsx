import "./index.css";
import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";
const router = createRouter({ routeTree,
context: {authStatus: undefined} });

export const AuthContext = React.createContext(null);

const App = () => {
  const [authStatus, setAuthStatus] = useState(false);

  useEffect(() => {
    const checkAuthentication = async () => {
      try {
        const response = await fetch("/api/auth/check");
        const data = await response.json();

        // Update React state with authentication status
        setAuthStatus(data.user);
      } catch (error) {
        console.error("Error checking authentication:", error);
      }
    };

    checkAuthentication();
  }, []);

  return (
    <React.StrictMode>
      <AuthContext.Provider
        value={{ authStatus: authStatus, setAuthStatus: setAuthStatus }}
      >
        <RouterProvider router={router} context={{authStatus}}></RouterProvider>
      </AuthContext.Provider>
    </React.StrictMode>
  );
};

const rootElement = document.getElementById("root");
if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(<App />);
}
