
function lanzarCabeceraCompleta() {
	generarCabecera();
	anadirHREF();
}

function generarCabecera() {

	//busqueda de div cabecera
	let divCabecera = document.querySelector(".cabecera");

	//creacion de elementos
	let header = document.createElement("header");
	let a = document.createElement("a");
	let img = document.createElement("img");
	let nav = document.createElement("nav");
	let ul = document.createElement("ul");

	// texto de la etiqueta <a>
	var textoA = [
		"Inicio",
		"Alquiler",
		"Anuncia tu invernadero",
		"Iniciar Sesion",
		"Nosotros"
	];

	// creamos la lista y añadimos el texto dinamicamente

	for (i = 0; i < textoA.length; i++) {

		var li = document.createElement("li");
		var a_li = document.createElement("a");
		a_li.classList.add("menu" + i)
		contenido = textoA[i];
		a_li.appendChild(document.createTextNode(contenido));
		ul.appendChild(li).appendChild(a_li);
	}

	ul.appendChild(li);

	//anadir atributos
	header.setAttribute("id", "main-header");
	a.setAttribute("id", "logo-header");
	a.setAttribute("href", "#");
	img.setAttribute("src", "LogoAgrorent.png");
	img.setAttribute("id", "logocabecera");

	//agregamos etiquetas dentro de otras etiquetas
	a.appendChild(img);
	nav.appendChild(ul);
	header.appendChild(a);
	header.appendChild(nav);
	divCabecera.appendChild(header)


}

function anadirHREF() {

	let inicio = document.querySelector(".menu0");
	inicio.setAttribute("href", "index.html");

	let alquilar = document.querySelector(".menu1");
	alquilar.setAttribute("href", "Alquilar.html");

	let anunciar = document.querySelector(".menu2");
	anunciar.setAttribute("href", "Anuncios.html");

	let sesion = document.querySelector(".menu3");
	sesion.setAttribute("href", "InicioDeSesion.html");

	let nosotros = document.querySelector(".menu4");
	nosotros.setAttribute("href", "Nosotros.html");

}

window.onload = lanzarCabeceraCompleta();