// Carrousel

var elem = document.querySelector('#mainCarousel');

var flkty = new Flickity( elem,
{ 
  cellAlign: 'left',
  contain: true,
  autoPlay: true, //Para que se mueva solo (3 seg por defec)
  autoPlay: 5000, //Así se configura el tiempo en seg
  wrapAround: true //Para que el bucle se vea 'infinito'
});