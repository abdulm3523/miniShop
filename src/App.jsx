import "./App.css";
import Header from "../src/Header";
import Sidebar from "../src/Sidebar";
import Products from "../src/Products";
import MovieContext from "./context/movieContext";
import { useState } from "react";
function App() {
  const [cartData, setCartData] = useState([]);
  return (
    <>
      <MovieContext.Provider value={{ cartData, setCartData }}>
        <Header />
        <main>
          <div className="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
            <Sidebar />
            <Products />
          </div>
        </main>
      </MovieContext.Provider>
    </>
  );
}

export default App;
