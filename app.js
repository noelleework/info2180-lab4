document.getElementById("search-btn").addEventListener("click", function () {
  fetch("superheroes.php")
    .then(function (response) {
      return response.text();
    })
    .then(function (data) {
      alert(data);
    })
    .catch(function (error) {
      alert("Something went wrong: " + error);
    });
});