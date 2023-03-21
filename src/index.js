import { takeLocationAPI } from "./app";
import { gifAPI } from "./app";

function component() {
  takeLocationAPI();
  gifAPI();
}
component();
