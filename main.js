var lista1 = []
function submit() {
  var livro1 = document.getElementById('nameOfTheBook1').value
  var livro2 = document.getElementById('nameOfTheBook2').value
  var livro3 = document.getElementById('nameOfTheBook3').value

  lista1.push(livro1)
  lista1.push(livro2)
  lista1.push(livro3)

  document.getElementById('displayName').innerHTML = lista1
  console.log(lista1)
}

var lista2 = []
function submit() {
  var filme1 = document.getElementById('nameOfTheMovie1').value
  var filme2 = document.getElementById('nameOfTheMovie2').value
  var filme3 = document.getElementById('nameOfTheMovie3').value

  lista2.push(movie1)
  lista2.push(movie2)
  lista2.push(movie3)

  document.getElementById('displayName').innerHTML = lista2
  console.log(lista2)
}

var lista3 = []
function submit() {
  var serie1 = document.getElementById('nameOfTheSerie1').value
  var serie2 = document.getElementById('nameOfTheSerie2').value
  var serie3 = document.getElementById('nameOfTheSerie3').value

  lista3.push(serie1)
  lista3.push(serie2)
  lista3.push(serie3)

  document.getElementById('displayName').innerHTML = lista3
  console.log(lista3)
}
