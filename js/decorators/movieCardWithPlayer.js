function movieCardWithPlayer(movieCard) {
  if (movieCard.movie.actor === "sylvester") {
    movieCard.$wrapper.addEventListener("click", () => {
      const Player = new playerModal(movieCard.movie);
      Player.render();
    });
  }
  return movieCard;
}
