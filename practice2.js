class Student { //クラス名がStudent

  constructor(name) { //インスタンス変数の定義
    this.name = name; //プロパティ
  }

  //メソッドの定義
  cal_avg(data) {
    let sum = 0;
    for(let i = 0; i < data.length; i++) {
      sum += data[i]
    }
    let avg = sum / data.length;
    return avg;
  }

  //メソッドの定義
  judge(avg){
    let result;
    if(60 <= avg) {
      result = "合格";
    } else {
      result = "不合格";
    }
    return result;
  }
}

//インスタンス化
let a001 = new Student("sato");
let data = [70, 65, 50, 90, 30];
let avg = a001.cal_avg(data);
let result = a001.judge(avg);

//表示させる
console.log(data.length);
console.log(a001.name);
console.log(avg);
console.log(result);