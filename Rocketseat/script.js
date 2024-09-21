function toggleMode() {
  // document é a representação do nosso documento em objeto JavaScript
  // documentElement é o HTML
  const html = document.documentElement;

  //toda essa condicional abaixo pode ser feito com o toggle
  //verifica a lista de classe, se tiver light, remove, se não tiver, adiciona
  html.classList.toggle("light");

  //  if (html.classList.contains("light")) {
  //    html.classList.remove("light");
  //  } else {
  //    html.classList.add("light");
  //  }

  //pegar a tag img
  const img = document.querySelector("#profile img");

  // substituir a imagem
  if (html.classList.contains("light")) {
    // se tiver light mode, adicionar a imagem light
    img.setAttribute("src", "assets/avatar-light.png");
    img.setAttribute("alt", "Logo Natanael gato de Bones DJ - Colorido");
  } else {
    //se não tiver light mode, manter a imagem normal
    img.setAttribute("src", "assets/avatar.png");
    img.setAttribute("alt", "Logo Natanael gato de Bones DJ - Branco");
  }
}
