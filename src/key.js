export function keygen() {
  let mix = ["2a2b27d9d", "0bea63", "6f3c17", "e0dd8a", "0fc"];
  let secone = "2a";
  let sectwo = "c620";

  let secret = sectwo.split("").reverse().join("");
  let stepone = mix.join("").split("").join("");
  let steptwo = stepone.split(secone);
  let stepthree = steptwo[0] + steptwo[1];
  let key = stepthree + secret;
  return key;
}
