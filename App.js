import React from "react";
// Components
import { AuthProvider } from "./src/context/AuthContext";
import Root from "./src/screens/Root";

function App() {
  return (
    <AuthProvider>
      <Root />
    </AuthProvider>
  );
}

export default App;