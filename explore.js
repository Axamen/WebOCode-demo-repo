var sort = document.getElementById("sort");
var search = document.getElementById("search");

sort.addEventListener("click", sortItems);
search.addEventListener("keyup", searchItems);

function sortItems(e) {
  var items = sort.nextElementSibling;
  if (items.style.display === "block") {
    items.style.display = "none";
  } else {
    items.style.display = "block";
  }
}

function searchItems(e) {
  var input = e.target.value.toLowerCase();
  var searchInput = document.getElementsByClassName("items-stack");
  Array.from(searchInput).forEach(function(item) {
    var itemFound = item.textContent;

    if (itemFound.toLowerCase().indexOf(input) != -1) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
}
