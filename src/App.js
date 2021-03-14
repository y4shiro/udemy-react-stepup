import React from "react";
import { Router } from "./router/Router";
import "./styles.css";
import { UserProvider } from "./provider/UserProvider";
import { RecoilRoot } from "recoil";

export default function App() {
  return (
    <RecoilRoot>
      <UserProvider>
        <Router />
      </UserProvider>
    </RecoilRoot>
  );
}
