import Logo from "../src/assets/logo.svg";
import Ring from "../src/assets/ring.svg";
import Sun from "../src/assets/icons/sun.svg";
import Cart from "../src/assets/shopping-cart.svg";
import { useContext, useState } from "react";
import MovieContext from "./context/movieContext";
import CardModal from "./Components/CardModal";
export default function Header() {
  const { cartData } = useContext(MovieContext);
  const [showCartModal, setShowCartModal] = useState(false);
  function handleCardModal() {
    setShowCartModal(true);
  }

  function handelOnCloseModal(evt) {
    evt.preventDefault();
    setShowCartModal(false);
  }
  return (
    <>
      {showCartModal && <CardModal handelOnCloseModal={handelOnCloseModal} />}
      <header>
        <nav className="container flex items-center justify-between space-x-10 py-6">
          <a href="index.html">
            <img src={Logo} width="139" height="26" alt="" />
          </a>

          <ul className="flex items-center space-x-5">
            <li>
              <a
                className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
                href="#"
              >
                <img src={Ring} width="24" height="24" alt="" />
              </a>
            </li>
            <li>
              <a
                className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
                href="#"
              >
                <img src={Sun} width="24" height="24" alt="" />
              </a>
            </li>
            <li>
              <a
                className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
                href="#"
                onClick={handleCardModal}
              >
                <img src={Cart} width="24" height="24" alt="" />
              </a>
              <span>{cartData.length > 0 && cartData.length}</span>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
