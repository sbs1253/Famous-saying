// 랜덤하게 추출
function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// 랜덤하게 추출 (array Ver)
function getRandomArray(min, max, count) {
  // 종료
  if (max - min + 1 < count) return;

  // 배열 생성
  var rst = [];

  while (1) {
    var index = getRandom(min, max);

    // 중복 여부를 체크
    if (rst.indexOf(index) > -1) {
      continue;
    }

    rst.push(index);

    // 원하는 배열 갯수가 되면 종료
    if (rst.length == count) {
      break;
    }
  }
  return rst;
}
const quote = document.querySelector("#mood");
const author = document.querySelector("#explain");
const one = document.querySelector("#one");
const two = document.querySelector("#two");
const three = document.querySelector("#three");
const oneA = document.querySelector("#oneA");
const twoA = document.querySelector("#twoA");
const threeA = document.querySelector("#threeA");

const text1 = document.querySelector("#text1");
const text2 = document.querySelector("#text2");
const text3 = document.querySelector("#text3");

const NegativeNum = getRandomArray(0, Negative.length - 1, 4);
const PositiveNum = getRandomArray(0, Positive.length - 1, 4);
const NormalNum = getRandomArray(0, Normal.length - 1, 4);

function newNumber(len) {
  var newnum = [];
  while (len.length > 3) {
    var movenum = len.splice(Math.floor(Math.random() * len.length), 1)[0];
    newnum.push(movenum);
  }
  return newnum;
}
newNumber(NegativeText);
newNumber(PositiveText);
newNumber(NormalText);

function 부정() {
  quote.innerText = Negative[NegativeNum[0]].quote;
  author.innerText = "➽─" + Negative[NegativeNum[0]].author + "─❥";
  one.innerText = Negative[NegativeNum[1]].quote;
  oneA.innerText = "➽─" + Negative[NegativeNum[1]].author + "─❥";
  two.innerText = Negative[NegativeNum[2]].quote;
  twoA.innerText = "➽─" + Negative[NegativeNum[2]].author + "─❥";
  three.innerText = Negative[NegativeNum[3]].quote;
  threeA.innerText = "➽─" + Negative[NegativeNum[3]].author + "─❥";
  // ---------------------------------------------------
  text1.innerText = NegativeText[0]["text"];
  text2.innerText = NegativeText[1]["text"];
  text3.innerText = NegativeText[2]["text"];
}
function 보통() {
  quote.innerText = Normal[NormalNum[0]].quote;
  author.innerText = "➽─" + Normal[NormalNum[0]].author + "─❥";
  one.innerText = Normal[NormalNum[1]].quote;
  oneA.innerText = "➽─" + Normal[NormalNum[1]].author + "─❥";
  two.innerText = Normal[NormalNum[2]].quote;
  twoA.innerText = "➽─" + Normal[NormalNum[2]].author + "─❥";
  three.innerText = Normal[NormalNum[3]].quote;
  threeA.innerText = "➽─" + Normal[NormalNum[3]].author + "─❥";
  // ---------------------------------------------------
  text1.innerText = NormalText[0]["text"];
  text2.innerText = NormalText[1]["text"];
  text3.innerText = NormalText[2]["text"];
}
function 긍정() {
  quote.innerText = Positive[PositiveNum[0]].quote;
  author.innerText = "➽─" + Positive[PositiveNum[0]].author + "─❥";
  one.innerText = Positive[PositiveNum[1]].quote;
  oneA.innerText = "➽─" + Positive[PositiveNum[1]].author + "─❥";
  two.innerText = Positive[PositiveNum[2]].quote;
  twoA.innerText = "➽─" + Positive[PositiveNum[2]].author + "─❥";
  three.innerText = Positive[PositiveNum[3]].quote;
  threeA.innerText = "➽─" + Positive[PositiveNum[3]].author + "─❥";
  // ---------------------------------------------------
  text1.innerText = PositiveText[0]["text"];
  text2.innerText = PositiveText[1]["text"];
  text3.innerText = PositiveText[2]["text"];
}
