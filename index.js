
var container = document.getElementById("miContenedor");


for (var index in container.children) {
  if (container.children.hasOwnProperty(index)) {
    var element = container.children[index];
    element.classList.add("mi-clase");
  }
}



var elementos = ["Elemento 1", "Elemento 2", "Elemento 3"];

var lista = document.getElementById("miLista");

elementos.forEach(function(item) {
  var li = document.createElement("li");
  li.textContent = item;
  lista.appendChild(li);
});

