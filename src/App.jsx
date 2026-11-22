// import { useState } from 'react'
// import heroImg from './assets/hero.png'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
import { Header } from "./components/header";
import { Home } from "./components/home";
import { Footer } from "./components/footer";
import { Contact } from "./components/contact";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <Home />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
