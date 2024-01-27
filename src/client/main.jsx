import "./index.css";
import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";
import WorkoutTypeCard from "./components/WorkoutTypeCard"; 
const router = createRouter({ routeTree });

const App = () => {
  const [authStatus, setAuthStatus] = useState(null);

  useEffect(() => {
    const checkAuthentication = async () => {
      try {
        const response = await fetch('/api/auth/check'); 
        const data = await response.json();

        // Update React state with authentication status
        setAuthStatus(data.isAuthenticated);
      } catch (error) {
        console.error('Error checking authentication:', error);
      }
    };

    checkAuthentication();
  }, []);

  if (authStatus === null || authStatus === false) {
    return (<div>
      <a href="/login/google/callback">Login with Google</a>
    </div>)
  } else {
    console.log(authStatus);
  }

  return (
    <React.StrictMode>
      <RouterProvider router={router}>
        {authStatus ? (
          <div>
            <WorkoutTypeCard
              title="Upper"
              description="Muscle Building"
              image="armImgUrl"
              gradFro="rgb(29,116,106)"
              gradTo="rgb(69,187,174)"
            />
          </div>
        ) : (
          <div>
            <a href="/login/google/callback">Login with Google</a>
          </div>
        )}
      </RouterProvider>
    </React.StrictMode>
  );
};

const rootElement = document.getElementById("root");
if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(<App />);
}
