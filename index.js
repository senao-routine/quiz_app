//変数
let unko = "Hello World";
// unko = "Hello World2";

//定数
const bigUnko = "Hello..World....";
// bigUnko = "aaa";

//配列
let inoki = ["いーち", "にー", "さんー", "ダー！！"];

//ループ文
// let index = 0;
// while (index < inoki.length) {
//   //繰り返し命令
//   console.log(inoki[index]);
//   index++;
// }

//if else

// if (inoki.length > 3) {
//   console.log("ボンバイエ");
// } else {
//   console.log("ちわ");
// }

//関数
const test = (arg) => {
  if (inoki.length > arg) {
    console.log("ボンバイエ");
  } else {
    console.log("ちわ");
  }
};

const unko2 = {
  color: "pink",
  size: "large",
  purfume: "mint",
  goToilet: () => {
    console.log("Hello World!!");
  },
};

document.getElementsByTagName("button")[0].addEventListener("click", () => {
  window.alert("Hello World");
});
