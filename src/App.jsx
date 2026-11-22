// import { useState } from 'react'
// import heroImg from './assets/hero.png'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
import { Header } from "./components/header";
import { Home } from "./components/home";
import { About } from "./components/about";
import { Contact } from "./components/contact";
import { Footer } from "./components/footer";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <Home />
      <About/>
      <Contact />
      <Footer />
    </>
  );
}

export default App;
