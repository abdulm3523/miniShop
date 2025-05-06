import { useContext, useState } from "react";
import MovieContext from "../context/movieContext";
import TagIcon from "../assets/tag.svg";
import Rating from "../Components/Rating";
import { getImage } from "../utils/cineImage";
import ProductDetailsModal from "./ProductDetailsModal";
export default function ProductCard({ movie }) {
  const { cartData, setCartData } = useContext(MovieContext);
  const [showModal, setShowModal] = useState(false);
  const [movieDetails, setMovieDetails] = useState(null);
  const a = [];
  // SHOW MODAL FOR PRODUCT DETAILS
  function handelOnProductClick(movie, evt) {
    evt.preventDefault();
    setMovieDetails(movie);
    setShowModal(true);
  }

  // Handel Cancel model

  function handelCancelModal(evt) {
    evt.preventDefault();
    setMovieDetails(null);
    setShowModal(false);
  }

  // HANDEL ADD TO CART
  function handelOnAddToCartClick(evt, movie) {
    evt.preventDefault();

    const found = cartData.find((item) => item.id === movie.id);
    if (!found) {
      setCartData([...cartData, movie]);
    }
  }
  // To Change add to cart text
  const validateCartBtn = cartData.find((item) => item.id === movie.id);

  return (
    <>
      {showModal && (
        <ProductDetailsModal
          movie={movieDetails}
          onCancelModal={handelCancelModal}
        />
      )}
      <figure className="p-4 border border-black/10 shadow-sm dark:border-white/10 rounded-xl">
        <a href="" onClick={(evt) => handelOnProductClick(movie, evt)}>
          <img
            className="w-full h-60 sm:h-64 object-cover rounded-md"
            src={getImage(movie.thumbnail)}
            alt=""
          />
          <figcaption className="pt-4">
            <h3 className="text-xl mb-1">{movie.name}</h3>
            <p className="text-[#575A6E] text-sm mb-2">{movie.genre}</p>
            <div className="flex items-center space-x-1 mb-5">
              <Rating rating={movie.rating} />
            </div>
          </figcaption>
        </a>
        <a
          className="bg-primary rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-[#171923] font-semibold text-sm"
          href="#"
          onClick={(evt) => handelOnAddToCartClick(evt, movie)}
        >
          <img src={TagIcon} alt="" />
          {validateCartBtn ? (
            "Already Added"
          ) : (
            <span>${movie.price} | Add to Cart</span>
          )}
        </a>
      </figure>
    </>
  );
}
