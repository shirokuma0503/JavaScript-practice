class Student {
  constructor(name) {
    this.name = name;
  }

  avg(math, english) {
    console.log((math + english) / 2);
  }
}

let a001 = new Student("sato");
console.log(a001.name);

let a002 = new Student("tanaka");
console.log(a002.name);