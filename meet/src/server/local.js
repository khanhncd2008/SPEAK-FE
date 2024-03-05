const generaterandomname = () => {
  const randomnumber = Math.floor(Math.random() * 1000);
  return "user" + randomnumber +"123";
}

const urlparams = new URLSearchParams(window.location.search);
let roomId = urlparams.get("id") || urlparams.get("cid");
const name = urlparams.get("name");
const ishost = urlparams.get("host");
export const userName = name? name : generaterandomname();

let room = {
  id: roomId,
  host: ishost ? userName : null,
  users: []
};

if (roomId) {
  // If the room ID is provided, find the room in your local storage (not a real database)
  // This is just a placeholder and won't persist across different sessions
  room = { id: roomId, host: null, users: [] };
} else {
  // If no room ID is provided, create a new room with a random ID
  roomId = "room" + Math.floor(Math.random() * 1000);
  room = { id: roomId, host: userName, users: [] };
  window.history.replaceState(null, "Meet", "?id=" + roomId);
}

if (ishost) {
  room.host = userName;
}

export default room;
