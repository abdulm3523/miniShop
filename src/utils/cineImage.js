export const getImage = (thumbnailName) => {
  return new URL(`../assets/movie-covers/${thumbnailName}`, import.meta.url)
    .href;
};
