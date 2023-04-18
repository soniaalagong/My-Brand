/* VARIABLES */

/* Menú desplegable */
var btnBars = document.querySelector('#btnBars');
var cajaMenu = document.querySelector('#cajaMenu');
var overlayMenu = document.querySelector('#overlayMenu');

/* Modal 'suscríbete' */
var btnSuscribe = document.querySelector('#btnSuscribe');
var modalSuscribete = document.querySelector('#modalSuscribete');
var overlay = document.querySelector('#overlay');
var cerrarModal = document.querySelector('#cerrarModal');

/* Modal 'suscríbete' móvil */
var modalSuscribeteMvl = document.querySelector('#modalSuscribeteMvl');
var cerrarModalMvl = document.querySelector('#cerrarModalMvl');

/* Botón subir scroll */
var raiz = document.querySelector('html');
var btnInicio = document.querySelector('#btnInicio');

/*Cambiar colores logo e icono menú*/
var logo = document.querySelector('#logo');
var menuDesk = document.querySelector('#menuDesk');


/* FUNCIONES */

btnBars.addEventListener('click', function ()
{
    overlayMenu.classList.toggle("dBlock");
    cajaMenu.classList.toggle("dBlock");
});

overlayMenu.addEventListener('click', function()
{
    overlayMenu.classList.toggle("dBlock");
    cajaMenu.classList.toggle("dBlock");
});

btnSuscribe.addEventListener('submit', (e)=>
{
    e.preventDefault();
    overlay.classList.add("dBlock");
    if (window.innerWidth < 768)
    {
        modalSuscribeteMvl.classList.add("dBlock");
    }
    else
    {
        modalSuscribete.classList.add("dBlock");
    }
});

cerrarModal.addEventListener('click', function ()
{
    modalSuscribete.classList.remove("dBlock");
    overlay.classList.remove("dBlock");
});

cerrarModalMvl.addEventListener('click', function ()
{
    modalSuscribeteMvl.classList.remove("dBlock");
    overlay.classList.remove("dBlock");
});

window.addEventListener('scroll', function()
{
    var scrollTop = raiz.scrollTop;
    if (scrollTop >= 300)
    {
        btnInicio.classList.add("dFlex");
        if (scrollTop >= 2245)
        {
            logo.style.color = "white";
            btnBars.style.color = "white";
            menuDesk.style.color = "white";
        } 
        else
        {
            logo.style.color = "initial";
            btnBars.style.color = "initial";
            menuDesk.style.color = "initial";
        }
    }
    else
    {
        btnInicio.classList.remove("dFlex");
    }
});

