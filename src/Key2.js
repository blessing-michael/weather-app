export function genn() {
  let mixgen = ["2aacqF", "EgQelT", "Da9Soy", "yq9QD", "EWUJ9", "wjZ"];
  let secone = "2a";
  let sectwo = "LgC";

  let secretGif = sectwo.split("").reverse().join("");

  let stepOne = mixgen.join("").split("").join("");

  let stepTwo = stepOne.split(secone);

  let stepThree = stepTwo[0] + stepTwo[1];

  let key = stepThree + secretGif;

  return key;
}
