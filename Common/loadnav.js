const BASE_PATH = '/VallikaTech'; // <-- adjust this if your repo name ever changes

fetch(`${BASE_PATH}/Common/navbar.html`)
  .then(res => res.text())
  .then(data => {
    document.getElementById('navbar').innerHTML = data;
  })
  .catch(err => console.error('Navbar load error:', err));
