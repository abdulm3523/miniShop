import { movies } from "./cine/movie";
import ProductCard from "./Components/ProductCard";
export default function ProductsList() {
  return (
    <div className="content">
      <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-7">
        {movies.map((movie) => (
          <ProductCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}
