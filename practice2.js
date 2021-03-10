//クラス式に書き換え
let Student = class {
  constructor(name) { //constructor(name)がコンストラクタ(初期化メソッド)
    this.name = name; //this.nameがプロパティ
  }

  avg(math, english) {
    console.log((math + english) / 2);
  }
};

let a001 = new Student("sato"); //a001がインスタンス, new Student("sato")がクラス
console.log(a001.name);
a001.avg(80, 70); //メソッド

let a002 = new Student("tanaka");
console.log(a002.name);