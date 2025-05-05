import "./App.css";
import Header from "../src/Header";
import Sidebar from "../src/Sidebar";
import Products from "../src/Products";
function App() {
  return (
    <>
      <Header />
      <main>
        <div className="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
          <Sidebar />
          <Products />
        </div>
      </main>
    </>
  );
}

export default App;
