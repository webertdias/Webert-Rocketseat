function toggleMode(){
const html = document.documentElement

  html.classList.toggle('ligth');

  const img = document.querySelector("#profile img")

  if(html.classList.toggle('light')){

     img.setAttribute('src', './assets/webert1.jpeg');
     img.setAttribute('alt', 'Webert de camisa azul sorrindo')
  }else {

     img.setAttribute('src', './assets/webert2.jpeg');
     img.setAttribute('alt', 'Webert de terno azul sorrindo');
  }
}