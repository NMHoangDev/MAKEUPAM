import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import HomePage from "./pages/HomePage.js";
import SignUpPage from "./pages/SignUpPage/SignUpPage.js";
import LandingPage from "./pages/LandingPage/LandingPage.js";
import GlobalStyle from "./GlobalStyle/GlobalStyle.js";
import SignInPage from "./pages/Sign In Page/SignInPage.js";

function App() {
  return (
    <GlobalStyle>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/sign-up" element={<SignUpPage />} />
          <Route path="/landing" element={<LandingPage />} />
          <Route path="/sign-in" element={<SignInPage />} />
        </Routes>
      </BrowserRouter>
    </GlobalStyle>
  );
}

export default App;
