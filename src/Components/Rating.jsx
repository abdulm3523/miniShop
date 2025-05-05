import startIcon from "../assets/star.svg";
export default function Rating({ rating }) {
  const stars = Array(rating).fill(startIcon);
  return (
    <>
      {stars.map((star) => (
        <img src={star} alt="star" width="14" height="14" />
      ))}
    </>
  );
}
