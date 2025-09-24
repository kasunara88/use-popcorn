const KEY = "471e9f41";

function api() {
  fetch(`http://www.omdbapi.com/?apikey=${KEY}&s=batman`)
    .then((res) => res.json())
    .then((data) => console.log(data));
}

export default api;
