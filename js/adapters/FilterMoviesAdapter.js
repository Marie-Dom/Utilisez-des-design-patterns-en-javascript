class FilterMoviesAdapter {
  constructor(Movies, actor) {
    this.Movies = Movies;
    this.actor = actor;
  }

  async filterByActor() {
    return await filterV2.filterByActor(this.actor, this.Movies);
  }
}
