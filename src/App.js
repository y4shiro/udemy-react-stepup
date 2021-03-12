import React from "react";
import { Router } from "./router/Router";
import "./styles.css";
import { UserProvider } from "./provider/UserProvider";

export default function App() {
  return (
    <UserProvider>
      <Router />
    </UserProvider>
  );
}
