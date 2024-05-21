var number = function(busStops){
    return busStops.reduce((sum, arr) => sum + arr[0], 0) - busStops.reduce((sum, arr) => sum + arr[1], 0)
  }