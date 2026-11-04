document.getElementById("search-btn").addEventListener("click", function () {
  const input = document.getElementById("search-input");
  const query = input.value.trim();

  fetch("superheroes.php?query=" + encodeURIComponent(query))
    .then(function (response) {
      return response.text();
    })
    .then(function (data) {
      document.getElementById("result").innerHTML = data;
    })
    .catch(function (error) {
      document.getElementById("result").innerHTML = "Something went wrong.";
    });
});