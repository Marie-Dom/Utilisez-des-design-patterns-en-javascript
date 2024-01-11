class ProxyRatingSorter {
  constructor() {
    this.cache = [];
  }

  async sorter(movie, orderBy) {
    const cachedResult = this.cache.find((elt) => elt.key === orderBy);
    if (cachedResult) {
      console.log("get from cache");
      return cachedResult;
    }

    const data = await RatingSorterApi.sorter(movie, orderBy);
    this.cache.push(data);
    return data;
  }
}
