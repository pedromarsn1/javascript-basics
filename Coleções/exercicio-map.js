function getSingers(map) {
  let singers = [];
  for ([key, value] of map) {
    if (value == "Singer") {
      singers.push(key);
    }
  }

  return singers;
}

const band = new Map();

band.set("Harry", "Singer");
band.set("Rayssa", "Drummer");
band.set("Pedro", "Singer");
band.set("Charles", "Pianist");

console.log(getSingers(band))