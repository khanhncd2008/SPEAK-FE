import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AAIzaSyCPswOBJBdggMyGFmGsp1WFECXfoD0bek0", // Add API Key
  databaseURL:"https://tesssss-d156d-default-rtdb.firebaseio.com" // Add databaseURL
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const db = firebase;
const generaterandomname = () => {
  const randomnumber = Math.floor(Math.random() * 1000);
  return "user" + randomnumber +"123";
}
var firepadRef = firebase.database().ref();
const urlparams = new URLSearchParams(window.location.search);
const roomId = urlparams.get("id") || urlparams.get("cid");
const name = urlparams.get("name");
const ishost = urlparams.get("host");
export const userName = name? name : generaterandomname();

if (roomId) {
  firepadRef = firepadRef.child(roomId);
} else {
  firepadRef = firepadRef.push();
  window.history.replaceState(null, "Meet", "?id=" + firepadRef.key);
}
if (ishost) {
  firepadRef.child("host").set(userName);
}
export default firepadRef;