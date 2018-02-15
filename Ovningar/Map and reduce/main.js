const movies = [
    { name: "Serenity", rating: 7.9, price: 120, genre: ["scifi"], home: false, minAge: 15 },
    { name: "Terminator 2", rating: 8.5, price: 140, genre: ["scifi"], home: true, minAge: 18 },
    { name: "The room", rating: 3.6, price: 15, genre: ["drama"], home: true, minAge: 35 },
    { name: "Ghost dog", rating: 7.5, price: 95, genre: ["action","drama"], home: false, minAge: 13 },
    { name: "Inception", rating: 8.8, price: 220, genre: ["action","scifi"], home: true, minAge: 15 }
  ];


  const movieNames = movies.map(m => {
      return m.name;
  })
  console.log(movieNames);

  const moviePrices = movies.map(m =>{
      return m.price;
  })
  console.log(moviePrices)

  const availableMovies = movies.filter(h =>{
      if(h.home == true){
          return h.home
      }
  })

  console.log("Available movies", availableMovies);

  const pg15 = movies.filter(a =>{
      if (a.minAge >= 15){
          return a
      }
  })
  console.log(pg15);

  const goodMovies = movies.filter(g =>{
      if(g.rating > 7){
          return g
      }
  })
  console.log(goodMovies);

  const totalPrice = movies.reduce(function(acc, ele){
    return acc + ele.price;
  }, 0)
  console.log(totalPrice);


  const scifiMovies = movies.filter(g => {
      if (g.genre.indexOf("scifi") > -1){
          return g;
      }
  })
  console.log(scifiMovies);


  const averageRating = movies.reduce(function(acc, ele){
    return acc + ele.rating
  }, 0)/movies.length;

  console.log(averageRating)


  const averageSciFiRating = movies.filter(g => g.genre.indexOf("scifi") > -1 ).reduce(function(acc, ele, n, list){
      return acc + ele.rating / list.length;
  }, 0)
  console.log(averageSciFiRating);

  const genre = movies.reduce(function(acc, cur){
      return acc.concat(cur.genre)
  }, []).filter(function(item, pos, self){
      return self.indexOf(item) == pos;
  })
  console.log (genre);
