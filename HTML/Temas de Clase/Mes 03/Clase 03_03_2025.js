function main() {
  // 1. Filtrado
  // ----------------------------------------------------------------------------------------------------------------------------------------|

  let array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18];

  let array2 = array1.filter((x) => x % 2 == 0);
  console.log(array2);
  // output [2, 4, 6, 8, 10, 12, 14, 16, 18]

  let TempArray = [2, 8, 10, 17, 7, 23, 134, 21];

  let array3 = TempArray.sort((a, b) => a - b);
  console.log(array3);
  // output [2, 7, 8, 10, 17, 21, 23, 134]

  let array4 = TempArray.sort().reverse();
  console.log(array4);

  // ----------------------------------------------------------------------------------------------------------------------------------------|

  let arrayObjects = [
    { name: "John", id: 1 },
    { name: "Jane", id: 2 },
    { name: "Peter", id: 3 },
    { name: "Jill", id: 4 },
    { name: "Mary", id: 5 },
  ];

  let arrayFiltered = arrayObjects.filter(
    (arrayObjects) => arrayObjects.id <= 4
  );
  console.log(arrayFiltered);
  // output [{ name: 'John', id: 1 }, { name: 'Jane', id: 2 }, { name: 'Peter', id: 3 }, { name: 'Jill', id: 4 }]

  // ----------------------------------------------------------------------------------------------------------------------------------------|

  // Ejericio de filtrado y ordenamiento

  let arrayMovies = [
    "The Matrix",
    "The Lord of the Rings",
    "The Godfather",
    "The Dark Knight",
    "The Shawshank Redemption",
    "Forrest Gump",
    "The Silence of the Lambs",
    "American Pie",
    "Amercian Psycho",
    "Avatar",
  ];

  // Una forma de hacerlo
  let arrayMoviesFiltered1 = arrayMovies.filter((arrayMovies) =>
    arrayMovies.startsWith("A")
  );
  // Otra froma de hacerlo
  let arrayMoviesFiltered2 = arrayMovies.filter(
    (arrayMovies) => arrayMovies[0] == "A"
  );

  console.log(`Primera forma: ${arrayMoviesFiltered1}`);
  console.log(`Segunda forma: ${arrayMoviesFiltered2}`);
  // output ["American Pie", "Amercian Psycho", "Avatar"]

  let sortedArray = arrayMovies.sort();
  console.log(`Arreglo Ordenado: ${sortedArray}`);
  // output ["American Pie", "Amercian Psycho", "Avatar", "Forrest Gump", "The Dark Knight", "The Godfather", "The Lord of the Rings", "The Matrix", "The Shawshank Redemption", "The Silence of the Lambs"]

  let reversedArray = arrayMovies.reverse();
  console.log(`Arreglo alreves: ${reversedArray}`);
  // output ["The Silence of the Lambs", "The Shawshank Redemption", "The Matrix", "The Lord of the Rings", "The Godfather", "The Dark Knight", "Forrest Gump", "Avatar", "American Pie", "Amercian Psycho"]

  // ----------------------------------------------------------------------------------------------------------------------------------------|

  // Mapa Reduce

  let names = ["John", "Jane", "Peter", "Jill", "Mary"];
  let sizes = names.map((name) => name.length);
  console.log(sizes);
  // output: [4, 4, 5, 4, 4]

  let nums = [1, 2, 3, 4, 5];
  let result = nums.reduce((sum, current) => sum + current, 3);
  console.log(result);
  // output: 18
  let result2 = nums.reduce((sum, current) => sum + current);
  console.log(result2);
  // output: 15

  // ----------------------------------------------------------------------------------------------------------------------------------------|

  let arrayPeliculas = [
    { name: "The Matrix", size: "The Matrix".length },
    { name: "The Lord of the Rings", size: "The Lord of the Rings".length },
    { name: "The Godfather", size: "The Godfather".length },
    { name: "The Dark Knight", size: "The Dark Knight".length },
    {
      name: "The Shawshank Redemption",
      size: "The Shawshank Redemption".length,
    },
    { name: "Forrest Gump", size: "Forrest Gump".length },
    {
      name: "The Silence of the Lambs",
      size: "The Silence of the Lambs".length,
    },
  ];

  let sumSizesArray = arrayPeliculas.reduce(
    (sum, current) => sum + current.size,
    0
  );
  console.log(`La suma de todosl os tamaños es de: ${sumSizesArray}`);
  // output: 119

  arrayList(arrayPeliculas);

  // output:
  // <lo>
  //   <li>Name: The Matrix | Size: 10</li><br>
  //   <li>Name: The Lord of the Rings | Size: 21</li><br>
  //   <li>Name: The Godfather | Size: 13</li><br>
  //   <li>Name: The Dark Knight | Size: 15</li><br>
  //   <li>Name: The Shawshank Redemption | Size: 23</li><br>
  //   <li>Name: Forrest Gump | Size: 12</li><br>
  //   <li>Name: The Silence of the Lambs | Size: 23</li><br>
  // </lo>
}



function arrayList(array) {
  console.log(`<lo>`);
  for (let i = 0; i < array.length; i++) {
    console.log(
      `   <li>Name: ${array[i].name} | Size: ${array[i].size}</li><br>`
    );
  }
  console.log(`</lo>`);
}

main();