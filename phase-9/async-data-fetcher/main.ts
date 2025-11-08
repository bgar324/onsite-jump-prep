class DataFetcher {
  private _cache : Map<string, string>
  constructor(_cache : Map<string, string>) {
    this._cache = _cache
  }

  fetchData(key : string) : Promise<string> {
    if (this._cache.has(key)) {
      return Promise.resolve(this._cache.get(key)!)
    } else {
      return new Promise(resolve => {
        setTimeout(() => {
          const value = `Data for ${key}`
          this._cache.set(key, value);
          resolve(value);
        }, 200);
      })
    }
  }

  getCached(key : string) : string | undefined{
      return this._cache.get(key)
  }

  clearCache(){
    this._cache.clear()
  }
}